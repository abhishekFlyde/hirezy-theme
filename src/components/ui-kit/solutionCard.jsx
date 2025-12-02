"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));

export default function SolutionCard({
  icon,
  title,
  description,
  className = "",
  variant = "primary",
  ...props
}) {
  return (
    <div
      {...props}
      className={clsx("solution-card", `solution-card--${variant}`, className)}
    >
      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        {/* Icon */}
        {icon && (
          <div className="solution-card__icon">
            <Image
              src={icon}
              alt={title || "solution icon"}
              width={64}
              height={64}
            />
          </div>
        )}

        {/* Title */}
        {title && (
          <Typography variant="h3" className="solution-card__title">
            {title}
          </Typography>
        )}

        {/* Description */}
        {description && (
          <Typography variant="body-4" className="solution-card__description">
            {description}
          </Typography>
        )}
      </Suspense>
    </div>
  );
}