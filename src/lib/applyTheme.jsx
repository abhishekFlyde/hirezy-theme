export function applyTheme(mode) {
  const root = document.documentElement.style;

  if (mode === "dark") {
    root.setProperty("--color-white", "#0f0f0f");
    root.setProperty("--color-light-white", "#1a1a1a");
    root.setProperty("--color-black-500", "#ffffff");
    root.setProperty("--color-black-400", "#d4d4d4");
    root.setProperty("--color-black-300", "#8b8b8b");
    root.setProperty("--color-blue-500", "#6c7bff");
    root.setProperty("--color-blue-400", "#8794ff");
    root.setProperty("--color-blue-300", "#1d2333");
    root.setProperty("--color-lime", "#99c63c");
  } else {
    root.setProperty("--color-white", "#ffffff");
    root.setProperty("--color-light-white", "#d9d9d9");
    root.setProperty("--color-black-500", "#222222");
    root.setProperty("--color-black-400", "#636363");
    root.setProperty("--color-black-300", "#aaaaaa");
    root.setProperty("--color-blue-500", "#afb7ff");
    root.setProperty("--color-blue-400", "#c7cdff");
    root.setProperty("--color-blue-300", "#f7f8ff");
    root.setProperty("--color-lime", "#ccef55");
  }
}
