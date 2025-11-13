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

//   // Set active link based on current pathname
//   useEffect(() => {
//     if (header?.navLinks) {
//       // Find the link that matches the current path
//       const currentLink = header.navLinks.find(link => {
//         // Exact match or starts with for nested routes
//         return pathname === link.href || 
//                (link.href !== "/" && pathname.startsWith(link.href));
//       });
      
//       if (currentLink) {
//         setActiveLink(currentLink.name);
//       } else if (pathname === "/") {
//         setActiveLink("Home");
//       } else {
//         // If no match found, set to empty or keep previous state
//         setActiveLink("");
//       }
//     }
//   }, [pathname, header]);

//   // Handle link click with proper navigation
//   const handleLinkClick = (linkName, href, e) => {
//     e.preventDefault();
//     setActiveLink(linkName);
//     // Use Next.js router for client-side navigation
//     router.push(href);
//   };

//   if (!header) return null;

//   return (
//     <Container variant="header">
//       <header className="header-container flex items-center justify-between">
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
  const [isVisible, setIsVisible] = useState(true);
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
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only trigger when scrolling down (not up)
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Only apply animation if not already scrolled
        if (!isScrolled) {
          // Hide navbar
          setIsVisible(false);
          
          // Clear any existing timeout
          clearTimeout(scrollTimeout);
          
          // Show navbar again after 300ms with bounce effect
          scrollTimeout = setTimeout(() => {
            setIsVisible(true);
            setIsScrolled(true);
          }, 300);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolled]);

  // Set active link based on current pathname
  useEffect(() => {
    if (header?.navLinks) {
      const currentLink = header.navLinks.find(link => {
        return pathname === link.href || 
               (link.href !== "/" && pathname.startsWith(link.href));
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

  return (
    <Container variant="header">
      <header 
        className={`header-container flex items-center justify-between ${
          isScrolled ? 'header-fixed' : ''
        } ${isVisible ? 'header-visible' : 'header-hidden'}`}
      >
        {/* ✅ Dynamic Logo */}
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

        {/* ✅ Dynamic Desktop Navigation */}
        <nav className="nav-link-container">
          {header.navLinks?.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={(e) => handleLinkClick(link.name, link.href, e)}
              className={`nav-link ${activeLink === link.name ? "active-link" : ""}`}
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

        {/* ✅ Dynamic CTA */}
        <div className="flex items-center">
          <Link href={header.ctaLink}>
            <Button variant="primary" size="xl" showIcon={false}>
              {header.ctaText}
            </Button>
          </Link>
        </div>
      </header>
    </Container>
  );
}