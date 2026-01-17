"use client";
import { useState } from "react";
import Button from "@/components/ui-kit/button";
import Metric from "@/components/ui-kit/key-metric";
import Pricing from "@/components/ui-kit/pricing";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Card from "@/components/ui-kit/value";
import FAQ from "@/components/ui-kit/faq";
import Image from "next/image";
import Label from "@/components/ui-kit/lable";
import { ImageCard } from "@/components/ui-kit/card";
import Header from "@/components/ui-kit/header";
import GridSection from "@/components/ui-kit/GridWrapper";
import Tools from "@/components/ui-kit/tools";
import Footer from "@/components/ui-kit/footer";
import CTA from "@/components/ui-kit/cta";
import WhyChoose from "@/components/WhyChoose";
import Input from "@/components/ui-kit/input";
import { SignIn } from "@/components/ui-kit/signin";
import MobileItel from "@/components/ui-kit/mobileItel";
import WhatWeDo from "@/components/ui-kit/whatWeDo";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import AboutOurTeam from "@/components/ui-kit/aboutOurTeam";
import AboutOurStory from "@/components/ui-kit/aboutOurStory";
import SuccessStoriesMetrics from "@/components/ui-kit/SuccessStoriesMetrics";
import MissionSection from "@/components/ui-kit/MissionSection";
import StoryCard from "@/components/CreativeEventsComponents/storyCard";
import ActiveMembers from "@/components/CreativeEventsComponents/activeMembers";
import VenueStage from "@/components/CreativeEventsComponents/venueStage";

