"use client";
import React from "react";
import Typography from "./typography";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./spacing";

export default function Header() {
  const [activeLink, setActiveLink] = React.useState("Home");
  
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];
  
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <Container variant="header">
      <header className="header-container flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://ik.imagekit.io/75zj3bigp/Logo.png?updatedAt=1761897402413"
            alt="Hirezy"
            width={140.3}
            height={37}
            className="header-logo"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="nav-link-container">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name);
              }}
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

        {/* CTA Buttons */}
        <div className="flex items-center">
          <Link href="/sign-in">
            <Button
              variant="primary"
              size="xl"
              showIcon={false}
              icon={
                <Image
                  src="/Arrow Right.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              }
            >
              Sign In
            </Button>
          </Link>
        </div>
      </header>
    </Container>
  );
}