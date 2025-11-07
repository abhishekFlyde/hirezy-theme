"use client";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/ui-kit/typography";
import { Container } from "@/components/ui-kit/spacing";
import { useEffect, useState } from "react";
import api from "@/lib/api";


const Footer = () => {
  const [variant, setVariant] = useState("body-4");
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setVariant(window.innerWidth <= 450 ? "body-1" : "body-4");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/footer-section");
        setFooter(res.data?.section || {});
      } catch (err) {
        console.log("Failed to load footer");
      }
    })();
  }, []);

  if (!footer) return null;

  return (
    <footer className="footer">
      <Container className="primary-spacing">
        <div className="footer-container-one">
          <div className="footer__wrapper">
            {/* Left Section */}
            <div className="footer__brand">
              <div className="footer__brand-content">
                <Link href="/" className="footer__logo">
                  <Image src={footer.logo} width={100} height={40} alt="logo" />
                </Link>

                <Typography variant="body-4" className="footer__desc">
                  {footer.description}
                </Typography>
              </div>

              <div className="footer__socials">
                {footer.socials?.map((item, i) => (
                  <Link key={i} href={item.href} className="footer__social-btn">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links & Contacts */}
            <div className="footer-links-container">
              <div className="footer__links">
                <Typography variant="h5">Quick Links</Typography>
                <ul>
                  {footer.quickLinks?.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>
                        <Typography variant="body-4">{link.name}</Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer__contacts">
                <Typography variant="h5">Contacts</Typography>
                <ul>
                  {footer.contacts?.map((c, i) => (
                    <li key={i} className="footer__contact-item">
                      <Image
                        src={c.icon}
                        width={16}
                        height={16}
                        alt="icon"
                        className="footer__icon"
                      />
                      <Typography variant="body-4">{c.text}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="footer__subscribe">
            <div className="footer__subscribe-content">
              <Typography variant="h3">{footer.subscribeTitle}</Typography>
              <Typography variant="body-4" className="footer__subscribe-desc">
                {footer.subscribeSubtitle}
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
        <Typography variant={variant}>{footer.copyright}</Typography>
      </div>
    </footer>
  );
};

export default Footer;
