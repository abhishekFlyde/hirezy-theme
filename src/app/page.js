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
import { useStaggeredAnimation } from "@/hooks/useStaggeredAnimation";

gsap.registerPlugin(ScrollTrigger);
import api from "@/lib/api";

export default function page() {
  // const { scrollYProgress } = useScroll();

  
  const [open, setOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

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

        // ✅ Clear form
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

  const faqData = [
    {
      question: "How does the free trial work?",
      active: "",
      answer:
        "We provide hiring solutions, recruitment tools, and consulting services.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      active: "",
      answer: "Yes, you can cancel or upgrade at any time.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      active: "",
      answer: "Yes, you can cancel or upgrade at any time.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      active: "",
      answer: "Yes, you can cancel or upgrade at any time.",
    },
  ];

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
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);


//   // Pricing animation hook call
// useStaggeredAnimation(".price-container", {
//   isDesktop: isDesktop,
//   desktopGaps: [320, 640, 1280],
//   mobileGaps: [120, 120, 120],
//   trigger: ".price-section",
//   numberOfItems: pricingSection?.items?.length || 3,
// });


// More precise mobile settings
useStaggeredAnimation(".price-container", {
  isDesktop: isDesktop,
  desktopGaps: [320, 640, 1280],
  mobileGaps: [200, 200, 200], 
  trigger: ".price-section", 
  mobileStart: "40% bottom", 
  mobileEnd: "top 20%",  
  numberOfItems: pricingSection?.items?.length || 3,
});

  useEffect(() => {
  const videoElement = document.querySelector('.video video'); // ✅ Video element directly
  const videoContainer = document.querySelector('.video');
  
  if (!videoElement || !videoContainer) return;
  
  let hasReachedFullSize = false;
  
  const handleScroll = () => {
    if (hasReachedFullSize) return;

    const rect = videoContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    const videoCenter = rect.top + (rect.height / 2);
    const viewportCenter = windowHeight / 2;
    
    const distanceFromCenter = Math.abs(videoCenter - viewportCenter);
    const maxDistance = 500;
    
    const progress = Math.max(0, Math.min(1,
      (maxDistance - distanceFromCenter) / maxDistance
    ));
    
    const scale = 0.5 + (0.5 * progress);
    videoElement.style.transform = `scale(${scale})`; // ✅ Video element pe scale
    
    if (scale >= 0.98) {
      hasReachedFullSize = true;
      videoElement.style.transform = `scale(1)`;
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


// useEffect(() => {
//   if (!pricingSection?.items || pricingSection.items.length === 0) {
//     console.log('❌ No pricing items found');
//     return;
//   }

//   const timer = setTimeout(() => {
//     const container = document.querySelector('.price-container');
//     const triggerElement = document.querySelector('.price-section');
    
//     if (!container || !triggerElement) {
//       console.log('❌ Container or trigger not found');
//       return;
//     }

//     console.log('🎯 Starting animation with', pricingSection.items.length, 'items');

//     if (isDesktop) {
//       // Desktop animation
//       gsap.set(".price-container > *:nth-child(1)", { y: 320 });
//       gsap.set(".price-container > *:nth-child(2)", { y: 640 });
//       gsap.set(".price-container > *:nth-child(3)", { y: 1280 });
      
//       gsap.to(".price-container > *", {
//         y: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".price-section",
//           start: "top bottom",
//           end: "center center",
//           scrub: true,
//           once: true,
//           markers: true,
//         },
//       });
//     } else {
//       // Mobile animation
//       gsap.set(".price-container > *:nth-child(1)", { y: 120 });
//       gsap.set(".price-container > *:nth-child(2)", { y: 120 });
//       gsap.set(".price-container > *:nth-child(3)", { y: 120 });
      
//       gsap.to(".price-container > *:nth-child(1)", {
//         y: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".price-container > *:nth-child(1)",
//           start: "top 90%",
//           end: "top 40%",
//           scrub: true,
//           once: true,
//           markers: true,
//         },
//       });
      
//       gsap.to(".price-container > *:nth-child(2)", {
//         y: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".price-container > *:nth-child(2)",
//           start: "top 90%",
//           end: "top 40%",
//           scrub: true,
//           once: true,
//           markers: true,
//         },
//       });
      
//       gsap.to(".price-container > *:nth-child(3)", {
//         y: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".price-container > *:nth-child(3)",
//           start: "top 90%",
//           end: "top 40%",
//           scrub: true,
//           once: true,
//           markers: true,
//         },
//       });
//     }
//   }, 200);

//   return () => clearTimeout(timer);
// }, [isDesktop, pricingSection]);


  // useStaggeredAnimation(".price-container", {
  //   isDesktop: isDesktop,
  //   desktopGaps: [320, 640, 1280],
  //   mobileGaps: [120, 120, 120],
  //   trigger: ".price-section",
  //   numberOfItems: 3,
  // });



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

  useEffect(() => {
    fetchHero();
    fetchTeamsSection();
    fetchAboutSection();
    fetchFeaturesSection();
  }, []);

  if (heroLoading || teamsLoading || aboutSectionLoading) return null;

  console.log(about);

  const desktopOrder = [0, 3, 1, 2, 4];

  return (
    <>
      <Header />

      <Container variant="heroSpacing">
        <div className="flex justify-between flex-wrap">
          <Typography variant="h1" style={{ whiteSpace: "pre-line" }}>
            {hero.title}
          </Typography>

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
        </div>

        <HeroImageSection
          mainImage={hero.mainImage}
          leftImage={hero.leftImage}
          rightImage={hero.rightImage}
        />
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
            <Container variant="primary" className="flex flex-col gap-[56px] ">
              {" "}
              <SectionHeader
                label={FeaturesSection.label}
                title={FeaturesSection.title}
                subtitle={FeaturesSection.subtitle}
              />{" "}
              <div className="columns-3 !gap-[32px]">
                {desktopOrder.map((idx) => {
                  const f = FeaturesSection.items[idx];

                  return (
                    <ImageCard
                      key={idx}
                      heading={f.heading}
                      description={f.description}
                      imageLink={f.imageLink}
                      textPosition={f.textPosition}
                      classNameCustom={
                        idx == 0
                          ? "break-inside-avoid "
                          : "break-inside-avoid  mt-[32px]"
                      }
                    />
                  );
                })}
              </div>
            </Container>
          ) : null}
        </>
      )}

      <CTA />
      <Container
        variant="secondary"
        className="grid sm:grid-cols-4 grid-cols-2 gap-[50px]  "
      >
        <Metric number="10k" label="Successful Hires" />
        <Metric number="500+" label="Teams Worldwide" />
        <Metric number="50k" label="Seamless Integration" />
        <Metric number="95%" label="Customer Satisfaction" />
      </Container>
      <Container
        variant="primary"
        className="flex flex-wrap justify-between items-start gap-16 "
      >
        <div className="">
          <SectionHeader
            label="Integration"
            title="Seamlessly Connected"
            subtitle="Connect Hirezy to your favorite tools and keep your hiring workflow running smoothly."
            align={isIpad || isMobile ? "center" : "left"}
            className="lg:max-w-[510px] w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Tools
            items={[
              {
                src: "https://ik.imagekit.io/a9uxeuyhx/Logo%20(4).png?updatedAt=1761911669465",
                alt: "Figma",
              },
              {
                src: "https://ik.imagekit.io/a9uxeuyhx/Logo.png?updatedAt=1761911498084",
                alt: "Notion",
              },
              {
                src: "https://ik.imagekit.io/a9uxeuyhx/Logo%20(2).png?updatedAt=1761911703538",
                alt: "Slack",
              },
              {
                src: "https://ik.imagekit.io/a9uxeuyhx/Logo%20(1).png?updatedAt=1761911729926",
                alt: "VS Code",
              },
              {
                src: "https://ik.imagekit.io/a9uxeuyhx/Logo%20(3).png?updatedAt=1761912113713",
                alt: "GitHub",
              },
            ]}
          />
        </div>
      </Container>

      <Container className="price-section">
        <div className="mainSec">
          <SectionHeader
            label="Pricing Plan"
            title="Simple Plans, Clear Value"
            subtitle=" Choose a plan that fits your team’s needs."
            align="center"
          />
          <div className="price-container">
            <Pricing
              planName="Starter"
              description="Best for  teams that need more insights."
              features={[
                "Up to 10 team members for growing teams",
                "Advanced analytics & insights",
                "Faster & priority support",
              ]}
              price="99"
              tag="Top Picks"
              iconSrc="https://ik.imagekit.io/a9uxeuyhx/Icon%20(2).png?updatedAt=1761828645214"
              variant="blue"
            />
            <Pricing
              planName="Pro"
              description="Best for  teams that need more insights."
              features={[
                "Up to 10 team members for growing teams",
                "Advanced analytics & insights",
                "Faster & priority support",
              ]}
              price="49"
              tag=""
              iconSrc="https://ik.imagekit.io/a9uxeuyhx/Icon%20(1).png?updatedAt=1761823327862"
              variant="lime"
            />
            <Pricing
              planName="Enterprice"
              description="Best for  teams that need more insights."
              features={[
                "Up to 10 team members for growing teams",
                "Advanced analytics & insights",
                "Faster & priority support",
              ]}
              price="99"
              tag="Top Picks"
              iconSrc="https://ik.imagekit.io/a9uxeuyhx/Icon%20(2).png?updatedAt=1761828645214"
              variant="blue"
            />
          </div>
        </div>
      </Container>
      <Container className="page-faq-container">
        <div className="faq-header">
          <SectionHeader
            label="FAQ"
            title="Have a Question?"
            subtitle="Save time with straightforward answers to common questions recruiters and HR teams often ask."
            align="start" // ya "left" / "right"
            className=""
          />

          <div className="faq-cta-section">
            <Typography variant="h3">Got more questions?</Typography>
            <Typography variant="body-4">
              Get in touch and we’ll take care of the rest.
            </Typography>
            <Button
              variant="primary"
              size="smTwo"
              showIcon={true}
              icon={
                <Image src="/Arrow Right.png" width={14} height={12} alt="" />
              }
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="faq-content">
          <FAQ className="" faqs={faqData} />
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
