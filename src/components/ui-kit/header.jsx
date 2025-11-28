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

  /* ROUTES jinke upar FIXED NAVBAR black hoga */
  const darkRoutes = ["/services"];

  /* true when current route is inside darkRoutes list */
  const isBlackRoute = darkRoutes.some((route) => pathname.startsWith(route));

  const darkLogo =
    "https://ik.imagekit.io/75zj3bigp/Logo12.png?updatedAt=1764157054343";

  const lightLogo = header?.logo;

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 65) {
        setIsHiding(true);
        setIsHiding(false);
        setIsScrolled(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (header?.navLinks) {
      0;
      const currentLink = header.navLinks.find((link) => {
        return (
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href))
        );
      });

      if (currentLink) setActiveLink(currentLink.name);
      else if (pathname === "/") setActiveLink("Home");
      else setActiveLink("");
    }
  }, [pathname, header]);

  const handleLinkClick = (linkName, href, e) => {
    e.preventDefault();
    setActiveLink(linkName);
    router.push(href);
  };

  if (!header) return null;

  const NavbarContent = ({ isFixed }) => {
    // const showDark = isFixed && isBlackRoute;
    const showDark = !isFixed && isBlackRoute;

    return (
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
            // src={showDark ? darkLogo : lightLogo}
            src={!isFixed && showDark ? darkLogo : lightLogo}
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
                isFixed
                  ? activeLink === link.name
                    ? "fixed-active"
                    : ""
                  : showDark
                  ? activeLink === link.name
                    ? "static-active" // white wala variant
                    : ""
                  : activeLink === link.name
                  ? "static-black-active" // ← yeh new black active state
                  : ""
              }`}
            >
              <Typography
                className={`transition-colors ${
                  !isFixed
                    ? showDark
                      ? "static-nav-link-white"
                      : "static-nav-link"
                    : "fixed-nav-link"
                }`}
                variant="body-4"
                style={{ lineHeight: "150%", fontSize: "16px" }}
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
  };

  return (
    <>
      {/* STATIC NAVBAR — always light */}
      <div className="max-w-[var(--layout-max-width)] mx-auto w-full">
        <Container variant="header">
          <header className="header-container-static flex items-center justify-between">
            <NavbarContent isFixed={false} />
          </header>
        </Container>
      </div>

      {/* FIXED NAVBAR — route based */}
      <header
        className={`header-container-fixed ${isHiding ? "header-hiding" : ""} ${
          isScrolled ? "header-scrolled" : ""
        }`}
      >
        <Container
          variant="header"
          className="header-fixed-content flex items-center justify-between"
        >
          <NavbarContent isFixed={true} />
        </Container>
      </header>
    </>
  );
}
