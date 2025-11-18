"use client";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import Card from "@/components/ui-kit/value";
import { Container } from "@/components/ui-kit/spacing";
import { useState, useEffect } from "react";
import "../contact-us/contact-us.scss";

export default function page() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <Header />
      <Container variant="primary">
        <SectionHeader
          label="Contact Us"
          title="Let's Start a Conversation"
          subtitle="Have questions about Hirezy? We're here to help. Reach out to our team and we'll get back to you as soon as possible."
          align={isMobile ? "left" : "center"}
        />
      </Container>
      <div className="support-options">
        <Container variant="primary" className="wrapper">
          <SectionHeader
            label="Support Options"
            title="More Ways to Get Help"
            subtitle="Choose the support option that works best for you."
            align={isMobile ? "left" : "center"}
            labelBgColor="white"
          />

          <div className="support-card">
            <Card
              variant="secondary"
              title="Help Center"
              description="Browse our comprehensive documentation and find answers to common questions."
              iconSrc="https://ik.imagekit.io/a9uxeuyhx/Container.png"
              textLink="Visit Help Center →"
              bgVariant="white"
            />
            <Card
              variant="secondary"
              title="Live Chat"
              description="Chat with our support team in real-time for immediate assistance."
              iconSrc="https://ik.imagekit.io/a9uxeuyhx/Container%20(1).png"
              textLink="Start Chat →"
              bgVariant="white"
            />
            <Card
              variant="secondary"
              title="Schedule a Call"
              description="Book a time to speak with one of our product specialists."
              iconSrc="https://ik.imagekit.io/a9uxeuyhx/Container%20(2).png"
              textLink="Book a Call →"
              bgVariant="white"
            />
          </div>
        </Container>
      </div>

      <Container variant="primary" className="contact-form">
        <div>
          <SectionHeader
            label="Get in Touch"
            title="Send Us a Message"
            subtitle="Fill out the form below and our team will respond within 24 hours."
            align={isMobile ? "left" : "left"}
          />
        </div>

        <div></div>
      </Container>
      <Footer />
    </>
  );
}
