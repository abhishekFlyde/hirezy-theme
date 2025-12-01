"use client";
import Lable from "@/components/ui-kit/lable";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import Typography from "@/components/ui-kit/typography";
import Header from "@/components/ui-kit/header";
import Image from "next/image";
import { Container } from "@/components/ui-kit/spacing";
import Metric from "@/components/ui-kit/key-metric";
import Card from "@/components/ui-kit/value";
import CardTestimonial from "@/components/ui-kit/cardTestimonial ";
import SolutionCard from "@/components/ui-kit/solutionCard";

export default function SingleSuccessStory() {
  return (
    <>
      <div className="singleSuccessStoryBgColor">
        <Header variant="blackNave" />
        <Container variant="primary">
          <div className="topLeftTextContainer">
            <Typography variant="body-4" colorVariant="secondary">
              Success Story
            </Typography>
            <Image
              src="https://ik.imagekit.io/75zj3bigp/Icon%20(11).png"
              alt=""
              width={16}
              height={16}
            />
            <Typography variant="body-4" colorVariant="primary">
              TechCorp Solutions
            </Typography>
          </div>
          <div className="sectionHeaderContainer">
            <SectionHeader
              label="Success Story"
              icon="https://ik.imagekit.io/75zj3bigp/Icon%20(10).png?updatedAt=1764576071687"
              title="How TechCorp Reduced Hiring Time by 65%"
              subtitle="Discover how TechCorp Solutions transformed their recruitment process with Hirezy's intelligent platform."
              // align={isMobile ? "left" : "center"}
              variant="greenVariant"
              titleTextColor="white"
              subTitleTextColor="secondary"
            />
            <div className="successMetricContainer">
              <Metric
                number="65%"
                label="Faster Hiring"
                titleColor="primary"
                labelColor="secondary"
              />
              <Metric
                number="200+"
                label="Hires Made"
                titleColor="primary"
                labelColor="secondary"
              />
              <Metric
                number="$50K"
                label="Cost Savings"
                titleColor="primary"
                labelColor="secondary"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container variant="primary">
        {/* Main Section */}
        <div>
          <div className="mainSectionContainer">
            <Image
              src="https://ik.imagekit.io/75zj3bigp/Container%20(3).png"
              width={884}
              height={500}
            />
            <SectionHeader
              title="The Challenge"
              subtitle="TechCorp Solutions, a rapidly growing technology company with over 500 employees, was struggling with their manual recruitment process. Their HR team was overwhelmed with hundreds of applications for each position, spending countless hours manually reviewing resumes and coordinating interviews."
              align="left"
            />
            {/* <CardTestimonial  /> */}
            <CardTestimonial
              quote="Before Hirezy, we were drowning in resumes and losing great candidates to our competitors. Now, we're making better hires faster than ever before."
              author="Sarah Mitchell"
              role="Head of HR at TechCorp"
            />
            {/* Solution Section */}
            <div>
              <SectionHeader
                title="The Solution"
                subtitle="TechCorp implemented Hirezy's comprehensive recruitment platform, which included:"
                align="left"
              />
              <div>
                // Basic usage
                <SolutionCard
                  icon="/trend-up-icon.png"
                  title="AI-Powered Screening"
                  description="Automated resume screening reduced manual review time by 80%"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
