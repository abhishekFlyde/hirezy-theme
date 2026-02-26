"use client";

import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function FaviconUpdater() {
  const { theme } = useTheme();

  useEffect(() => {
    const faviconUrl = theme?.identity?.favicon?.light;
    if (!faviconUrl) return;

    // remove ALL existing icons (important)
    document
      .querySelectorAll("link[rel*='icon']")
      .forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = `${faviconUrl}?v=${Date.now()}`;

    document.head.appendChild(link);
  }, [theme]);

  return null;
}