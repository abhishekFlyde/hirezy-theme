"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./sectionHeader";
import Typography from "./typography";

export default function Testimonial({ items = [] }) {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Scroll tracking for testimonial section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  
  
  useEffect(() => {
    if (!items.length) return;
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const newIndex = Math.floor(progress * items.length);
      const clamped = Math.max(0, Math.min(items.length - 1, newIndex));

      if (clamped !== index) {
        setDirection(clamped > index ? 1 : -1);
        setIndex(clamped);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, index, items.length]);

  if (!items || items.length === 0) return null;

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

  const { quote, details, name, role, imageSrc, companyLogo } = items[index];

  return (
    <section
      ref={sectionRef}
      className="testimonial-section mainSec relative"
      style={{
        height: `${items.length * 100}vh`, // 🔥 Auto height
      }}
    >
      {/* Sticky container keeps testimonials pinned */}
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <SectionHeader
          label="Testimonial"
          title="What Our Users Say"
          subtitle="Discover why companies trust Hirezy to streamline and improve hiring processes."
          align="center"
        />

        <div className="testimonial-card-container relative mt-8">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              className="testimonial-card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
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

        {/* Arrows (optional manual control) */}
        <div className="arrows mt-6">
          <button
            className="prev"
            onClick={() => {
              setDirection(-1);
              setIndex((i) => Math.max(0, i - 1));
            }}
          >
            <Image
              src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(3).png?updatedAt=1762114130234"
              alt="Previous"
              width={50}
              height={50}
            />
          </button>
          <button
            className="next"
            onClick={() => {
              setDirection(1);
              setIndex((i) => Math.min(items.length - 1, i + 1));
            }}
          >
            <Image
              src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(4).png?updatedAt=1762114154276"
              alt="Next"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
