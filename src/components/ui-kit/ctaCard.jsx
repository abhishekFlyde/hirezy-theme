"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));
const Button = React.lazy(() => import("./button"));

export default function CTACard({
  title,
  description,
  buttonText = "Get Started",
  buttonIcon,
  onButtonClick,
  titleColor,
  descriptionColor,
  className = "",
  ...props
}) {
  return (
    <div
      {...props}
      className={clsx("cta-card", className)}
    >
      <Suspense fallback={<div style={{ minHeight: "150px" }} />}>
        {/* Title */}
        {title && (
          <Typography variant="h3" colorVariant={titleColor} className="cta-card__title">
            {title}
          </Typography>
        )}

        {/* Description */}
        {description && (
          <Typography variant="body-4" colorVariant={descriptionColor} className="cta-card__description">
            {description}
          </Typography>
        )}

        {/* CTA Button */}
        <Button
          variant="primary"
          size="smTwo"
          onClick={onButtonClick}
          className="cta-card__button"
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
          <Typography colorVariant="white" variant="h4">{buttonText}</Typography>
        </Button>
      </Suspense>
    </div>
  );
}