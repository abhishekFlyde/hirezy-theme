// "use client";
// import React, { useEffect, useState } from "react";
// import Typography from "./typography";
// import Button from "./button";
// import Image from "next/image";
// import Link from "next/link";
// import { Container } from "./spacing";
// import api from "@/lib/api";
// import { usePathname, useRouter } from "next/navigation";

// export default function Header() {
//   const [activeLink, setActiveLink] = useState("");
//   const [header, setHeader] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHiding, setIsHiding] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     window.dispatchEvent(new Event("header-ready"));
//   }, []);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await api.get("/header-section");
//         setHeader(res.data?.section || {});
//       } catch (err) {
//         console.log("Failed to load header");
//       }
//     })();
//   }, []);

//   // Scroll behavior
//   useEffect(() => {
//     let lastScrollY = window.scrollY;
//     let hideTimeout;
//     let showTimeout;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Only trigger when scrolling down (not up) and not already scrolled
//       if (currentScrollY > lastScrollY && currentScrollY > 50 && !isScrolled) {
//         // Step 1: Hide navbar
//         setIsHiding(true);

//         // Clear any existing timeouts
//         clearTimeout(hideTimeout);
//         clearTimeout(showTimeout);

//         // Step 2: After 300ms, show navbar with bounce and set as fixed
//         showTimeout = setTimeout(() => {
//           setIsHiding(false);
//           setIsScrolled(true);
//         }, 30);
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(hideTimeout);
//       clearTimeout(showTimeout);
//     };
//   }, [isScrolled]);

//   // Set active link based on current pathname
//   useEffect(() => {
//     if (header?.navLinks) {
//       const currentLink = header.navLinks.find(link => {
//         return pathname === link.href ||
//                (link.href !== "/" && pathname.startsWith(link.href));
//       });

//       if (currentLink) {
//         setActiveLink(currentLink.name);
//       } else if (pathname === "/") {
//         setActiveLink("Home");
//       } else {
//         setActiveLink("");
//       }
//     }
//   }, [pathname, header]);

//   // Handle link click with proper navigation
//   const handleLinkClick = (linkName, href, e) => {
//     e.preventDefault();
//     setActiveLink(linkName);
//     router.push(href);
//   };

//   if (!header) return null;

//   return (
//     <Container variant="header">
//       <header
//         className={`header-container flex items-center justify-between ${
//           isHiding ? 'header-hiding' : ''
//         } ${isScrolled ? 'header-scrolled' : ''}`}
//       >
//         {/* ✅ Dynamic Logo */}
//         <Link
//           href="/"
//           className="flex-shrink-0"
//           onClick={(e) => {
//             e.preventDefault();
//             setActiveLink("Home");
//             router.push("/");
//           }}
//         >
//           <Image
//             src={header.logo}
//             alt="Hirezy"
//             width={140.3}
//             height={37}
//             className="header-logo"
//           />
//         </Link>

//         {/* ✅ Dynamic Desktop Navigation */}
//         <nav className="nav-link-container">
//           {header.navLinks?.map((link, i) => (
//             <Link
//               key={i}
//               href={link.href}
//               onClick={(e) => handleLinkClick(link.name, link.href, e)}
//               className={`nav-link ${activeLink === link.name ? "active-link" : ""}`}
//             >
//               <Typography
//                 className="nav-link-color transition-colors"
//                 variant="body-4"
//                 style={{
//                   lineHeight: "150%",
//                   fontSize: "16px",
//                 }}
//               >
//                 {link.name}
//               </Typography>
//             </Link>
//           ))}
//         </nav>

//         {/* ✅ Dynamic CTA */}
//         <div className="flex items-center">
//           <Link href={header.ctaLink}>
//             <Button variant="primary" size="xl" showIcon={false}>
//               {header.ctaText}
//             </Button>
//           </Link>
//         </div>
//       </header>
//     </Container>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Typography from "./typography";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./spacing";
import api from "@/lib/api";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [header, setHeader] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    window.dispatchEvent(new Event("header-ready"));
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/header-section");
        setHeader(res.data?.section || {});
      } catch (err) {
        console.log("Failed to load header");
      }
    })();
  }, []);

  // Scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hideTimeout;
    let showTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only trigger when scrolling down (not up) and not already scrolled
      if (currentScrollY > lastScrollY && currentScrollY > 65 && !isScrolled) {
        // Step 1: Hide navbar
        setIsHiding(true);

        // Clear any existing timeouts
        clearTimeout(hideTimeout);

        setIsHiding(false);
        setIsScrolled(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout);
      clearTimeout(showTimeout);
    };
  }, [isScrolled]);

  // Set active link based on current pathname
  useEffect(() => {
    if (header?.navLinks) {
      const currentLink = header.navLinks.find((link) => {
        return (
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href))
        );
      });

      if (currentLink) {
        setActiveLink(currentLink.name);
      } else if (pathname === "/") {
        setActiveLink("Home");
      } else {
        setActiveLink("");
      }
    }
  }, [pathname, header]);

  // Handle link click with proper navigation
  const handleLinkClick = (linkName, href, e) => {
    e.preventDefault();
    setActiveLink(linkName);
    router.push(href);
  };

  if (!header) return null;

  // Navbar content component to reuse
  const NavbarContent = () => (
    <>
      {/* Logo */}
      <Link
        href="/"
        className="flex-shrink-0"
        onClick={(e) => {
          e.preventDefault();
          setActiveLink("Home");
          router.push("/");
        }}
      >
        <Image
          src={header.logo}
          alt="Hirezy"
          width={140.3}
          height={37}
          className="header-logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="nav-link-container">
        {header.navLinks?.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            onClick={(e) => handleLinkClick(link.name, link.href, e)}
            className={`nav-link ${
              activeLink === link.name ? "active-link" : ""
            }`}
          >
            <Typography
              className="nav-link-color transition-colors"
              variant="body-4"
              style={{
                lineHeight: "150%",
                fontSize: "16px",
              }}
            >
              {link.name}
            </Typography>
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="flex items-center">
        <Link href={header.ctaLink}>
          <Button variant="primary" size="xl" showIcon={false}>
            {header.ctaText}
          </Button>
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Static Navbar - Initially visible, uses global spacing */}
      <Container variant="header">
        <header className="header-container-static flex items-center justify-between">
          <NavbarContent />
        </header>
      </Container>

      {/* Fixed Navbar - Shows on scroll with animation */}
      <Container variant="header">
      <header
        className={`header-container-fixed flex items-center justify-between ${
          isHiding ? "header-hiding" : ""
        } ${isScrolled ? "header-scrolled" : ""}`}
      >
        <NavbarContent />
      </header>
      </Container>
    </>
  );
}
