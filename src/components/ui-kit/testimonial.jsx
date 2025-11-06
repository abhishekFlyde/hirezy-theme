"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./sectionHeader";
import Typography from "./typography";

export default function Testimonial({ items = [] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!items || items.length === 0) return null;

  const nextSlide = () => {
    if (index < items.length - 1) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };
  

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const { company, quote, details, name, role, imageSrc, companyLogo } =
    items[index];

  return (
    <section className="testimonial-section mainSec">
      <SectionHeader
        label="Testimonial"
        title="What Our Users Say"
        subtitle="Discover why companies trust Hirezy to streamline and improve hiring processes."
        align="center"
      />

      <div
        className="testimonial-card-container"
        style={{ position: "relative" }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            className="testimonial-card"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Image */}
            <div className="image-wrapper">
              <Image
                src={imageSrc}
                alt={name}
                width={600}
                height={900}
                priority
              />
            </div>

            {/* Text content */}
            <div className="content-wrapper">
              <div className="card-content">
                <div className="company-logo">
                  <Image
                    src={companyLogo}
                    alt="Company Logo"
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <Typography variant="body-1" className="quote">
                    {quote}
                  </Typography>
                  <Typography variant="body-4" className="details">
                    {details}
                  </Typography>
                  <div className="author">
                    <Typography variant="h6" className="name">
                      {name}
                    </Typography>
                    <Typography variant="body-5" className="role">
                      {role}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="arrows">
        <button className="prev" onClick={prevSlide}>
          <Image
            src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(3).png?updatedAt=1762114130234"
            alt="Previous"
            width={50}
            height={50}
          />
        </button>
        <button className="next" onClick={nextSlide}>
          <Image
            src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(4).png?updatedAt=1762114154276"
            alt="Next"
            width={50}
            height={50}
          />
        </button>
      </div>
    </section>
  );
}
