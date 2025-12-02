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

const officeLocations = [

  
  {
    city: "San Francisco",
    label: "Headquarters",
    address: [
      "123 Innovation Street",
      "San Francisco, CA 94102",
      "United States",
    ],
    phone: "+1 (555) 123–4567",
  },
  {
    city: "San Francisco",
    label: "Headquarters",
    address: [
      "123 Innovation Street",
      "San Francisco, CA 94102",
      "United States",
    ],
    phone: "+1 (555) 123–4567",
  },
  {
    city: "San Francisco",
    label: "Headquarters",
    address: [
      "123 Innovation Street",
      "San Francisco, CA 94102",
      "United States",
    ],
    phone: "+1 (555) 123–4567",
  },
];

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
            label="Our Offices"
            title="Visit Us Worldwide"
            subtitle="We have offices around the globe to serve you better"
            align={isMobile ? "left" : "center"}
          />
          <div className="offices-grid">
            {officeLocations.map((office) => (
              <div className="office-card" key={office.city}>
                <div className="office-card__header">
                  <Typography variant="h3" className="office-card__city">
                    {office.city}
                  </Typography>
                  <Typography variant="body-4" className="office-card__label">
                    {office.label}
                  </Typography>
                </div>

                <div className="office-card__body">
                  <div className="office-card__address">
                    {office.address.map((line) => (
                      <Typography key={line} variant="body-4">
                        {line}
                      </Typography>
                    ))}
                  </div>
                  <Typography variant="body-4" className="office-card__phone">
                    {office.phone}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
