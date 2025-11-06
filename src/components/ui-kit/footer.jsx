"use client";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import { useEffect, useState } from "react";

const Footer = () => {
  const [variant, setVariant] = useState("body-4");

  useEffect(() => {
    const handleResize = () => {
      setVariant(window.innerWidth <= 450 ? "body-1" : "body-4");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ];

  const contacts = [
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Phone.png?updatedAt=1761982895611",
      text: "+62 812 3456 7890",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Location.png?updatedAt=1761982895250",
      text: "support@hirezy.com",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Mail.png?updatedAt=1761982895241",
      text: (
        <>
          123 Innovation Street,
          <br />
          Yogyakarta, Indonesia
        </>
      ),
    },
  ];

  const socials = [
    { name: "IN", href: "#" },
    { name: "FB", href: "#" },
    { name: "X", href: "#" },
  ];

  return (
    <footer className="footer">
      <Container className="primary-spacing">
        <div className="footer-container-one">
          <div className="footer__wrapper">
            {/* Left Section */}
            <div className="footer__brand">
              <div className="footer__brand-content">
                <Link href="/" className="footer__logo">
                  <Image
                    src="https://ik.imagekit.io/75zj3bigp/Logo.png?updatedAt=1761897402413"
                    width={100}
                    height={40}
                    alt="Hirezy Logo"
                  />
                </Link>
                <Typography variant="body-4" className="footer__desc">
                  All-in-one recruitment made easy, from posting jobs to
                  building stronger teams.
                </Typography>
              </div>

              <div className="footer__socials">
                {socials.map((item, i) => (
                  <Link key={i} href={item.href} className="footer__social-btn">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer-links-container">
              {/* Quick Links */}
              <div className="footer__links">
                <Typography variant="h5">Quick Links</Typography>
                <ul>
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>
                        <Typography variant="body-4">{link.name}</Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacts */}
              <div className="footer__contacts">
                <Typography variant="h5">Contacts</Typography>
                <ul>
                  {contacts.map((contact, i) => (
                    <li key={i} className="footer__contact-item">
                      <Image
                        src={contact.icon}
                        width={16}
                        height={16}
                        alt="icon"
                        className="footer__icon"
                      />
                      <Typography variant="body-4">{contact.text}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="footer__subscribe">
            <div className="footer__subscribe-content">
              <Typography variant="h3">Subscribe for Updates</Typography>
              <Typography variant="body-4" className="footer__subscribe-desc">
                Get the latest hiring tips and product updates delivered to your
                inbox.
              </Typography>
            </div>

            <div className="footer__input">
              <input type="email" placeholder="Enter your email" />
              <button className="arrow-btn">
                <Image
                  src="/Arrow Right.png"
                  width={14}
                  height={12}
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer__bottom">
        <Typography variant={variant}>
          Copyright © 2035 Hirezy. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
