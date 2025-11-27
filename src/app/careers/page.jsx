"use client";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import { Container } from "@/components/ui-kit/spacing";
import Image from "next/image";
import CTA from "@/components/ui-kit/cta";
import { useState, useEffect } from "react";
// import JobCards from "@/components/ui-kit/jobCards";
import JobCard from "@/components/ui-kit/jobCard";
import Card from "@/components/ui-kit/value";

export default function Careers() {
  // for mobile and desktop Navbar animation logic.
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
        <div className="careers-main-heading">
          <Container variant="bottomSpacing">
            <SectionHeader
              // variant="tertiary"
              label="Careers"
              title="Join Our Mission to Transform Hiring"
              subtitle="We're building the future of recruitment technology. Join a team of innovators, creators, and problem-solvers making a real impact."
              align={isMobile ? "left" : "center"}
            />
          </Container>
        </div>
        <Container variant="topSpacing">
          <div className="careers-sub-heading">
            <SectionHeader
              title="Open Positions"
              subtitle="Find your next career opportunity and help us shape the future of recruitment."
              align={isMobile ? "left" : "center"}
              className="careers-title"
            />
          </div>
          <div className="job-cards-container">
            <JobCard
              category="website"
              title="Senior website designer"
              description="Lead the design of our core recruitment platform, creating intuitive experiences for recruiters and candidates."
              location="Remote"
              jobType="Full-time"
            />
            <JobCard
              category="website"
              title="Senior website designer"
              description="Lead the design of our core recruitment platform, creating intuitive experiences for recruiters and candidates."
              location="Remote"
              jobType="Full-time"
            />
            <JobCard
              category="website"
              title="Senior website designer"
              description="Lead the design of our core recruitment platform, creating intuitive experiences for recruiters and candidates."
              location="Remote"
              jobType="Full-time"
            />
            <JobCard
              category="website"
              title="Senior website designer"
              description="Lead the design of our core recruitment platform, creating intuitive experiences for recruiters and candidates."
              location="Remote"
              jobType="Full-time"
            />
          </div>
        </Container>
      </Container>
      <div className="why-work">
        <Container variant="primary">
          <SectionHeader
            title="Why Work at Hirezy?"
            subtitle="We believe in creating an environment where talent thrives and innovation flourishes."
            align={isMobile ? "left" : "center"}
            className="careers-title"
          />
          <div className="why-hire-cards-container">
            <Card
              variant="tertiary"
              bgVariant="white"
              title="Growth Opportunities"
              description="Continuous learning and development programs to help you reach your career goals."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className="why-hire-card"
            />
            <Card
              variant="tertiary"
              bgVariant="white"
              title="Collaborative Culture"
              description="Work with talented, passionate people who support and inspire each other."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className=""
            />
            <Card
              variant="tertiary"
              bgVariant="white"
              title="Work-Life Balance"
              description="Flexible schedules, remote options, and generous time-off policies.."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className=""
            />
            <Card
              variant="tertiary"
              bgVariant="white"
              title="Cutting-Edge Tech"
              description="Work with the latest tools and technologies to solve real-world problems."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className=""
            />
            <Card
              variant="tertiary"
              bgVariant="white"
              title="Competitive Benefits"
              description="Comprehensive health coverage, equity options, and performance bonuses."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className=""
            />
            <Card
              variant="tertiary"
              bgVariant="white"
              title="Global Impact"
              description="Make a difference by transforming how companies find and hire talent worldwide."
              iconSrc="https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654"
              iconAlt=""
              className=""
            />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
