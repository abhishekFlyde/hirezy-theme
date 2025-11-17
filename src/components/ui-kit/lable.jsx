// "use client";
// import React, { Suspense } from "react";

// const Typography = React.lazy(() => import("./typography"));


// export default function Label({ text, variant = "primary", className = "", ...props }) {
  
//   // const secondaryLabel = variant === "secondary";

//   return (
//     <div {...props} style={{ padding: "0px 0px" }}>
//       <Suspense fallback={<div style={{ height: "1em" }} />}>
//         {text && (
//           <Typography variant={"body-4"} className={`${className}`}>
//             {text}
//           </Typography>
//         )}
//       </Suspense>
//     </div>
//   );
// }


"use client";
import React, { Suspense } from "react";

const Typography = React.lazy(() => import("./typography"));

export default function Label({
  text,
  variant = "primary",   // will be "secondary" if parent sends secondary
  className = "",
  ...props
}) {
  // Decide which typography variant to apply
  const typographyVariant = variant === "secondary" ? "body-5" : "body-4";

  return (
    <div className={className} {...props}>
      <Suspense fallback={<div style={{ height: "1em" }} />}>

        {text && (
          <Typography variant={typographyVariant}>
            {text}
          </Typography>
        )}

      </Suspense>
    </div>
  );
}
