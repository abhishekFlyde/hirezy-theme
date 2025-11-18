"use client";

import React from "react";
import Label from "./lable";
import SectionHeader from "./sectionHeader";
import Button from "./button";
import Image from "next/image";
import Typography from "./typography";
import { motion } from "framer-motion";

export default function JobCard({
  category = "Design",
  title = "Senior Product Designer",
  description = "Lead the design of our core recruitment platform, creating intuitive experiences for recruiters and candidates.",
  location = "Remote",
  jobType = "Full-time",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, type: "spring", damping: 30, stiffness: 100 }}
      viewport={{ amount: 0.2, once: true }}
      className="job-container"
    >
    <div className="job-card">
      {/* Top Label */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, type: "spring", damping: 30, stiffness: 100 }}
        viewport={{ amount: 0.2, once: true }}
      >
      <Label
        text={category}
        variant="primary"
        className="lable job-card-label"
      />
      </motion.div>

      <SectionHeader
        variant="secondary"
        title={title}
        subtitle={description}
        align="start"
        className="job-card-title"
      />

      {/* Icons Row */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, type: "spring", damping: 30, stiffness: 100 }}
        viewport={{ amount: 0.2, once: true }}
        className="job-card-meta"
      >
        <span className="meta-item">
          <Image
            src="https://ik.imagekit.io/75zj3bigp/Icon.png"
            alt="location"
            width={16}
            height={16}
          />
          <Typography variant="body-4"> {location}</Typography>
        </span>

        <span className="meta-item">
          <Image src="https://ik.imagekit.io/75zj3bigp/Icon%20(1).png?updatedAt=1763384802745" alt="type" width={16} height={16} />
          <Typography variant="body-4">{jobType}</Typography>
        </span>
      </motion.div>

      {/* Apply Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, type: "spring", damping: 30, stiffness: 100 }}
        viewport={{ amount: 0.2, once: true }}
      >
      <Button
        variant="primary"
        size="smTwo"
        icon={
          <Image
            src="/Arrow Right.png"
            width={14}
            height={12}
            alt="arrow"
            className="arrow-img"
          />
        }
        iconPosition="right"
      >
        <Typography variant="h4">Apply Now</Typography>
      </Button>
      </motion.div>
    </div>
    </motion.div>
  );
}
