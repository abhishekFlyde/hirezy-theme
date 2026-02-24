export function applyStyleTheme(config, mode = "light") {
  if (!config) return;

  applyColors(config, mode);
  applyTypography(config);
  loadFonts(config);
  applyBrandAssets(config, mode);
}

/* ================= COLORS ================= */

// function applyColors(config, mode) {

//     if (typeof document === "undefined") return;

//   const root = document.documentElement;

//   const palette = config.colors?.primitives?.palette || {};
//   const semantic = config.colors?.modes?.[mode]?.semantic || {};

//   // primitives
//   Object.entries(palette).forEach(([key, value]) => {
//     root.style.setProperty(`--color-${key}`, value);
//   });

//   // semantic → map to primitives
//   Object.entries(semantic).forEach(([key, token]) => {
//     root.style.setProperty(
//       `--color-${key}`,
//       `var(--color-${token})`
//     );
//   });
// }


// function applyColors(config, mode) {
//   const root = document.documentElement;

//   const palette = config.colors?.primitives?.palette || {};
//   const semantic = config.colors?.modes?.[mode]?.semantic || {};

//   // primitives
//   Object.entries(palette).forEach(([key, value]) => {
//     root.style.setProperty(`--color-${key}`, value);
//   });

//   // semantic → mapped to primitives
//   Object.entries(semantic).forEach(([key, token]) => {
//     root.style.setProperty(
//       `--color-${key}`,
//       `var(--color-${token})`
//     );
//   });
// }

function applyColors(config, mode) {
  const root = document.documentElement;

  const palette = config.colors?.primitives?.palette || {};
  const semantic = config.colors?.modes?.[mode]?.semantic || {};

  // Map API token names → your existing variable names
  const nameMap = {
    primary400: "blue-400",
    primary500: "blue-500",
    primary600: "lime",
    gray100: "blue-300",
    gray300: "black-300",
    gray700: "black-400",
    white: "white",
    black: "black-500",
  };

  // primitives
  Object.entries(palette).forEach(([key, value]) => {
    const mappedName = nameMap[key] || key;
    root.style.setProperty(`--color-${mappedName}`, value);
  });

  // semantic
  Object.entries(semantic).forEach(([key, token]) => {
    const mappedToken = nameMap[token] || token;
    const mappedKey = nameMap[key] || key;

    root.style.setProperty(
      `--color-${mappedKey}`,
      `var(--color-${mappedToken})`
    );
  });
}


/* ================= TYPOGRAPHY ================= */

// function applyTypography(config) {
//   const root = document.documentElement;
//   const styles = config.typography?.textStyles || {};
//   const fonts = config.typography?.primitives?.fontFamilies || {};

//   Object.entries(styles).forEach(([name, style]) => {
//     const desktop = style.variants.desktop;
//     const mobile = style.variants.mobile;

//     const fontFamily =
//       fonts[desktop.fontFamily]?.family || desktop.fontFamily;

//     // desktop
//     root.style.setProperty(`--font-${name}-family`, fontFamily);
//     root.style.setProperty(`--font-${name}-size`, `${desktop.fontSize}px`);
//     root.style.setProperty(
//       `--font-${name}-lineHeight`,
//       `${desktop.lineHeight}px`
//     );
//     root.style.setProperty(
//       `--font-${name}-weight`,
//       desktop.fontWeight
//     );

//     // mobile
//     root.style.setProperty(
//       `--font-${name}-size-mobile`,
//       `${mobile.fontSize}px`
//     );
//     root.style.setProperty(
//       `--font-${name}-lineHeight-mobile`,
//       `${mobile.lineHeight}px`
//     );
//     root.style.setProperty(
//       `--font-${name}-weight-mobile`,
//       mobile.fontWeight
//     );
//   });
// }

function applyTypography(config) {
  const root = document.documentElement;
  const styles = config.typography?.textStyles || {};
  const fonts = config.typography?.primitives?.fontFamilies || {};
  console.log("Typography config:", config.typography);

  Object.entries(styles).forEach(([name, style]) => {
    const desktop = style.variants.desktop;
    const mobile = style.variants.mobile;

    const fontFamily =
      fonts[desktop.fontFamily]?.family || desktop.fontFamily;

    // Desktop
    root.style.setProperty(`--font-${name}-family`, fontFamily);
    root.style.setProperty(`--font-${name}-size`, `${desktop.fontSize}px`);
    root.style.setProperty(`--font-${name}-lineHeight`, `${desktop.lineHeight}px`);
    root.style.setProperty(`--font-${name}-weight`, desktop.fontWeight);

    // Mobile
    root.style.setProperty(`--font-${name}-size-mobile`, `${mobile.fontSize}px`);
    root.style.setProperty(`--font-${name}-lineHeight-mobile`, `${mobile.lineHeight}px`);
    root.style.setProperty(`--font-${name}-weight-mobile`, mobile.fontWeight);
  });
}


/* ================= FONT LOADER ================= */

// function loadFonts(config) {
//   const families = config.typography?.primitives?.fontFamilies || {};

//   Object.values(families).forEach((font) => {
//     if (!font.sources) return;

//     font.sources.forEach((src) => {
//       const fontFace = new FontFace(
//         font.family,
//         `url(${src.woff2})`,
//         {
//           weight: src.weight,
//           style: src.style,
//         }
//       );

//       fontFace.load().then((loaded) => {
//         document.fonts.add(loaded);
//       });
//     });
//   });
// }

function loadFonts(config) {
  const families = config.typography?.primitives?.fontFamilies || {};

  Object.values(families).forEach((font) => {
    if (!font.sources) return;

    font.sources.forEach((src) => {
      const fontFace = new FontFace(
        font.family,
        `url(${src.woff2})`,
        {
          weight: src.weight,
          style: src.style,
        }
      );

      fontFace.load().then((loaded) => {
        document.fonts.add(loaded);
      });
    });
  });
}

/* ================= LOGOS ================= */

// function applyBrandAssets(config, mode) {
//   const logoUrl = config.identity?.logo?.[mode]?.primary;
//   const faviconUrl = config.identity?.favicon?.[mode];

//   console.log("Applying logo:", logoUrl);
//   // logo images
//   if (logoUrl) {
//     document.querySelectorAll("[dataBrandLogo]").forEach((img) => {
//       img.src = logoUrl;
//     });
//   }

//   // favicon
//   if (faviconUrl && !faviconUrl.startsWith("blob:")) {
//     let link = document.querySelector("link[rel='icon']");
//     if (!link) {
//       link = document.createElement("link");
//       link.rel = "icon";
//       document.head.appendChild(link);
//     }
//     link.href = faviconUrl;
//   }
// }

function applyBrandAssets(config, mode) {
  const root = document.documentElement;

  const logoUrl = config.identity?.logo?.[mode]?.primary;
  const faviconUrl = config.identity?.favicon?.[mode];

  // Store logo in CSS variable
  if (logoUrl) {
    root.style.setProperty("--brand-logo", logoUrl);
  }

  // Favicon
  if (faviconUrl && !faviconUrl.startsWith("blob:")) {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }
}