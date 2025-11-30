"use client";

import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import "./services.scss";
import Card from "@/components/ui-kit/value";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import OurServices from "@/components/ui-kit/ourServices";
import ServiceCard from "@/components/ui-kit/serviceCard";
import Image from "next/image";
import Button from "@/components/ui-kit/button";

export default function ServicesPage() {
  const servicesData = [
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Icon%20(8).png",
      title: "Talent Sourcing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      dark: true,
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Icon%20(8).png",
      title: "Analytics & Reports",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Icon%20(8).png",
      title: "Team Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Icon%20(8).png",
      title: "AI Matching",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Icon%20(8).png",
      title: "Communication",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Icon%20(8).png",
      title: "Compliance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  const features = [
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "Instant Hiring",
      subtitle: "24/7 Support Department",
      description:
        "Our team is dedicated to provide support for all your hiring needs. Our team is here whenever you need us.",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "Growth Focused",
      subtitle: "Specialized Talent Acquisition",
      description:
        "Driven by 8 gynecology experts to help you find the perfect candidates for specialized roles.",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "Premium Quality",
      subtitle: "Expert Recruitment Team",
      description:
        "Comprehensive healthcare and medical professionals matching the highest standards of excellence.",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "Team Building",
      subtitle: "Collaborative Solutions",
      description:
        "Our dedicated experts provide compassionate team- building services tailored to your family's needs.",
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "Team Building",
      subtitle: "Collaborative Solutions",
      description:
        "Our dedicated experts provide compassionate team- building services tailored to your family's needs.",
    },
  ];

  return (
    <>
      <div className="servicesHeaderContainer">
        <Header variant="blackNave" />
        <Container variant="primary">
          <SectionHeader
            align="left"
            titleTextColor="white"
            subTitleTextColor="secondary"
            subtitle="Discover world-class recruitment solutions for the modern workforce."
            title="Services"
          />
        </Container>
      </div>
      <OurServices />
      <Container variant="primary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--sp-16)]">
          {servicesData.map((item, i) => (
            <ServiceCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
              dark={item.dark} // first card dark
            />
          ))}
        </div>
      </Container>

      {/* Recruitment Hero Section */}
      <div className="hero-container">
        <Container variant="primary">
          <div className="hero-wrapper">
            <div className="hero-left">
              <div className="hero-badge">BUILT FOR YOU</div>

              <Typography
                variant="h1"
                colorVariant="white"
                className="hero-title"
              >
                World-Class Recruitment Services for You and Your Team
              </Typography>

              <Button
                variant="primary"
                size="smTwo"
                className="cta-btn-width"
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
                <Typography variant="h4">More Services</Typography>
              </Button>

              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                  alt="Professional woman working at desk"
                  className="hero-image"
                />
              </div>
            </div>

            <div className="hero-right">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={52}
                      height={52}
                    />
                  </div>
                  <div className="feature-content">
                    <Typography variant="h3" className="">
                      {feature.title}
                    </Typography>
                    <Typography variant="body-4" className="feature-subtitle">
                      {feature.subtitle}
                    </Typography>
                    <Typography
                      variant="body-4"
                      className="feature-description"
                    >
                      {feature.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Container variant="topSpacing">
            <div className="cta-container">
              <div className="cta-wrapper">
                <Typography
                  variant="h2"
                  colorVariant="white"
                  className="cta-title"
                >
                  Ready to Transform Your Hiring?
                </Typography>

                <Typography variant="body-3" className="cta-subtitle">
                  Start your 14-day free trial today. No credit card required.
                </Typography>

                <div className="cta-buttons">
                  <Button
                    variant="primary"
                    size="smTwo"
                    className="cta-btn-width"
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
                    <Typography variant="h4">Get Started Free</Typography>
                  </Button>
                  <Button
                    variant="black-outline"
                    size="smTwo"
                    className="cta-btn-width"
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
                    <Typography variant="h4">More Services</Typography>
                  </Button>
                </div>

                <div className="cta-features">
                  <div className="cta-feature-item">
                    <span className="cta-check">✓</span>
                    <Typography variant="body-4" colorVariant="white">
                      No credit card required
                    </Typography>
                  </div>
                  <div className="cta-feature-item">
                    <span className="cta-check">✓</span>
                    <Typography variant="body-4" colorVariant="white">
                      14-day free trial
                    </Typography>
                  </div>
                  <div className="cta-feature-item">
                    <span className="cta-check">✓</span>
                    <Typography variant="body-4" colorVariant="white">
                      Cancel anytime
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
}
