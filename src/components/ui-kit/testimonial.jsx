// "use client";
// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useScroll } from "framer-motion";
// import Image from "next/image";
// import SectionHeader from "./sectionHeader";
// import Typography from "./typography";

// export default function Testimonial({ items = [] }) {
//   const sectionRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Scroll tracking for testimonial section
//   const { scrollYProgress } = useScroll({ 
//     target: sectionRef,
//     offset: ["start center", "end center"],
//   });

//   useEffect(() => {
//     if (!items.length) return;
    
//     const unsubscribe = scrollYProgress.on("change", (progress) => {
//       const newIndex = Math.floor(progress * items.length);
//       const clamped = Math.max(0, Math.min(items.length - 1, newIndex));

//       if (clamped !== index) {
//         setDirection(clamped > index ? 1 : -1);
//         setIndex(clamped);
//       }
//     });

//     return () => unsubscribe();
//   }, [scrollYProgress, index, items.length]);

//   if (!items || items.length === 0) return null;

//   // ✅ smoother + blink-free animation
//   const variants = {
//     enter: (dir) => ({
//       x: dir > 0 ? 80 : -180,
//       opacity: 0,
//       filter: "blur(6px)",
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     },
//     exit: (dir) => ({
//       x: dir > 0 ? -80 : 80,
//       opacity: 0,
//       filter: "blur(6px)",
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     }),
//   };

//   // Inner content animation variants
//   const contentVariants = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 15,
//         stiffness: 100,
//         bounce: 0.3,
//         duration: 0.6
//       }
//     }
//   };

//   const { quote, details, name, role, imageSrc, companyLogo } = items[index];

//   return (
//     <section
//       ref={sectionRef}
//       className="testimonial-section mainSec relative"
//       style={{
//         height: `${items.length * 100}vh`,
//       }}
//     >
//       {/* Sticky container keeps testimonials pinned */}
//       <div className="sticky top-0 flex flex-col justify-center">
//         <SectionHeader
//           label="Testimonial"
//           title="What Our Users Say"
//           subtitle="Discover why companies trust Hirezy to streamline and improve hiring processes."
//           align="center"
//         />

//         <div className="testimonial-card-container relative mt-8 overflow-visible">
//           <AnimatePresence custom={direction} mode="wait">
//             <motion.div
//               key={index}
//               className="testimonial-card"
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//             >
//               {/* Image - Simple delay-based animation */}
//               <motion.div
//                 className="image-wrapper"
//                 initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
//                 animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
//                 transition={{
//                   type: "spring",
//                   damping: 15,
//                   stiffness: 100,
//                   bounce: 0.4,
//                   duration: 0.8,
//                   delay: 0.2
//                 }}
//               >
//                 <Image
//                   src={imageSrc}
//                   alt={name}
//                   width={600}
//                   height={900}
//                   priority
//                   className="object-cover rounded-2xl"
//                 />
//               </motion.div>

//               {/* Text content - Simple delay-based animation */}
//               <motion.div
//                 className="content-wrapper"
//                 initial={{ x: 50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{
//                   type: "spring",
//                   damping: 15,
//                   stiffness: 100,
//                   bounce: 0.4,
//                   duration: 0.8,
//                   delay: 0.3
//                 }}
//               >
//                 <div className="card-content">
//                   <div className="company-logo">
//                     <Image
//                       src={companyLogo}
//                       alt="Company Logo"
//                       width={100}
//                       height={40}
//                       className="object-contain"
//                     />
//                   </div>

//                   {/* Text Elements - Simple delay-based approach */}
//                   <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     transition={{ delay: 0.6 }} // Right section ke baad text aayega
//                     variants={contentVariants}
//                   >
//                     {/* Quote */}
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body-1" className="quote">
//                         {quote}
//                       </Typography>
//                     </motion.div>