export default function Home() {
  const faqData = [ 
    {
      question: "How does the free trial work?",
      answer:
        "We provide hiring solutions, recruitment tools, and consulting services.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel or upgrade at any time.",
    },
  ];
  const [section, setSection] = useState(null);
  return (
    <>
      <AboutOurTeam compVariant="pink" />

      <SectionHeader
        label="Our Features"
        title="Build Faster With Us"
        subtitle="Everything you need to launch and scale."
        buttons={[
          {
            label: "Get Started",
            href: "/get-started",
          },
          {
            label: "View Demo",
            href: "/demo",
            variant: "black-outline",
          },
        ]}
      />
      <WhatWeDo />
      <MissionSection
        bgText="MISSION"
        mainText="To serve Australia’s multicultural communities by creating experiences that blend entertainment with cultural heritage — connecting generations through music and celebration.
        "
        bgVariant="big-text"
        textVariant="body-4"
        textColor="white2"
      />
      <MissionSection
        bgText="VISION"
        mainText="To serve Australia’s multicultural communities by creating experiences that blend entertainment with cultural heritage — connecting generations through music and celebration.
        "
        bgVariant="big-text"
        textVariant="body-4"
        textColor="white2"
      />

      <AboutOurStory />
      <AboutOurStory variant="reverse" />
      <SuccessStoriesMetrics />
      <Container variant="primary">
        <GridSection
          label="Our Services"
          title="What We Offer"
          subtitle="Explore our range of solutions designed for you"
          minColWidth="280px"
          gap="24px"
          columns={3}
          centerTitle={true}
          items={[
            {
              component: (
                <ImageCard
                  heading="Card One"
                  description="This is the description for card one."
                  imageLink="https://ik.imagekit.io/a9uxeuyhx/63450784e2d5bfd73a4dfd87d81515ccfd33f84b.png?updatedAt=1767442341717"
                  textPosition="bottom"
                  variant="compact"
                />
              ),
              colSpan: 1,
              rowSpan: 1,
            },
            {
              component: (
                <ImageCard
                  heading="Card Two"
                  description="This is the description for card two."
                  imageLink="https://ik.imagekit.io/a9uxeuyhx/12543219068e22e44d1f1478aad91189d51b6016.jpg?updatedAt=1767441869125"
                  textPosition="bottom"
                  variant="compact"
                />
              ),
              colSpan: 1,
              rowSpan: 1,
            },
            {
              component: (
                <ImageCard
                  heading="Card Three"
                  description="This is the description for card three."
                  imageLink="https://ik.imagekit.io/75zj3bigp/default-image.jpg"
                  textPosition="bottom"
                  variant="compact"
                />
              ),
              colSpan: 1,
              rowSpan: 1,
            },
            {
              component: (
                <ImageCard
                  heading="Card One"
                  description="This is the description for card one."
                  imageLink="https://ik.imagekit.io/a9uxeuyhx/63450784e2d5bfd73a4dfd87d81515ccfd33f84b.png?updatedAt=1767442341717"
                  textPosition="bottom"
                  variant="compact"
                />
              ),
              colSpan: 1,
              rowSpan: 1,
            },
            {
              component: (
                <ImageCard
                  heading="Card Two"
                  description="This is the description for card two."
                  imageLink="https://ik.imagekit.io/a9uxeuyhx/12543219068e22e44d1f1478aad91189d51b6016.jpg?updatedAt=1767441869125"
                  textPosition="bottom"
                  variant="compact"
                />
              ),
              colSpan: 1,
              rowSpan: 1,
            },
            {
              component: (
                <ImageCard
                  heading="Card Three"
                  description="This is the description for card three."
                  imageLink="https://ik.imagekit.io/75zj3bigp/default-image.jpg"
                  textPosition="bottom"
                  variant="compact"
                />
              ),
              colSpan: 1,
              rowSpan: 1,
            },
          ]}
        />
      </Container>

      <MobileItel
        model="A100C"
        title="Design to Look Premium Built for Everyday India."
        subtitle="Smart Performance,long battery life,and a refined design everything you need, nothing you don't."
        imageSrc="https://ik.imagekit.io/a9uxeuyhx/hero.png"
      />

      {/* <Header /> */}

      {/* <Input label="Label" id="id" type="text" variant="input-default" placeholder="Placeholder"  /> */}
      <SignIn />
      <CTA />
      <WhyChoose />

      <div>
        <Typography variant="h1">Heading 1 - Lato</Typography>
        <br />
        <Typography variant="h2">Heading 2 - Lato</Typography>
        <br />
        <Typography variant="h3">Heading 3 - Lato</Typography>
        <br />
        <Typography variant="h4">Heading 4 - Lato</Typography>
        <br />
        <Typography variant="h5">Heading 5 - Jakarata Sans</Typography>
        <br />
        <Typography variant="h6">Heading 6 - Jakarata Sans</Typography>
        <br />
        <Typography variant="body-1">Body 1 - Jakarata Sans</Typography>
        <br />
        <Typography variant="body-2">Body 2 - Jakarata Sans</Typography>
        <br />
        <Typography variant="body-3">Body 3- Jakarata Sans</Typography>
        <br />
        <Typography variant="body-4">Body 4 - Jakarata Sans</Typography>
        <br />
        <br />
        <br />
        <br />

        <div>
          <div className="palette-section">
            <div className="palette-title">Neutral</div>
            <div className="palette-desc">
              A set of grayscale or subtle tones used to support the primary and
              secondary colors.
            </div>

            <div className="palette-row">
              <div className="palette-item">
                <div className="color-rect bg-black-500"></div>
                <div className="label">Black-500</div>
                <div className="hex">#222222</div>
              </div>

              <div className="palette-item">
                <div className="color-rect bg-black-400"></div>
                <div className="label">Black-400</div>
                <div className="hex">#636363</div>
              </div>

              <div className="palette-item">
                <div className="color-rect bg-black-300"></div>
                <div className="label">Black-300</div>
                <div className="hex">#AAAAAA</div>
              </div>

              <div className="palette-item">
                <div className="color-rect bg-white-500"></div>
                <div className="label">White-500</div>
                <div className="hex">#FFFFFF</div>
              </div>
            </div>
          </div>

          <div className="palette-section">
            <div className="palette-title">Primary</div>
            <div className="palette-desc">
              Default color palette for your project. You can customize it to
              your needs.
            </div>

            <div className="palette-row">
              <div className="palette-item">
                <div className="color-rect bg-lime"></div>
                <div className="label">Lime</div>
                <div className="hex">#CCEF55</div>
              </div>

              <div className="palette-item">
                <div className="color-rect bg-blue-500"></div>
                <div className="label">Blue-500</div>
                <div className="hex">#AFB7FF</div>
              </div>

              <div className="palette-item">
                <div className="color-rect bg-blue-400"></div>
                <div className="label">Blue-400</div>
                <div className="hex">#C7CDFF</div>
              </div>

              <div className="palette-item">
                <div className="color-rect bg-blue-300"></div>
                <div className="label">Blue-300</div>
                <div className="hex">#F7F8FF</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Button
              variant="primary"
              size="smTwo"
              showIcon={true}
              icon={
                <Image
                  src="/Arrow Right.png"
                  width={14}
                  height={12}
                  className="arrow-img"
                  alt=""
                />
              }
            >
              Button
            </Button>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Button
              variant="primary"
              size="xl"
              showIcon={false}
              icon={
                <Image src="/Arrow Right.png" width={14} height={12} alt="" />
              }
            >
              Button
            </Button>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Button variant="black-outline" size="xl">
              Button
            </Button>
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Button variant="white-outline" size="xl">
              <Typography variant="h4">Button</Typography>
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <Label variant="primary" className="lable" text="Label" />
          <Label
            variant="greenVariant"
            icon="https://ik.imagekit.io/75zj3bigp/Icon%20(10).png"
            className="lable"
            text="Label"
          />
          <Label variant="secondary" className="lable" text="Label" />
        </div>

        <div className="flex flex-col gap-8">
          <Typography variant="h2">Card Variants</Typography>

          <Card
            title="User Friendly"
            description="Clean interface and intuitive workflows that keep your team productive."
            iconSrc="https://ik.imagekit.io/a9uxeuyhx/Icon.png?updatedAt=1761819328290"
            iconAlt="User friendly icon"
          />
        </div>
        <div className="flex justify-center gap-[48px]">
          <Metric number="10k" label="Successful Hires" />
          <Metric number="200+" label="Clients" />
        </div>
        <section className="flex justify-center  py-[20px] ">
          <Pricing
            planName="Pro"
            description="Best for  teams that need more insights."
            features={[
              "Up to 10 team members for growing teams",
              "Advanced analytics & insights",
              "Faster & priority support",
              "Dedicated account manager",
              "Custom feature requests",
            ]}
            price="49"
            tag="Top Picks"
            iconSrc="https://ik.imagekit.io/a9uxeuyhx/Icon%20(1).png?updatedAt=1761823327862"
            variant="lime"
          />
        </section>
        <section className="flex justify-center  py-[20px] ">
          <Pricing
            planName="Enterprise"
            description="Best for  teams that need more insights."
            features={[
              "Up to 10 team members for growing teams",
              "Advanced analytics & insights",
              "Faster & priority support",
            ]}
            price="99"
            tag=""
            iconSrc="https://ik.imagekit.io/a9uxeuyhx/Icon%20(2).png?updatedAt=1761828645214"
            variant="blue"
          />
        </section>

        <section className="py-[80px]">
          <h2 className="text-center mb-8">Frequently Asked Questions</h2>
          <FAQ faqs={faqData} />
        </section>

        <Container variant="primary" className=" border border-red-500 ">
          <GridSection
            label="Features"
            title="Built for Every Team Hiring "
            subtitle="Whether you’re a startup or a global enterprise, Hirezy adapts to your hiring needs."
            minColWidth="310px"
            gap="32px"
            columns={3}
            centerTitle="center"
            items={[
              {
                component: (
                  <ImageCard
                    heading="HR Teams"
                    description="Simplify day-to-day hiring tasks and keep everything organized."
                    imageLink="https://ik.imagekit.io/flyde/Hirezy/Widget.png?updatedAt=1761895813353"
                  />
                ),
              },
              {
                component: (
                  <ImageCard
                    heading="Growing Business"
                    description="Quickly grow your team through a simplified hiring process."
                    imageLink="https://ik.imagekit.io/flyde/Hirezy/Widget%20(3).png?updatedAt=1761911114984"
                  />
                ),
              },
              {
                component: (
                  <ImageCard
                    heading="Recruitment Agencies"
                    description="Manage multiple clients and job postings from one platform."
                    imageLink="https://ik.imagekit.io/flyde/Hirezy/Widget%20(2).png?updatedAt=1761911282859"
                  />
                ),
              },
            ]}
            wrapperClass="!border !border-gray-300"
          />
        </Container>
        <Container variant="primary" className=" border border-red-500 ">
          <GridSection
            label="Features"
            title="Smart Recruitments, Better Results "
            subtitle="From job posting to candidate placement, Hirezy covers every step with ease."
            minColWidth="310px"
            gap="32px"
            columns={3}
            centerTitle="center"
            items={[
              {
                component: (
                  <ImageCard
                    heading="Customizable Pipelines"
                    description="Tailor your recruitment workflow to match your organization’s needs."
                    imageLink="https://ik.imagekit.io/flyde/Hirezy/Widget%20(5).png?updatedAt=1761910235027"
                    textPosition="bottom"
                    className="h-fit !border !border-red-500 "
                  />
                ),
              },
              {
                component: (
                  <ImageCard
                    heading="Centralized Dashboard"
                    description="Manage all hiring activities in one clean, organized platform."
                    imageLink="https://ik.imagekit.io/flyde/Hirezy/Widget%20(6).png?updatedAt=1761910276970"
                    textPosition="top"
                  />
                ),
                rowSpan: 2,
              },
              {
                component: (
                  <ImageCard
                    heading="Job Posting Automation"
                    description="Publish openings across multiple channels with a single click."
                    imageLink="https://ik.imagekit.io/flyde/Hirezy/Widgets.png?updatedAt=1761910276839"
                    textPosition="bottom"
                  />
                ),
              },
              {
                component: (
                  <ImageCard
                    heading="Team Activity Feed"
                    description="See real-time updates on candidate progress and team feedback."
                    imageLink="https://ik.imagekit.io/flyde/Hirezy/Widgets%20(1).png?updatedAt=1761910275812"
                    textPosition="bottom"
                  />
                ),
              },
              {
                component: (
                  <ImageCard
                    heading="Analytics & Reports"
                    description="Manage all hiring activities in one clean, organized platform."
                    imageLink="https://ik.imagekit.io/flyde/Hirezy/Widget%20(4).png?updatedAt=1761909952188"
                    textPosition="right"
                  />
                ),
              },
            ]}
            wrapperClass="!border !border-gray-300"
          />
        </Container>
        <section className="py-20 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">Our Tools</h2>
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
        </section>

        {/* Creative events Code */}
      </div>

      <Footer />
      <StoryCard />
      <ActiveMembers />
      <VenueStage />
    </>
  );
}
