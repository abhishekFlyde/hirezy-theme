"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/ui-kit/header";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import Footer from "@/components/ui-kit/footer";
import { Container } from "@/components/ui-kit/spacing";
import Testimonial from "@/components/ui-kit/testimonial";
import CTA from "@/components/ui-kit/cta";
import WhyChoose from "@/components/WhyChoose";
import Metric from "@/components/ui-kit/key-metric";
import Typography from "@/components/ui-kit/typography";
import Button from "@/components/ui-kit/button";
import Image from "next/image";
import HeroImageSection from "@/components/ui-kit/heroImageSection";
import GridSection from "@/components/ui-kit/GridWrapper";
import { ImageCard } from "@/components/ui-kit/card";
import Tools from "@/components/ui-kit/tools";
import Pricing from "@/components/ui-kit/pricing";
import TeamCard from "@/components/ui-kit/ourTeamCard";
import FAQ from "@/components/ui-kit/faq";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  number,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStaggeredScroll } from "@/hooks/useStaggeredScroll";
import AssembleSection from "@/components/ui-kit/FramerMotion Animation/AssembleSection";

gsap.registerPlugin(ScrollTrigger);
import api from "@/lib/api";
import { applyTheme } from "@/lib/applyTheme";
import { initThemeSocket } from "@/lib/themeSocket";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [allHovered, setAllHovered] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/theme-setting").then((res) => {
      applyTheme(res.data.theme);
      // console.log(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://hirezy-web.vercel.app/api/contact",
        formData
      );

      if (res.data.success) {
        setMessageSent(true);
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        toast.error(res.data.msg || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };


  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [hero, setHero] = useState(null);
  const [section, setSection] = useState(null);
  const [about, setAbout] = useState(null);
  const [heroLoading, setHeroLoading] = useState(true);
  const [teamsLoading, setTeamsLoading] = useState(true);
  const [aboutSectionLoading, setAboutSectionsLoading] = useState(true);
  const [FeaturesSection, setFeaturesSection] = useState(null);
  const [metricsSection, setMetricsSection] = useState(null);
  const [pricingSection, setPricingSection] = useState(null);
  const [faqSection, setFaqSection] = useState(null);
  const [testimonialsSection, setTestimonialsSection] = useState(null);
  const [integrationsSection, setIntegrationsSection] = useState(null);

  const fetchFeaturesSection = async () => {
    try {
      const res = await api.get("/features-section");
      setFeaturesSection(res.data?.section || res.data);
    } catch (err) {
      console.error("Failed to load Features Section");
    }
  }; 

  const checkDevice = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 600);
    setIsIpad(width > 600 && width <= 1100);
    setIsDesktop(width > 1024);
  }; 

  useEffect(() => {
    checkDevice();
    initThemeSocket()
    
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useStaggeredScroll(".price-container", {
    isDesktop: isDesktop,
    desktopGaps: [320, 640, 1280],
    startPosition: 0.7,
    endPosition: 0.1,
  });

  useEffect(() => {
    if (!about || !about.media) return;

    const initializeVideoAnimation = () => {
      const videoContainer = document.querySelector(".video");
      const videoElement = document.querySelector(".video video");

      if (!videoContainer || !videoElement) {
        setTimeout(initializeVideoAnimation, 100);
        return;
      }

      videoContainer.style.position = "relative";
      videoContainer.style.transformOrigin = "center center";

      let hasReachedFullSize = false;
      let animationFrameId = null;

      const handleScroll = () => {
        if (hasReachedFullSize) return;

        const rect = videoContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const videoTop = rect.top;
        const videoBottom = rect.bottom;
        const triggerStart = windowHeight;
        const triggerEnd = windowHeight * 0.3;

        let progress = 0;
        if (videoTop < triggerStart && videoBottom > 0) {
          const distanceFromTop = Math.max(0, triggerStart - videoTop);
          const totalRange = triggerStart - triggerEnd;
          progress = Math.min(1, distanceFromTop / totalRange);
        }

        const scale = 0.7 + 0.3 * progress;

        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          videoContainer.style.transform = `scale(${scale})`;
          if (progress >= 0.95) {
            hasReachedFullSize = true;
            videoContainer.style.transform = `scale(1)`;
          }
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll, { passive: true });

      setTimeout(() => handleScroll(), 200);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    };

    const cleanup = initializeVideoAnimation();
    return cleanup;
  }, [about]);

  const fetchHero = async () => {
    try {
      const res = await api.get("/hero");
      setHero(res.data);
    } catch (error) {
      console.log("Error fetching hero:", error);
    } finally {
      setHeroLoading(false);
    }
  };

  const fetchTeamsSection = async () => {
    try {
      const res = await api.get("/teams-section");
      setSection(res.data);
    } catch (err) {
      console.log("Error loading Teams section:", err);
    } finally {
      setTeamsLoading(false);
    }
  };

  const fetchAboutSection = async () => {
    try {
      const res = await api.get("/about");
      setAbout(res.data?.sections || res.data || {});
    } catch (err) {
      console.log("Error loading Teams section:", err);
    } finally {
      setAboutSectionsLoading(false);
    }
  };

  const fetchMetricSection = async () => {
    try {
      const res = await api.get("/metrics-section");
      setMetricsSection(res.data?.section || { items: [] });
    } catch (err) {
      console.error("Failed to load metrics section");
    }
  };

  const fetchIntegrationsSchema = async () => {
    try {
      const res = await api.get("/integration-section");
      setIntegrationsSection(res.data?.section || { items: [] });
    } catch (err) {
      console.log("Failed to load integration");
    }
  };

  const fetchPricingSection = async () => {
    try {
      const res = await api.get("/pricing-section");
      setPricingSection(res.data?.section || { items: [] });
    } catch {
      console.log("Failed to load pricing");
    }
  };

  const fetchFAQSection = async () => {
    try {
      const res = await api.get("/faq-section");
      setFaqSection(res.data?.section || { items: [] });
    } catch {
      console.log("Failed to load pricing");
    }
  };

  const fetchTestimonialsSection = async () => {
    try {
      const res = await api.get("/testimonial-section");
      setTestimonialsSection(res.data?.section || { items: [] });
    } catch {
      console.log("Failed to load testimonials");
    }
  };

  useEffect(() => {
    fetchHero();
    fetchTeamsSection();
    fetchAboutSection();
    fetchFeaturesSection();
    fetchMetricSection();
    fetchIntegrationsSchema();
    fetchPricingSection();
    fetchFAQSection();
    fetchTestimonialsSection();
  }, []);

  if (heroLoading || teamsLoading || aboutSectionLoading) return null;

  const desktopOrder = [0, 3, 1, 2, 4];
  // console.log(testimonialsSection);

  return (
    <>
      <Header />

      <Container variant="heroSpacing">
        <div className="flex justify-between flex-wrap">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
              delay: 0.1,
            }}
          >
            <Typography variant="h1" style={{ whiteSpace: "pre-line" }}>
              {hero.title}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.25,
            }}
          >
            <div className="md:w-[534px] flex flex-col justify-between spacing-40">
              <Typography variant="body-4" style={{ whiteSpace: "pre-line" }}>
                {hero.subtitle}
              </Typography>

              <div className="sp-24Home">
                {hero.primaryButtonText && (
                  <Button
                    variant="primary"
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
                    {hero.primaryButtonText}
                  </Button>
                )}

                {hero.secondaryButtonText && (
                  <Button variant="black-outline" size="xl">
                    {hero.secondaryButtonText}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ✨ Smooth image animation */}
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.33, 1, 0.68, 1], // "easeOutQuart" style smoothness
            delay: 0.5,
          }}
        >
          <HeroImageSection
            mainImage={hero.mainImage}
            leftImage={hero.leftImage}
            rightImage={hero.rightImage}
          />
        </motion.div>
      </Container>

      <Container variant="primary">
        <GridSection
          label={section.label}
          title={section.title}
          subtitle={section.subtitle}
          minColWidth={section.minColWidth}
          gap={section.gap}
          columns={section.columns}
          centerTitle={section.centerTitle}
          items={section?.items?.map((card) => ({
            component: (
              <ImageCard
                heading={card.heading}
                description={card.description}
                imageLink={card.imageLink}
                textPosition={card.textPosition}
              />
            ),
            colSpan: card.colSpan,
            rowSpan: card.rowSpan,
          }))}
        />
      </Container>

      <Container variant="primary" className="mainSec">
        <SectionHeader
          label={about.label || ""}
          title={about.title || ""}
          subtitle={about.subtitle || ""}
          align={about.centerTitle.toLowerCase()}
          className=""
        />
        <div className="video">
          <video autoPlay loop muted playsInline src={about.media || ""} />
        </div>
      </Container>
      <WhyChoose open={open} setOpen={setOpen} />

      {FeaturesSection && (
        <>
          {isMobile || isIpad ? (
            <Container variant="primary">
              <GridSection
                label={FeaturesSection.label}
                title={FeaturesSection.title}
                subtitle={FeaturesSection.subtitle}
                minColWidth={FeaturesSection.minColWidth}
                gap={FeaturesSection.gap}
                columns={FeaturesSection.columns}
                centerTitle={FeaturesSection.centerTitle}
                items={FeaturesSection.items.map((card) => ({
                  component: (
                    <ImageCard
                      heading={card.heading}
                      description={card.description}
                      imageLink={card.imageLink}
                      textPosition={card.textPosition}
                      className={card.className || ""}
                    />
                  ),
                  rowSpan: card.rowSpan || 1,
                  colSpan: card.colSpan || 1,
                }))}
              />
            </Container>
          ) : isDesktop ? (
            <Container variant="section" className="flex flex-col gap-[56px]">
              {/* Section Header with Animation */}
              <motion.div
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <SectionHeader
                  label={FeaturesSection.label}
                  title={FeaturesSection.title}
                  subtitle={FeaturesSection.subtitle}
                />
              </motion.div>

              {/* Cards Container with Staggered Animation */}
              <motion.div
                className="columns-3 !gap-[32px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.6, // Har card ke beech 0.3 seconds ka gap
                    },
                  },
                }}
              >
                {desktopOrder.map((idx) => {
                  const f = FeaturesSection.items[idx];

                  return (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: {
                          y: 80,
                          opacity: 0,
                          filter: "blur(15px)",
                          scale: 0.9,
                        },
                        visible: {
                          y: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                          scale: 1,
                          transition: {
                            type: "spring",
                            damping: 15,
                            stiffness: 100,
                            bounce: 0.4,
                            duration: 0.8,
                          },
                        },
                      }}
                      className={
                        idx == 0
                          ? "break-inside-avoid"
                          : "break-inside-avoid mt-[32px]"
                      }
                    >
                      <ImageCard
                        heading={f.heading}
                        description={f.description}
                        imageLink={f.imageLink}
                        textPosition={f.textPosition}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </Container>
          ) : null}
        </>
      )}

      <CTA />
      <Container
        variant="secondary"
        className="grid lg:grid-cols-4 grid-cols-2 gap-[50px]  "
      >
        {metricsSection?.items.map((m, i) => (
          <Metric key={i} number={m.number} label={m.label} />
        ))}
      </Container>
      <Container
        variant="primary"
        className="flex flex-wrap justify-between items-start gap-16 "
      >
        <div className="">
          <SectionHeader
            label={integrationsSection?.label}
            title={integrationsSection?.title}
            subtitle={integrationsSection?.subtitle}
            align={isIpad || isMobile ? "center" : "left"}
            className="lg:max-w-[510px] w-full"
          />
        </div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "0px" }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 100,
            bounce: 0.4,
            duration: 0.8,
          }}
        >
          <Tools items={integrationsSection?.items} />
        </motion.div>
      </Container>

      <Container className="price-section">
        <div className="mainSec">
          <SectionHeader
            label={pricingSection?.label}
            title={pricingSection?.title}
            subtitle={pricingSection?.subtitle}
            align="center"
          />
          <div className="price-container">
            {pricingSection?.items.map((p, i) => (
              <Pricing
                key={i}
                planName={p.planName}
                description={p.description}
                features={p.features.map((f) => f.text)}
                price={p.price}
                tag={p.tag}
                iconSrc={p.iconSrc}
                variant={p.variant}
                allHovered={allHovered}
              />
            ))}
          </div>
        </div>
      </Container>
      <Container className="page-faq-container">
        <div className="faq-header">
          <SectionHeader
            label={faqSection?.label}
            title={faqSection?.title}
            subtitle={faqSection?.subtitle}
            align="start"
          />

          <div className="faq-cta-section">
            <Typography variant="h3">Got more questions?</Typography>
            <Typography variant="body-4">
              Get in touch and we’ll take care of the rest.
            </Typography>
            <Link href="/contact-us" passHref>
              <Button
                variant="primary"
                size="smTwo"
                showIcon={true}
                icon={
                  <Image
                    src="/Arrow Right.png"
                    width={14}
                    height={12}
                    alt="Arrow Right"
                  />
                }
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="faq-content">
          <FAQ faqs={faqSection?.items} />
        </div>
      </Container>

      <Container>
        <Testimonial
          items={[
            {
              companyLogo:
                "https://ik.imagekit.io/a9uxeuyhx/Company.png?updatedAt=1762113891027",
              company: "BlueOcean",
              quote:
                "The integrations and analytics give us a clear edge over competitors.",
              details:
                "Having all the tools in one place makes our hiring process easier, more organized, and helps our team feel confident in every data-driven decision.",
              name: "Anna Roberts",
              role: "HR Manager at BrightPath Solutions",
              imageSrc:
                "https://ik.imagekit.io/a9uxeuyhx/3b074c847439e9d8f091ab35c5fdda46cc380b62.jpg?updatedAt=1762113238869",
            },
            {
              companyLogo:
                "https://ik.imagekit.io/a9uxeuyhx/Company.png?updatedAt=1762113891027",
              company: "Hirezy",
              quote:
                "The integrations and analytics give us a clear edge over competitors.",
              details:
                "Having all the tools in one place makes our hiring process easier, more organized, and helps our team feel confident in every data-driven decision.",
              name: "David Chen",
              role: "Recruitment Lead at InnovateX",
              imageSrc:
                "https://ik.imagekit.io/a9uxeuyhx/3b074c847439e9d8f091ab35c5fdda46cc380b62.jpg?updatedAt=1762113238869",
            },
            {
              companyLogo:
                "https://ik.imagekit.io/a9uxeuyhx/Company.png?updatedAt=1762113891027",
              company: "NextWave",
              quote:
                "The integrations and analytics give us a clear edge over competitors.",
              details:
                "Having all the tools in one place makes our hiring process easier, more organized, and helps our team feel confident in every data-driven decision.",
              name: "Sophia Lee",
              role: "Operations Director at NextWave",
              imageSrc:
                "https://ik.imagekit.io/a9uxeuyhx/3b074c847439e9d8f091ab35c5fdda46cc380b62.jpg?updatedAt=1762113238869",
            },
            {
              companyLogo:
                "https://ik.imagekit.io/a9uxeuyhx/Company.png?updatedAt=1762113891027",
              company: "NextWave",
              quote:
                "The integrations and analytics give us a clear edge over competitors.",
              details:
                "Having all the tools in one place makes our hiring process easier, more organized, and helps our team feel confident in every data-driven decision.",
              name: "Sophia Lee",
              role: "Operations Director at NextWave",
              imageSrc:
                "https://ik.imagekit.io/a9uxeuyhx/3b074c847439e9d8f091ab35c5fdda46cc380b62.jpg?updatedAt=1762113238869",
            },
            {
              companyLogo:
                "https://ik.imagekit.io/a9uxeuyhx/Company.png?updatedAt=1762113891027",
              company: "NextWave",
              quote:
                "The integrations and analytics give us a clear edge over competitors.",
              details:
                "Having all the tools in one place makes our hiring process easier, more organized, and helps our team feel confident in every data-driven decision.",
              name: "Sophia Lee",
              role: "Operations Director at NextWave",
              imageSrc:
                "https://ik.imagekit.io/a9uxeuyhx/3b074c847439e9d8f091ab35c5fdda46cc380b62.jpg?updatedAt=1762113238869",
            },
          ]}
        />
      </Container>

      <AnimatePresence>
        {open && !messageSent ? (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Typography variant="h3" className="mb-6 font-bold text-center">
                Send us a Message
              </Typography>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="input-wrapper">
                    <label>Full Name</label>
                    <input
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-wrapper">
                    <label>Email</label>
                    <input
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper">
                  <label>Phone Number</label>
                  <input
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-wrapper">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    icon={<ArrowRight />}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : messageSent ? (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpen(false);
              setMessageSent(false);
            }}
          >
            <motion.div
              className="modal-content flex flex-col items-center gap-[16px] "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="https://ik.imagekit.io/flyde/Hirezy/Rectangle%209.png?updatedAt=1762178829364"
                width={200}
                height={100}
                className="w-[382px] "
                alt="Thank you page"
              />
              <Typography variant="h2">THANK YOU!</Typography>
              <Typography variant="h4">We’ll get back soon</Typography>
              <Button
                variant="primary"
                onClick={() => {
                  setOpen(false);
                  setMessageSent(false);
                }}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Footer />
    </>
  );
}
