// "use client";

// import { useEffect } from "react";
// import { applyStyleTheme } from "@/theme/themeManager";

// export default function ThemeLoader() {
//   useEffect(() => {
//     async function loadTheme() {
//       const res = await fetch("/styles.json");
//       const config = await res.json();

//       console.log("Theme Loaded:", config);

//       applyStyleTheme(config, "light");
//     }

//     loadTheme();
//   }, []);

//   return null;
// }