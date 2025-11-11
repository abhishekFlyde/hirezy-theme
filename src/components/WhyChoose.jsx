"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Container } from "./ui-kit/spacing";
import Label from "./ui-kit/lable";
import Typography from "./ui-kit/typography";
import Button from "./ui-kit/button";
import Card from "./ui-kit/value";
import api from "@/lib/api";

const WhyChoose = ({ open, setOpen }) => {
  const [section, setSection] = useState(null);

  // ✅ Fetch CMS data
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/why-choose");
        setSection(res.data.data);
      } catch (err) {
        console.log("Failed to load section", err);
      }
    })();
  }, []);

  const { title, label, description, buttonText, features } = section || {};

  return (
    <section className="why-choose">
      <Container variant="secondary">
        <div className="why-choose-grid">
          {/* Left Section */}
          <div className="why-left">
            <div className="why-left-content">
              <Label className="lable" text={label} />
              <Typography variant="h2" className="why-title">
                {title}
              </Typography>
              <Typography variant="body-4" className="why-desc">
                {description}
              </Typography>
            </div>
 
            <Button
              variant="primary"
              size="xl"
              showIcon={false}
              onClick={() => setOpen(true)}
              className="why-btn "
            >
              <Typography variant="h4">{buttonText}</Typography>
            </Button>
          </div>

          {/* Right Section – Features */}
          <div className="why-right">
            {features?.map((feature, index) => (
              <FlipCard key={index} feature={feature} delay={index * 0.25} />
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="mobile-button-container">
          <Button
            variant="primary"
            size="xl"
            showIcon={false}
            onClick={() => setOpen(true)}
          >
            <Typography variant="h4">{buttonText}</Typography>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;

/* 🔥 Flip animation component */
function FlipCard({ feature, delay = 0 }) {
  const ref = useRef(null); // ✅ useRef instead of useState
  const inView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ rotateX: 90, opacity: 0, y: 100 }}
      animate={inView ? { rotateX: 0, opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.13, 0.1, 0.12, 1],
      }}
      style={{
       
        perspective: 100,
      }}
    >
      <Card
        iconSrc={feature.icon}
        title={feature.title}
        iconAlt={feature.title}
        description={feature.desc}
        className="why-card"
      />
    </motion.div>
  );
}
