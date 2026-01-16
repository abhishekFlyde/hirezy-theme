// "use client";

// import { motion, useMotionValue } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const YEARS = [
//   2010, 2011, 2012, 2013, 2014,
//   2015,
//   2016, 2017, 2018, 2019, 2020
// ];

// export default function DraggableTimeline() {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);

//   const x = useMotionValue(0);
//   const [constraints, setConstraints] = useState({ left: 0, right: 0 });
//   const [activeIndex, setActiveIndex] = useState(0);

//   /* ------------------------------
//      1. Drag Constraints (No overflow)
//   --------------------------------*/
//   useEffect(() => {
//     const container = containerRef.current;
//     const track = trackRef.current;

//     if (!container || !track) return;

//     const containerWidth = container.offsetWidth;
//     const trackWidth = track.scrollWidth;

//     setConstraints({
//       left: -(trackWidth - containerWidth),
//       right: 0,
//     });
//   }, []);

//   /* ------------------------------
//      2. Detect Center Item
//   --------------------------------*/
//   useEffect(() => {
//     const unsubscribe = x.on("change", (latestX) => {
//       const containerCenter =
//         containerRef.current.offsetWidth / 2;

//       let closestIndex = 0;
//       let minDistance = Infinity;

//       trackRef.current.childNodes.forEach((child, index) => {
//         const childCenter =
//           child.offsetLeft +
//           child.offsetWidth / 2 +
//           latestX;

//         const distance = Math.abs(containerCenter - childCenter);

//         if (distance < minDistance) {
//           minDistance = distance;
//           closestIndex = index;
//         }
//       });

//       setActiveIndex(closestIndex);
//     });

//     return () => unsubscribe();
//   }, [x]);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full overflow-hidden bg-black py-24"
//     >
//       <motion.div
//         ref={trackRef}
//         drag="x"
//         style={{ x }}
//         dragConstraints={constraints}
//         dragElastic={0.12}
//         dragMomentum={true}
//         transition={{
//           type: "spring",
//           stiffness: 120,
//           damping: 20,
//         }}
//         className="flex gap-[120px] px-[50vw] cursor-grab active:cursor-grabbing"
//       >
//         {YEARS.map((year, index) => {
//           const isActive = index === activeIndex;

//           return (
//             <motion.div
//               key={year}
//               animate={{
//                 scale: isActive ? 1.4 : 1,
//                 opacity: isActive ? 1 : 0.4,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 25,
//               }}
//               className="text-gray-400 text-5xl font-semibold select-none"
//               style={{
//                 color: isActive ? "#ffffff" : "#777",
//               }}
//             >
//               {year}
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const YEARS = [
  2010, 2011, 2012, 2013, 2014,
  2015,
  2016, 2017, 2018, 2019, 2020
];

export default function DraggableTimeline() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  /* ------------------------------
     Raw drag value
  --------------------------------*/
  const x = useMotionValue(0);

  /* ------------------------------
     Spring applied to drag
  --------------------------------*/
  const springX = useSpring(x, {
    stiffness: 180,
    damping: 22,
    mass: 0.6,
  });

  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  /* ------------------------------
     Drag Constraints
  --------------------------------*/
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const containerWidth = container.offsetWidth;
    const trackWidth = track.scrollWidth;

    setConstraints({
      left: -(trackWidth - containerWidth),
      right: 0,
    });
  }, []);

  /* ------------------------------
     Detect Center Item
  --------------------------------*/
  useEffect(() => {
    const unsubscribe = springX.on("change", (latestX) => {
      const containerCenter = containerRef.current.offsetWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      trackRef.current.childNodes.forEach((child, index) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2 + latestX;

        const distance = Math.abs(containerCenter - childCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    });

    return () => unsubscribe();
  }, [springX]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-black py-24"
    >
      <motion.div
        ref={trackRef}
        drag="x"
        dragConstraints={constraints}
        dragMomentum={false}
        dragElastic={0.35}
        style={{ x: springX }}   // spring while dragging
        className="flex gap-[120px] px-[50vw] cursor-grab active:cursor-grabbing"
      >
        {YEARS.map((year, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={year}
              animate={{
                scale: isActive ? 1.4 : 1,
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="text-5xl font-semibold select-none"
              style={{
                color: isActive ? "#fff" : "#777",
              }}
            >
              {year}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
