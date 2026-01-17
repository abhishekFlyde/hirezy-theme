"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const YEARS = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023, 2024, 2025,
];

export default function DraggableTimeline() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [centerX, setCenterX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 7,
    mass: 0.5,
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
    const viewportCenter = centerX;

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

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center"
    >
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Center indicator */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-20 bg-white/30 z-20 pointer-events-none" />

      <motion.div
        drag="x"
        dragConstraints={{ left: -5000, right: 5000 }}
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

          // Scale: bigger ONLY at exact center
          const scale = useTransform(
            distanceFromCenter,
            [0, 50, 150, 300],
            [1.2, 1.0, 0.85, 0.7]
          );

          // Opacity: full at center, fade out
          const opacity = useTransform(
            distanceFromCenter,
            [0, 50, 150, 300],
            [1, 0.8, 0.5, 0.3]
          );

          // Color: white at center, gray on sides
          const brightness = useTransform(
            distanceFromCenter,
            [0, 50, 150, 300],
            [1, 0.8, 0.6, 0.4]
          );

          return (
            <motion.div
              key={year}
              ref={(el) => (itemRefs.current[i] = el)}
              style={{
                scale,
                opacity,
                filter: useTransform(brightness, (b) => `brightness(${b})`),
              }}
              className="text-7xl font-bold text-white whitespace-nowrap tracking-wide"
            >
              {year}
            </motion.div>
          );
        })}
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
        ← Drag to navigate →
      </div>
    </div>
  );
}
