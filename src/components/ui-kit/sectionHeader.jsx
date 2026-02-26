"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Label from "./lable";
import Typography from "./typography";
import Image from "next/image";
import Button from "./button";

export default function SectionHeader({
  label,
  title,
  subtitle,
  icon,
  iconPosition,
  align = "center",
  className = "",
  imageSrc = null,
  imageAlt = "",
  titleTextColor = "",
  subTitleTextColor = "",
  imageVisibleOn = "mobile",
  labelBgColor = "var(--color-blue-300)",

  variant = "primary", // primary | secondary
  buttons = [], // [{ label, onClick, variant }]
}) {
  const variants = {
    secondary: "section-header-secondary",
  };

  // Animations
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  // Image visibility
  const imageVisibilityClass =
    imageVisibleOn === "both"
      ? "block"
      : imageVisibleOn === "desktop"
      ? "hidden md:block"
      : "block md:hidden";

  // Title variant
  const titleVariant = variant === "secondary" ? "h3" : "h2";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={clsx(
        "headerSection flex flex-col gap-3",
        variants[variant],
        align === "center" && "text-center items-center",
        align === "left" && "text-left items-start",
        align === "right" && "text-right items-end",
        className
      )}
    >
      {/* LABEL */}
      {label && (
        <motion.div variants={item} className="w-full">
          <Label
            className="lable"
            text={label}
            bgColor={labelBgColor}
            variant={variant}
            icon={icon}
            // icon="https://ik.imagekit.io/75zj3bigp/Mail.png?updatedAt=1761982895241"
            iconPosition={iconPosition}
          />
        </motion.div>
      )}

      {/* IMAGE */}
      {imageSrc && (
        <motion.div
          variants={item}
          className={clsx("w-full flex justify-center", imageVisibilityClass)}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={280}
            height={280}
            className="w-full h-auto object-contain rounded-md"
          />
        </motion.div>
      )}

      {/* TITLE */}
      {title && (
        <motion.div variants={item} className="w-full">
          <Typography variant={titleVariant} colorVariant={titleTextColor}>
            {title}
          </Typography>
        </motion.div>
      )}

      {/* SUBTITLE */}
      {subtitle && (
        <motion.div variants={item} className="max-w-[816px] w-full">
          <Typography variant="body-4" colorVariant={subTitleTextColor}>
            {subtitle}
          </Typography>
        </motion.div>
      )}

      {/* 🔥 BUTTONS */}
      {buttons.length > 0 && (
        <motion.div variants={item} className="mt-8 flex justify-center gap-6">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              href={btn.href || "#"}
              variant={btn.variant || "primary"}
            >
              {btn.label}
            </Button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
