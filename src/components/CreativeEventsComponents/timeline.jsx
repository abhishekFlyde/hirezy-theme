"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* =========================
   DraggableTimeline
========================= */

export default function DraggableTimeline({
  /* DATA */
  years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024, 2025,
  ],

  /* LAYOUT CONSTANTS */
  itemWidth = 200,
  gap = 128, // gap-32 = 8rem = 128px
  startOffset = -100, // Alignment offset

  /* SPRING CONFIG */
  springConfig = {
    stiffness: 150,
    damping: 18,
    mass: 0.3,
  },

  /* DRAG CONFIG */
  dragElastic = 0.05,
  snapDelay = 200,
}) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [centerX, setCenterX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  /* DERIVED VALUES (same logic) */
  const stride = itemWidth + gap;

  const minX = startOffset - (years.length - 1) * stride;
  const maxX = startOffset;

  const initialIndex = Math.floor(years.length / 2);
  const initialX = startOffset - initialIndex * stride;

  const x = useMotionValue(initialX);

  const springX = useSpring(x, springConfig);

  useEffect(() => {
    const updateCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCenterX(rect.width / 2);
      }
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  /* SNAP TO CENTER */
  const snapToCenter = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const viewportCenter = containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((itemRef, i) => {
      if (!itemRef) return;

      const itemRect = itemRef.getBoundingClientRect();
      const itemCenter =
        itemRect.left + itemRect.width / 2 - containerRect.left;
      const distance = Math.abs(itemCenter - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    const closestItem = itemRefs.current[closestIndex];
    if (closestItem) {
      const itemRect = closestItem.getBoundingClientRect();
      const itemCenter =
        itemRect.left + itemRect.width / 2 - containerRect.left;
      const offset = viewportCenter - itemCenter;

      x.set(springX.get() + offset);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let debounceTimer;

    const handleWheel = (e) => {
      e.preventDefault();

      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      const currentX = x.get();
      const newX = currentX - delta;

      const clampedX = Math.max(minX, Math.min(newX, maxX));
      x.set(clampedX);

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(snapToCenter, snapDelay);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      clearTimeout(debounceTimer);
    };
  }, [minX, maxX, x, snapDelay]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[var(--sp-80)] bg-black overflow-hidden flex items-center"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: minX, right: maxX }}
        dragElastic={dragElastic}
        dragMomentum={false}
        style={{ x: springX }}
        onDragStart={() => setIsDragging(true)}
        onDrag={(_, info) => {
          x.set(x.get() + info.delta.x);
        }}
        onDragEnd={() => {
          setIsDragging(false);
          snapToCenter();
        }}
        className="flex items-center gap-32 px-[50vw] cursor-grab active:cursor-grabbing select-none"
      >
        {years.map((year, i) => {
          const distanceFromCenter = useTransform(springX, () => {
            const itemRef = itemRefs.current[i];
            if (!itemRef || !centerX) return 1000;

            const itemRect = itemRef.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            const itemCenter =
              itemRect.left + itemRect.width / 2 - containerRect.left;

            return Math.abs(itemCenter - centerX);
          });

          const fontSize = useTransform(
            distanceFromCenter,
            [0, 200, 400, 600],
            ["56px", "40px", "36px", "20px"]
          );

          const opacity = useTransform(
            distanceFromCenter,
            [0, 200, 400, 600],
            [1, 0.6, 0.3, 0.1]
          );

          return (
            <div
              key={year}
              ref={(el) => (itemRefs.current[i] = el)}
              className="w-[200px] flex justify-center shrink-0"
            >
              <motion.div
                style={{ fontSize, opacity }}
                className="font-bold text-white whitespace-nowrap tracking-wide"
              >
                {year}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
