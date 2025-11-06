"use client";

import React from "react";
import clsx from "clsx";

import SectionHeader from "./sectionHeader";

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
}) {
  return (
    <section className={clsx("mainSec", wrapperClass)}>
      <SectionHeader
        label={label}
        title={title}
        subtitle={subtitle}
        align={centerTitle}
        className=""
      />  

      <div
        className="grid gridSectionAuto  !items-between !auto-rows-max !grid-flow-dense  "
        style={{
          gap: gap,
          gridTemplateColumns: `repeat(${columns}, minmax(${minColWidth}, 1fr))`,
        }}
      >
        {items?.map((item, i) => (
          <div
            key={i}
            className={clsx(item.className, " flex justify-center   ")}
            style={{
              gridColumn: item.colSpan ? `span ${item.colSpan}` : undefined,
              gridRow: item.rowSpan ? `span ${item.rowSpan}` : undefined,
            }}
          >
            {item.component}
          </div>
        ))}
      </div>
    </section>
  );
}
