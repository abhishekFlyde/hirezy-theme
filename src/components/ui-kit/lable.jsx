"use client";
import React, { Suspense } from "react";

const Typography = React.lazy(() => import("./typography"));

export default function Label({
  text,
  className = "",
  bgColor = "var(--color-blue-300)",
  ...props
}) {
  return (
    <div
      {...props}
      style={{
        padding: "var(--sp-8) var(--sp-16)",
        fontSize: "16px",
        fontFamily: "var(--font-jakarta)",
        fontWeight: 400,
        lineHeight: "150%",
        borderRadius: "var(--radius-md)",
        backgroundColor: bgColor,
        display: "inline-block",
      }}
      className={className}
    >
      <Suspense fallback={<div style={{ height: "1em" }} />}>
        {text && <Typography variant="body-4">{text}</Typography>}
      </Suspense>
    </div>
  );
}
