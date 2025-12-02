"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));
const Button = React.lazy(() => import("./button"));

export default function MoreStoriesCard({
  image,
  badge,
  category,
  title,
  buttonText = "Read Story",
  buttonIcon,
  onButtonClick,
  className = "",
  ...props
}) {
  return (
    <div
      {...props}
      className={clsx("more-stories-card", className)}
    >
      <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
        {/* Image Section */}
        {image && (
          <div className="more-stories-card__image-wrapper">
            <Image
              src={image}
              alt={title || "story"}
              fill
              className="more-stories-card__image"
              style={{ objectFit: "cover" }}
            />
            {/* Badge */}
            {badge && (
              <div className="more-stories-card__badge">
                <Typography variant="body-5" className="more-stories-card__badge-text">
                  {badge}
                </Typography>
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="more-stories-card__content">
          {/* Category */}
          {category && (
            <Typography variant="body-5" className="more-stories-card__category">
              {category}
            </Typography>
          )}

          {/* Title */}
          {title && (
            <Typography variant="h3" className="more-stories-card__title">
              {title}
            </Typography>
          )}

          {/* CTA Button */}
          <Button
            variant="primary"
            size="smTwo"
            onClick={onButtonClick}
            icon={
              buttonIcon || (
                <Image
                  src="/Arrow Right.png"
                  width={14}
                  height={12}
                  alt="arrow"
                  className="arrow-img"
                />
              )
            }
            iconPosition="right"
          >
            <Typography variant="h4">{buttonText}</Typography>
          </Button>
        </div>
      </Suspense>
    </div>
  );
}