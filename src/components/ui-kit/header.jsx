"use client";
import React, { useEffect, useRef, useState } from "react";
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

  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  // REFS
  const firstScrollRef = useRef(false);
  const timeoutRef = useRef(null);

  const pathname = usePathname();
  const router = useRouter();

  // Load header data
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/header-section");
        setHeader(res.data?.section || {});
      } catch {
        console.log("Failed to load header");
      }
    })();
  }, []);

  // Set active link
  useEffect(() => {
    if (!header?.navLinks) return;
    const currentLink = header.navLinks.find(
      (link) =>
        pathname === link.href ||
        (link.href !== "/" && pathname.startsWith(link.href))
    );
    if (currentLink) setActiveLink(currentLink.name);
    else if (pathname === "/") setActiveLink("Home");
  }, [pathname, header]);

  // FINAL FIRST-SCROLL LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // On first scroll → HIDE immediately → show after 1 second
      if (!firstScrollRef.current && y > 10) {
        firstScrollRef.current = true;

        // hide instantly
        setIsVisible(false);

        timeoutRef.current = setTimeout(() => {
          setIsFixed(true);
          setIsVisible(true);
        }, 1000);

        return;
      }

      // After first scroll, header ALWAYS visible + fixed
      if (firstScrollRef.current) {
        setIsFixed(true);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // Navigation click
  const handleLinkClick = (name, href, e) => {
    e.preventDefault();
    setActiveLink(name);
    router.push(href);
  };

  if (!header) return null;

  return (
    <Container variant="header">
      <header
        className={`header-container flex items-center justify-between
          ${isFixed ? "header-fixed" : ""}
          ${isVisible ? "header-visible" : "header-hidden"}
        `}
      >
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
                className="nav-link-color"
                variant="body-4"
                style={{ fontSize: "16px", lineHeight: "150%" }}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </nav>

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
