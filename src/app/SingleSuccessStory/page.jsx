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
import TheResultCard from "@/components/ui-kit/theResultCard";
import CompanyDetailsCard from "@/components/ui-kit/companyDetailsCard";
import ServicesListCard from "@/components/ui-kit/servicesListCard";
import CTACard from "@/components/ui-kit/ctaCard";
import MoreStoriesCard from "@/components/ui-kit/moreStoriesCard";

export default function SingleSuccessStory() {
  const solutionsData = [
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "AI-Powered Screening",
      description:
        "Automated resume screening reduced manual review time by 80%",
      iconBg: "var(--color-lime)", // lime green
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "Team Collaboration",
      description: "Seamless collaboration across 12 hiring managers",
      iconBg: "var(--color-blue-400)", // light blue
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "Automated Scheduling",
      description: "Smart scheduling eliminated coordination headaches",
      iconBg: "var(--color-blue-400)", // light blue
    },
    {
      icon: "https://ik.imagekit.io/75zj3bigp/Container.png?updatedAt=1763470634303",
      title: "Analytics Dashboard",
      description: "Real-time insights into recruitment performance",
      iconBg: "var(--color-lime)", // lime green
    },
  ];

  // Result Card Data.
  const resultsData = [
    {
      title: "Time-to-Hire",
      subtitle: "Before: 45 days • After: 16 days",
      result: "65% reduction",
    },
    {
      title: "Cost-per-Hire",
      subtitle: "Before: $5,000 • After: $2,000",
      result: "60% reduction",
    },
    {
      title: "Quality of Hire",
      subtitle: "Before: 70% • After: 92%",
      result: "31% increase",
    },
    {
      title: "Candidate Experience",
      subtitle: "Before: 3.2/5 • After: 4.8/5",
      result: "50% improvement",
    },
  ];

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
        {/* Main Section (Left) */}
        <div className="mainSectionParentContainer">
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
            <div className="solutionSection">
              <SectionHeader
                title="The Solution"
                subtitle="TechCorp implemented Hirezy's comprehensive recruitment platform, which included:"
                align="left"
              />
              <div className="solutionCardContainer">
                {solutionsData.map((solution, index) => (
                  <SolutionCard
                    key={index}
                    icon={solution.icon}
                    title={solution.title}
                    description={solution.description}
                    iconBg={solution.iconBg}
                  />
                ))}
              </div>
            </div>
            {/* The Result */}
            <Container variant="topSpacing">
              <div>
                <SectionHeader
                  title="The Result"
                  subtitle="Within six months of implementing Hirezy, TechCorp saw dramatic improvements across all their recruitment metrics:"
                  align="left"
                />
                <div className="theResultCardContainer">
                  {resultsData.map((item, index) => (
                    <TheResultCard
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      result={item.result}
                    />
                  ))}
                </div>
                <div className="twoImageContainer">
                    <Image
                      src="https://ik.imagekit.io/75zj3bigp/Container%20(3).png"
                      width={432}
                      height={280}
                      className="twoImageContainer__image"
                    />
                    <Image
                      src="https://ik.imagekit.io/75zj3bigp/Container%20(3).png"
                      width={432}
                      height={280}
                      className="twoImageContainer__image"
                    />
                </div>
              </div>
            </Container>
          </div>

          {/* Company Details Card (Right) */}
          <div className="companyDetailsCardContainer">
            <CompanyDetailsCard
              industry="Technology"
              companySize="500+ employees"
              location="San Francisco, CA"
              timeline="6 months"
            />
            <CTACard
              title="Ready for similar results?"
              description="See how Hirezy can transform your recruitment process."
              buttonText="Get Started"
              titleColor="white"
              descriptionColor="secondary"
              onButtonClick={() => console.log("CTA clicked")}
            />
            <ServicesListCard
              title="Services Used"
              services={[
                "Applicant Tracking System",
                "AI-Powered Screening",
                "Team Collaboration",
                "Analytics & Reporting",
              ]}
            />
          </div>
        </div>
      </Container>
      <div className="moreStoriesContainer">
        <Container variant="primary">
          <SectionHeader
            title="More Success Stories"
            subtitle="Discover how other companies are transforming their recruitment with Hirezy."
            align="center"
          />

          <div className="moreStoriesCardContainer">
            <MoreStoriesCard
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              badge="75% faster hiring"
              category="FinTech Innovations"
              title="Scaling from 50 to 200 employees in 12 months"
              buttonText="Read Story"
              onButtonClick={() => console.log("Read story clicked")}
            />
            <MoreStoriesCard
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              badge="75% faster hiring"
              category="FinTech Innovations"
              title="Scaling from 50 to 200 employees in 12 months"
              buttonText="Read Story"
              onButtonClick={() => console.log("Read story clicked")}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
