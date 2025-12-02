"use client";
import React, { Suspense } from "react";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));

export default function CompanyDetailsCard({
  title = "Company Profile",
  industry,
  companySize,
  location,
  timeline,
  className = "",
  ...props
}) {
  return (
    <div {...props} className={clsx("company-details-card", className)}>
      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        {/* Card Title */}
        {title && (
          <Typography variant="h4" className="company-details-card__title">
            {title}
          </Typography>
        )}

        {/* Details List */}
        <div className="company-details-card__list">
          {industry && (
            <div className="company-details-card__item">
              <Typography variant="h6" className="company-details-card__label">
                Industry
              </Typography>
              <Typography variant="h6" className="company-details-card__value">
                {industry}
              </Typography>
            </div>
          )}

          <span className="company-details-card__HorizontalLine"></span>

          {companySize && (
            <div className="company-details-card__item">
              <Typography variant="h6" className="company-details-card__label">
                Company Size
              </Typography>
              <Typography variant="h6" className="company-details-card__value">
                {companySize}
              </Typography>
            </div>
          )}

          <span className="company-details-card__HorizontalLine"></span>

          {location && (
            <div className="company-details-card__item">
              <Typography variant="h6" className="company-details-card__label">
                Location
              </Typography>
              <Typography variant="h6" className="company-details-card__value">
                {location}
              </Typography>
            </div>
          )}

          <span className="company-details-card__HorizontalLine"></span>

          {timeline && (
            <div className="company-details-card__item">
              <Typography variant="h6" className="company-details-card__label">
                Timeline
              </Typography>
              <Typography variant="h6" className="company-details-card__value">
                {timeline}
              </Typography>
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
}
