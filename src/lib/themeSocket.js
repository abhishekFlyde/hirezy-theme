import { io } from "socket.io-client";
import { applyTheme } from "./applyTheme";

export function initThemeSocket() {
  const socket = io("https://hirezy-backend.onrender.com");
  console.log("Calling socket")

  socket.on("theme-updated", (theme) => {
    applyTheme(theme);
    console.log("Socket emitted", theme);
  });
}
