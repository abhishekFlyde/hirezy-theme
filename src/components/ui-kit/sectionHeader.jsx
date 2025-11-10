"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Label from "./lable";
import Typography from "./typography";

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  // parent variant — controls stagger timing
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // child variant — assemble-style effect
  const item = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={clsx(
        "headerSection flex flex-col gap-3",
        align === "center" && "text-center items-center",
        align === "left" && "text-left items-start",
        align === "right" && "text-right items-end",
        className
      )}
    >
      {label && (
        <motion.div variants={item} className="w-full">
          <Label className="lable" text={label} />
        </motion.div>
      )}

      {title && (
        <motion.div variants={item} className="w-full">
          <Typography variant="h2" style={{ whiteSpace: "pre-line" }}>
            {title}
          </Typography>
        </motion.div>
      )}

      {subtitle && (
        <motion.div variants={item} className="max-w-[816px] w-full">
          <Typography variant="body-4" className="color-black-400">
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </motion.div>
  );
}
