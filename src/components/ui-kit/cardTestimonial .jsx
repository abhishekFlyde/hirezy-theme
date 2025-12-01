"use client";
import React, { Suspense } from "react";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));

export default function CardTestimonial({
  quote,
  author,
  role,
  className = "",
  variant = "primary",
  ...props
}) {
  return (
    <div
      {...props}
      className={clsx("testimonial", `testimonial--${variant}`, className)}
    >
      <Suspense fallback={<div style={{ minHeight: "100px" }} />}>
        {/* Quote */}
        {quote && (
          <Typography variant="h5" className="testimonial__quote">
            "{quote}"
          </Typography>
        )}

        {/* Author Info */}
        {(author || role) && (
          <div className="testimonial__author">
            <Typography variant="h6" className="testimonial__author-text">
              — {author}
              {role && `, ${role}`}
            </Typography>
          </div>
        )}
      </Suspense>
    </div>
  );
}