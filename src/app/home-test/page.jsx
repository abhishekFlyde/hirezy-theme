"use client";
import Button from "@/components/ui-kit/button";
import Header from "@/components/ui-kit/header";
import HeroImageSection from "@/components/ui-kit/heroImageSection";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  number,
} from "framer-motion";
 
export default function HomeTest() {
  return (
    <>
      <Header />
      <Container variant="heroSpacing">
        <div className="flex justify-between flex-wrap">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
              delay: 0.1,
            }}
          >
            <Typography variant="h1" style={{ whiteSpace: "pre-line" }}>
              Simplify Hiring. Empower Growth
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.25,
            }}
          >
            <div className="md:w-[534px] flex flex-col justify-between spacing-40">
              <Typography variant="body-4" style={{ whiteSpace: "pre-line" }}>
                Hirezy streamlines your recruitment process with smart tools,
                intuitive dashboards, and seamless integrations, helping you
                connect with top talent faster.
              </Typography>

              <div className="sp-24Home">
                <Button
                  variant="primary"
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
                  Get Started
                </Button>

                <Button variant="black-outline" size="xl">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ✨ Smooth image animation */}
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.33, 1, 0.68, 1], // "easeOutQuart" style smoothness
            delay: 0.5,
          }}
        >
          <HeroImageSection
            mainImage="https://ik.imagekit.io/flyde/Hirezy/Widget.png?updatedAt=1762125044598"
            leftImage="https://ik.imagekit.io/flyde/Hirezy/Widget%20(2).png?updatedAt=1762125043638"
            rightImage="https://ik.imagekit.io/flyde/Hirezy/Widget%20(1).png?updatedAt=1762125042946"
          />
        </motion.div>
      </Container>
    </>
  );
}
