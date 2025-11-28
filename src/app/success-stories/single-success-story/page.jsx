"use client";
import React from "react";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import "../single-success-story/singelSuccessStories.scss";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import { Container } from "@/components/ui-kit/spacing";
import Metric from "@/components/ui-kit/key-metric";
import { BlogsTextContent } from "@/components/ui-kit/blogsTextContent";

export default function page() {
  return (
    <>
      <section className="success-hero">
        {" "}
        <Header />
        <Container variant="blogSpacing">
          <div className="flex gap-2 items-center">
            <Typography variant="body-4" colorVariant="secondary">
              Success Stories
            </Typography>
            <Image
              src="https://ik.imagekit.io/75zj3bigp/Icon%20(6).png"
              alt=""
              width={20}
              height={20}
            />
            <Typography variant="h6" colorVariant="primary">
              TechCorp Solutions
            </Typography>
          </div>
          <div className="wrapper">
            <SectionHeader
              label="Success Story"
              title="How TechCorp Reduced Hiring Time by 65%"
              subtitle="Discover how TechCorp Solutions transformed their recruitment process with Hirezy's intelligent platform."
              align="center"
            />
            <div className="grid grid-cols-3  gap-[50px]">
              <Metric number={"65%"} label={"Faster Hiring"} />
              <Metric number={"200+"} label={"Hires Made"} />
              <Metric number={"$50K+"} label={"Cost Savings"} />
            </div>
          </div>
        </Container>
      </section>

      <Container variant="primary">
        <div className="hero-image-wrapper">
          <img
            src="https://ik.imagekit.io/a9uxeuyhx/ImageWithFallback.png"
            alt="hero"
            className="hero-image"
          />
        </div>
        <BlogsTextContent
          heading="The Challenge"
          description="TechCorp Solutions, a rapidly growing technology company with over 500 employees, was struggling with their manual recruitment process. Their HR team was overwhelmed with hundreds of applications for each position, spending countless hours manually reviewing resumes and coordinating interviews."
        />
      </Container>

      <Footer />
    </>
  );
}
