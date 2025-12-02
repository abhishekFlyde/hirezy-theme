"use client";
import React, { Suspense } from "react";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));

export default function TheResultCard({
  title,
  subtitle,
  result,
  className = "",
  ...props
}) {
  return (
    <div
      {...props}
      className={clsx("result-card", className)}
    >
      <Suspense fallback={<div style={{ minHeight: "60px" }} />}>
        {/* Left Side - Title and Subtitle */}
        <div className="result-card__content">
          {title && (
            <Typography variant="h4" className="result-card__title">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body-5" className="result-card__subtitle">
              {subtitle}
            </Typography>
          )}
        </div>

        {/* Right Side - Result Badge */}
        {result && (
          <div className="result-card__badge">
            <Typography variant="body-5" className="result-card__badge-text">
              {result}
            </Typography>
          </div>
        )}
      </Suspense>
    </div>
  );
}