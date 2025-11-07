"use client";
import React, { useEffect, useState } from "react";
import Typography from "./typography";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./spacing";
import api from "@/lib/api";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [header, setHeader] = useState(null);

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

  if (!header) return null;

  return (
    <Container variant="header">
      <header className="header-container flex items-center justify-between">
        {/* ✅ Dynamic Logo */}
        <Link href="/" className="flex-shrink-0">
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
              // onClick={(e) => {
              //   e.preventDefault();
              //   setActiveLink(link.name);
              // }}
              className={activeLink === link.name ? "active-link" : ""}
            >
              <Typography
                className={`transition-colors ${
                  activeLink === link.name ? "font-semibold" : ""
                }`}
                variant="body-4"
                style={{
                  fontWeight: activeLink === link.name ? 600 : 400,
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
