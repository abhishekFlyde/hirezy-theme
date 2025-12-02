// "use client";
// import React, { Suspense } from "react";

// const Typography = React.lazy(() => import("./typography"));

// export default function Label({
//   text,
//   className = "",
//   variant = "primary",  // primary | secondary | GreenVariant
//   bgColor = "var(--color-blue-300)",
//   ...props
// }) 
// {
// const typographyVariant = variant === "secondary" ? "body-5" : "body-4";
//   return (
//     <div
//       {...props}
//       style={{
//         padding: "var(--sp-8) var(--sp-16)",
//         fontSize: "16px",
//         fontFamily: "var(--font-jakarta)",
//         fontWeight: 400,
//         lineHeight: "150%",
//         borderRadius: "var(--radius-md)",
//         backgroundColor: bgColor,
//         display: "inline-block",
//         width: "max-content",
//       }}
//       className={className}
//     >
//       <Suspense fallback={<div style={{ height: "1em" }} />}>
      

//         {text && (
//           <Typography variant={typographyVariant}>
//             {text}
//           </Typography>
//         )}

//       </Suspense>
//     </div>
//   );
// }


"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import clsx from "clsx";

const Typography = React.lazy(() => import("./typography"));

export default function Label({
  text,
  className = "",
  variant = "primary",
  icon,
  iconPosition = "left",
  ...props
}) {
  // Decide which typography variant to apply
  const typographyVariant = variant === "secondary" ? "body-5" : "body-4";
  
  // Map label variant to typography color variant
  const getColorVariant = () => {
    if (variant === "greenVariant") return "primary"; // lime color
    return "gray"; // gray color for primary/secondary
  };

  return (
    <div
      {...props}
      className={clsx("label", `label--${variant}`, className)}
    >
      <Suspense fallback={<div style={{ height: "1em" }} />}>
        {/* Icon left */}
        {icon && iconPosition === "left" && (
          <Image
            src={icon}
            alt="label icon"
            width={16}
            height={16}
            style={{ flexShrink: 0 }}
          />
        )}

        {text && (
          <Typography 
            variant={typographyVariant}
            colorVariant={getColorVariant()}
          >
            {text}
          </Typography>
        )}

        {/* Icon right */}
        {icon && iconPosition === "right" && (
          <Image
            src={icon}
            alt="label icon"
            width={16}
            height={16}
            style={{ flexShrink: 0 }}
          />
        )}
      </Suspense>
    </div>
  );
}