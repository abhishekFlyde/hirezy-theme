"use client";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import { Container } from "@/components/ui-kit/spacing";
import Image from "next/image";
import Card from "@/components/ui-kit/value";
import Metric from "@/components/ui-kit/key-metric";
import OurTeamCard from "@/components/ui-kit/ourTeamCard";
import CTA from "@/components/ui-kit/cta";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check screen size on component mount
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    // Initial check
    checkScreenSize();

    // Add resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <Header />
      <Container variant="primary">
        <div className="team-heading">
          <SectionHeader
            label="About Us"
            title="Transforming Hiring, One Connection at a Time"
            subtitle="At Hirezy, we believe finding the right talent shouldn't be complicated. Our mission is to simplify recruitment for businesses of all sizes through innovative technology and exceptional service."
            align={isMobile ? "left" : "center"}
          />
        </div>
      </Container>

      <Container className="about-spacing-two" variant="primary">
        <div className="about-container">
          <div className="about-heading">
            <SectionHeader
              label="Our Story"
              title="Building Better Hiring Since 2019"
              align="left"
              imageSrc="https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843"
              imageAlt="About image"
              subtitle=<>
                Founded by a team of HR professionals and tech innovators,
                Hirezy was born from a simple observation: recruitment was
                broken. Too many tools, too much complexity, and not enough
                focus on what matters – finding great people. <br /> <br />{" "}
                <br />
                Today, we serve over 500 companies worldwide, helping them
                streamline their hiring process and build exceptional teams. Our
                platform has facilitated more than 10,000 successful hires and
                continues to evolve based on real feedback from real recruiters.
              </>
            />
          </div>

          <div className="about-image">
            <Image
              src="https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843"
              alt="About image"
              width={571}
              height={520}
            />
          </div>
        </div>
      </Container>

      <div className="about-our-value-container">
        <Container variant="primary">
          <div className="about-our-value-heading">
            <SectionHeader
              label="Our Values"
              title="What Drives Us Forward"
              subtitle="The principles that guide everything we do at Hirezy."
              align="center" // Yahan fixed center rahega
            />
          </div>
          <div className="value-container">
            <Card
              variant="secondary"
              title="Customer First"
              description="Every feature we build, every decision we make starts with understanding our customers' needs and challenges."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className=""
            />
            <Card
              variant="secondary"
              title="Customer First"
              description="Every feature we build, every decision we make starts with understanding our customers' needs and challenges."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className=""
            />
            <Card
              variant="secondary"
              title="Customer First"
              description="Every feature we build, every decision we make starts with understanding our customers' needs and challenges."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className=""
            />
          </div>
        </Container>
      </div>

      <Container className="about-our-team-parent-container" variant="primary">
        <div className="about-our-team-heading">
          <SectionHeader
            label="Our Team"
            title="Meet the People Behind Hirezy"
            subtitle="A diverse team of experts passionate about revolutionizing recruitment."
            align={isMobile ? "center" : "center"} // Yahan bhi same state use karo
          />
        </div>
        <div className="our-team-cards-container">
          <OurTeamCard
            name="Sarah Johnson"
            description="Chief Executive Officer"
            imageSrc="https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843"
          />
          <OurTeamCard
            name="Sarah Johnson"
            description="Chief Executive Officer"
            imageSrc="https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843"
          />
          <OurTeamCard
            name="Sarah Johnson"
            description="Chief Executive Officer"
            imageSrc="https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843"
          />
          <OurTeamCard
            name="Sarah Johnson"
            description="Chief Executive Officer"
            imageSrc="https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843"
          />
        </div>
      </Container>

      <Container
        variant="primary"
        className="grid sm:grid-cols-4 grid-cols-2 gap-[50px] about-metric-container"
      >
        <Metric key="1" number="500+" label="Teams Worldwide" />
        <Metric key="2" number="10K+" label="Successful Hires" />
        <Metric key="3" number="50+" label="Seamless Integrations" />
        <Metric key="4" number="95%" label="Customer Satisfaction" />
      </Container>

      <Container variant="normal">
        <CTA />
      </Container>
      <Footer />
    </>
  );
}
