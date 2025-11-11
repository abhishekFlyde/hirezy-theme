"use client";

import React, { useRef } from "react";
import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionHeader from "./sectionHeader";

function StackedCard({ index, smoothProgress, itemData, renderItem }) {
  const startY = 100 - index * 25;
  const startScale = 0.85 + index * 0.05;

  const y = useTransform(smoothProgress, [0, 0.6], [startY, 0]);
  const scale = useTransform(smoothProgress, [0, 0.6], [startScale, 1]);
  const rotateX = useTransform(smoothProgress, [0, 0.6], [15, 0]);
  const opacity = useTransform(smoothProgress, [0.1, 0.6], [0.5, 1]);

  return (
    <motion.div
      style={{
        y,
        scale,
        rotateX,
        opacity,
        transformOrigin: "center center",
        gridColumn: itemData.colSpan ? `span ${itemData.colSpan}` : undefined,
        gridRow: itemData.rowSpan ? `span ${itemData.rowSpan}` : undefined,
      }}
      className={clsx(itemData.className, "flex justify-center")}
    >
      {/* ✅ Safe rendering even if renderItem isn't provided */}
      {typeof renderItem === "function" ? (
        renderItem(itemData)
      ) : (
        <div className="w-full p-4 bg-gray-100 rounded-xl text-center text-gray-500">
          ⚠️ No renderItem function provided
        </div>
      )}
    </motion.div>
  );
}

export default function GridSection({
  label,
  title,
  subtitle,
  centerTitle = "center",
  minColWidth = "300px",
  gap = "24px",
  columns = 3,
  items = [],
  wrapperClass = "",
  renderItem,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section className={clsx("mainSec relative", wrapperClass)} ref={ref}>
      <SectionHeader
        label={label}
        title={title}
        subtitle={subtitle}
        align={centerTitle}
      />

      <div
        className="relative grid gridSectionAuto auto-rows-max grid-flow-dense"
        style={{
          gap,
          gridTemplateColumns: `repeat(${columns}, minmax(${minColWidth}, 1fr))`,
          perspective: "1200px",
        }}
      >
        {items.map((itemData, i) => (
          <StackedCard
            key={i}
            index={i}
            smoothProgress={smoothProgress}
            itemData={itemData}
            renderItem={renderItem}
          />
        ))}
      </div>
    </section>
  );
}
