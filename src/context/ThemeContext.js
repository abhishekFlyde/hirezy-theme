"use client";
import { applyStyleTheme } from "@/theme/themeManager";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    async function loadTheme() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/export`,
          {
            headers: {
              "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          },
        );

        const response = await res.json();
        const config = response.brand;
        setTheme(config);
        applyStyleTheme(config, "light");
      } catch (err) {
        console.log("Theme API failed");
      }
    }

    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
