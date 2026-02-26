"use client";
import React, { useEffect, useState } from "react";
import Typography from "./typography";
import Button from "./button";
import Image from "next/image";
import { Container } from "./spacing";
import api from "@/lib/api";
import { motion } from "framer-motion";

const TransformSection = () => {
  const [section, setSection] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/transform-section");
        const data = res.data?.section || {};

        setSection({
          id: 1,
          title: data.title,
          desc: data.desc,
          btnText: data.btnText,
          btnIcon: data.btnIcon,
          bgImage: data.bgImage,
          buttonLink: data.buttonLink,
        });
      } catch (err) {
        console.error("Failed to load Transform Section", err);
      }
    })();
  }, []);

  if (!section) return null;

  const bgVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  return (
    <Container variant="section">
      <motion.section
        className="transform-section section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background animation */}
        <motion.div
          key={section.id}
          className="transform-card"
          variants={bgVariants}
          style={{
            backgroundImage: `url(${section.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            className="transform-card-content"
            variants={textContainer}
          >
            <motion.div variants={textItem}>
              <Typography variant="h1" className="cta-title">
                {section.title}
              </Typography>
            </motion.div>

            <motion.div variants={textItem}>
              <Typography variant="body-3" className="cta-desc">
                {section.desc}
              </Typography>
            </motion.div>

            <motion.div variants={textItem}>
              <Button
                variant="white"
                showIcon={true}
                iconPosition="right"
                className="btn"
                icon={
                  // <Image
                  //   src={section.btnIcon}
                  //   width={14}
                  //   height={12}
                  //   alt="arrow"
                  //   className="arrow-img"
                  // />
                  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi text-white bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
                }
                as={section.buttonLink ? "a" : "button"}
                href={section.buttonLink || undefined}
              >
                <Typography variant="h4">{section.btnText}</Typography>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </Container>
  );
};

export default TransformSection;
