"use client";
import React, { Suspense } from "react";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));

export default function ServicesListCard({
  title = "Services Used",
  services = [],
  className = "",
  ...props
}) {
  return (
    <div
      {...props}
      className={clsx("services-list-card", className)}
    >
      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        {/* Card Title */}
        {title && (
          <Typography variant="h4" className="services-list-card__title">
            {title}
          </Typography>
        )}

        {/* Services List */}
        {services.length > 0 && (
          <ul className="services-list-card__list">
            {services.map((service, index) => (
              <li key={index} className="services-list-card__item">
                <Typography variant="h6" className="services-list-card__text">
                  {service}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </Suspense>
    </div>
  );
}