"use client";
import { motion } from "framer-motion";

// Variants (you can import from motionVariants.js too)
const getVariants = (direction) => {
  const distance = 100;
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: {
          opacity: 1,
          x: 0,
          transition: { type: "spring", stiffness: 120, damping: 12 },
        },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: distance },
        visible: {
          opacity: 1,
          x: 0,
          transition: { type: "spring", stiffness: 120, damping: 12 },
        },
      };
    case "bottom":
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 120, damping: 12 },
        },
      };
  }
};

// Parent container variant for staggered entry
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function AssembleSection() {
  const sections = [
    { id: 1, direction: "left" },
    { id: 2, direction: "right" },
    { id: 3, direction: "bottom" },
  ];

  return (
    <motion.div
      className="flex flex-col gap-10 w-full max-w-5xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {sections.map((sec) => (
        <motion.div
          key={sec.id}
          className="p-10 rounded-2xl bg-white shadow-lg"
          variants={getVariants(sec.direction)}
        >
          <h2 className="text-2xl font-bold mb-2">Section {sec.id}</h2>
          <p className="text-gray-600">
            This section animates from the {sec.direction}.
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