//                     {/* Details */}
//                     <motion.div variants={itemVariants}>
//                       <Typography variant="body-4" className="details">
//                         {details}
//                       </Typography>
//                     </motion.div>

//                     {/* Author */}
//                     <motion.div className="author" variants={itemVariants}>
//                       <Typography variant="h6" className="name">
//                         {name}
//                       </Typography>
//                       <Typography variant="body-5" className="role">
//                         {role}
//                       </Typography>
//                     </motion.div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Arrows (optional manual control) */}
//         <div className="arrows !mt-6">
//           <button
//             className="prev"
//             onClick={() => {
//               setDirection(-1);
//               setIndex((i) => Math.max(0, i - 1));
//             }}
//           >
//             <Image
//               src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(3).png?updatedAt=1762114130234"
//               alt="Previous"
//               width={50}
//               height={50}
//             />
//           </button>
//           <button
//             className="next"
//             onClick={() => {
//               setDirection(1);
//               setIndex((i) => Math.min(items.length - 1, i + 1));
//             }}
//           >
//             <Image
//               src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(4).png?updatedAt=1762114154276"
//               alt="Next"
//               width={50}
//               height={50}
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


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
  const [textAnimationTrigger, setTextAnimationTrigger] = useState(false);

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
        // Reset text animation trigger when testimonial changes
        setTextAnimationTrigger(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, index, items.length]);

  if (!items || items.length === 0) return null;

  // ✅ smoother + blink-free animation
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -180,
      opacity: 0,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      filter: "blur(6px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  // Inner content animation variants
  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        bounce: 0.2,
        duration: 0.3
      }
    }
  };

  const { quote, details, name, role, imageSrc, companyLogo } = items[index];

  return (
    <section
      ref={sectionRef}
      className="testimonial-section mainSec relative"
      style={{
        height: `${items.length * 100}vh`,
      }}
    >
      {/* Sticky container keeps testimonials pinned */}
      <div className="sticky top-0 flex flex-col justify-center">
        <SectionHeader
          label="Testimonial"
          title="What Our Users Say"
          subtitle="Discover why companies trust Hirezy to streamline and improve hiring processes."
          align="center"
        />

        <div className="testimonial-card-container relative mt-8 overflow-visible">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              className="testimonial-card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Image - whileInView use karein */}
              <motion.div
                className="image-wrapper"
                initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
                whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "0px" }}
                transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.2
                }}
              >
                <Image
                  src={imageSrc}
                  alt={name}
                  width={600}
                  height={900}
                  priority
                  className="object-cover rounded-2xl"
                />
              </motion.div>

              {/* Text content - whileInView use karein */}
              <motion.div
                className="content-wrapper"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.3
                }}
                onAnimationComplete={() => {
                  // Text animation trigger karo jab right section animate ho jaye
                  setTextAnimationTrigger(true);
                }}
              >
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

                  {/* Text Elements - State-based animation */}
                  <motion.div
                    initial="hidden"
                    animate={textAnimationTrigger ? "visible" : "hidden"}
                    variants={contentVariants}
                  >
                    {/* Quote */}
                    <motion.div variants={itemVariants}>
                      <Typography variant="body-1" className="quote">
                        {quote}
                      </Typography>
                    </motion.div>

                    {/* Details */}
                    <motion.div variants={itemVariants}>
                      <Typography variant="body-4" className="details">
                        {details}
                      </Typography>
                    </motion.div>

                    {/* Author */}
                    <motion.div className="author" variants={itemVariants}>
                      <Typography variant="h6" className="name">
                        {name}
                      </Typography>
                      <Typography variant="body-5" className="role">
                        {role}
                      </Typography>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows (optional manual control) */}
        <div className="arrows !mt-6">
          <button
            className="prev"
            onClick={() => {
              setDirection(-1);
              setIndex((i) => Math.max(0, i - 1));
              setTextAnimationTrigger(false);
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
              setTextAnimationTrigger(false);
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