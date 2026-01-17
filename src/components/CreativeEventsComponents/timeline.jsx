"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const YEARS = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023, 2024, 2025,
];


const ITEM_WIDTH = 200;
const GAP = 128; // gap-32 = 8rem = 128px
const STRIDE = ITEM_WIDTH + GAP;
const START_OFFSET = -100; // Alignment offset to center the first item (Padding 50vw pushes start to center, item half-width is 100)

export default function DraggableTimeline() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [centerX, setCenterX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate constraints
  const minX = START_OFFSET - (YEARS.length - 1) * STRIDE;
  const maxX = START_OFFSET;

  // Initial Position (Center of list)
  const initialIndex = Math.floor(YEARS.length / 2);
  const initialX = START_OFFSET - initialIndex * STRIDE;

  const x = useMotionValue(initialX);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 18,
    mass: 0.3,
  });

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

  // Snap to nearest item center when drag ends
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

    // Calculate offset needed to center the closest item
    const closestItem = itemRefs.current[closestIndex];
    if (closestItem) {
      const itemRect = closestItem.getBoundingClientRect();
      const itemCenter =
        itemRect.left + itemRect.width / 2 - containerRect.left;
      const offset = viewportCenter - itemCenter;

      // Use springX.get() current visual position as the base
      x.set(springX.get() + offset);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let debounceTimer;

    const handleWheel = (e) => {
      e.preventDefault();

      // Use deltaX for horizontal swipe, deltaY for vertical scroll
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // Calculate new position
      const currentX = x.get();
      const newX = currentX - delta;

      // Clamp within boundaries
      // Note: maxX is the RIGHT limit (start of list), minX is the LEFT limit (end of list)
      // If newX > maxX, clamp to maxX. If newX < minX, clamp to minX.
      const clampedX = Math.max(minX, Math.min(newX, maxX));

      x.set(clampedX);

      // Clear previous timer
      clearTimeout(debounceTimer);

      // Set new timer for snapping
      debounceTimer = setTimeout(() => {
        snapToCenter();
      }, 200);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      clearTimeout(debounceTimer);
    };
  }, [minX, maxX, x]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[var(--sp-80)] bg-black overflow-hidden flex items-center"
    >
      {/* Gradient overlays for fade effect */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" /> */}
      {/* <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" /> */}

      {/* Center indicator */}
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-20 bg-whitex/30 z-20 pointer-events-none" /> */}

      <motion.div
        drag="x"
        dragConstraints={{ left: minX, right: maxX }}
        dragElastic={0.05}
        dragMomentum={false}
        style={{ x: springX }}
        onDragStart={() => {
          setIsDragging(true);
        }}
        onDrag={(_, info) => {
          // Direct update without spring during drag for smooth feel
          x.set(x.get() + info.delta.x);
        }}
        onDragEnd={() => {
          setIsDragging(false);
          snapToCenter();
        }}
        className="flex items-center gap-32 px-[50vw] cursor-grab active:cursor-grabbing select-none"
      >
        {YEARS.map((year, i) => {
          // Get actual DOM position of each item
          const distanceFromCenter = useTransform(springX, (latest) => {
            const itemRef = itemRefs.current[i];
            if (!itemRef || !centerX) return 1000;

            const itemRect = itemRef.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            // Calculate item's center position relative to viewport center
            const itemCenter =
              itemRect.left + itemRect.width / 2 - containerRect.left;
            const viewportCenter = centerX;

            return Math.abs(itemCenter - viewportCenter);
          });

          // FontSize: 56px -> 40px -> 36px -> 20px
          const fontSize = useTransform(
            distanceFromCenter,
            [0, 200, 400, 600],
            ["56px", "40px", "36px", "20px"]
          );

          // Opacity: 1 -> 0.4 -> 0.3 -> 0.1
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
                style={{
                  fontSize,
                  opacity,
                }}
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
