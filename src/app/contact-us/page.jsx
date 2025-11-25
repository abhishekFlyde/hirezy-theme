"use client";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import Card from "@/components/ui-kit/value";
import { Container } from "@/components/ui-kit/spacing";
import InputGroup from "@/components/ui-kit/InputGroup";
import Input from "@/components/ui-kit/input";
import { useState, useEffect } from "react";
import ContactInfo from "@/components/ui-kit/contactInfo";
import "../contact-us/contact-us.scss";
import Button from "@/components/ui-kit/button";
import Typography from "@/components/ui-kit/typography";
import OfficeHours from "@/components/ui-kit/officeHours";
import Image from "next/image";

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
        <Container variant="header">
          <SectionHeader
            label="Contact Us"
            title="Let's Start a Conversation"
            subtitle="Have questions about Hirezy? We're here to help. Reach out to our team and we'll get back to you as soon as possible."
            align={isMobile ? "left" : "center"}
          />
        </Container>
      <div className="contactUsLayoutShift">
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
          <div className="contact-form-wrapper">
            <div className="contact-form-heading">
              <SectionHeader
                label="Get in Touch"
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will respond within 24 hours."
                align={isMobile ? "left" : "left"}
              />
            </div>
            <div className="flex flex-col gap-[var(--sp-24)]">
              <div>
                <InputGroup columns={2}>
                  <Input
                    label="First Name"
                    name="firstName"
                    placeholder="Enter first name"
                    variant="ContactPageVariantInput"
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter last name"
                    variant="ContactPageVariantInput"
                  />
                </InputGroup>
              </div>
              <Input
                label="Email Address"
                name="emailAddress"
                placeholder="your.email@company.com"
                variant="ContactPageVariantInput"
              />
              <Input
                label="Company Name"
                name="companyName"
                placeholder="Enter your company name"
                variant="ContactPageVariantInput"
              />
              <Input
                label="Message"
                name="message"
                placeholder="Tell us how we can help..."
                variant="ContactPageVariantInput"
              />
              <div>
                {/* <Button showIcon='true' variant="primary" label="Send Message" >
                Send Message
              </Button> */}

                <Button
                  variant="primary"
                  size="smTwo"
                  icon={
                    <Image
                      src="/Arrow Right.png"
                      width={14}
                      height={12}
                      alt="arrow"
                      className="arrow-img"
                    />
                  }
                  iconPosition="right"
                >
                  <Typography variant="h4">Send Message</Typography>
                </Button>
              </div>
            </div>
          </div>
          <div className="contact-info-container">
            <ContactInfo />
            <OfficeHours />
          </div>
        </Container>
      </div>
      <div>
        <Container variant="primary">
          <SectionHeader
            label="Contact Us"
            title="Let's Start a Conversation"
            subtitle="Have questions about Hirezy? We're here to help. Reach out to our team and we'll get back to you as soon as possible."
            align={isMobile ? "left" : "center"}
          />
        </Container>
      </div>
      <Footer />
    </>
  );
}
