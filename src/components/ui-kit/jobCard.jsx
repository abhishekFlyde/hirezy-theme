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
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="job-container"
  >
    <div className="job-card">
      {/* Top Label */}
      <Label
        text={category}
        variant="primary"
        className="lable job-card-label"
      />

      <SectionHeader
        variant="secondary"
        title={title}
        subtitle={description}
        align="start"
        className="job-card-title"
      />

      {/* Icons Row */}
      <div className="job-card-meta">
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
          <Image src="https://ik.imagekit.io/75zj3bigp/Icon.png" alt="type" width={16} height={16} />
          <Typography variant="body-4">{jobType}</Typography>
        </span>
      </div>

      {/* Apply Button */}
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
    </div>
    </motion.div>
  );
}
