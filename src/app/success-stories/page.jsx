"use client";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import "./successStories.scss";
import { Container } from "@/components/ui-kit/spacing";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import Metric from "@/components/ui-kit/key-metric";
import Button from "@/components/ui-kit/button";
import Typography from "@/components/ui-kit/typography";
import StoryCard from "@/components/ui-kit/storyCard";

export default function SuccessStories() {
  return (
    <>
      <div className="success-stories">
        <Header />
        <Container variant="primary">
          <SectionHeader
            label="Success Stories"
            title="Real Results from Real Companies"
            subtitle="See how leading companies are transforming their hiring processes and building exceptional teams with Hirezy."
            align="center"
            className="success-header"
          />
        </Container>
        <div className="success-stories-metrics-block">
          <Container variant="blockSpacing">
            <SectionHeader
              title="Trusted by Industry Leaders"
              subtitle="Join 500+ companies that have transformed their hiring with Hirezy."
              align="center"
              className=""
            />
            {/* <Metric /> */}
            <Container
              variant="topSpacing"
              className="grid lg:grid-cols-4 grid-cols-2 gap-[50px]  "
            >
              <Metric number={"10000+"} label={"Successful Hires"} />
              <Metric number={"60%"} label={"Faster Time-to-Hire"} />
              <Metric number={"500+"} label={"Companies Served"} />
              <Metric number={"95%"} label={"Customer Satisfaction"} />
            </Container>
          </Container>
        </div>
        <Container variant="primary">
            <Container className='flex justify-center' variant="topSpacing">
                <StoryCard/>
            </Container>
        </Container>
        <div className="success-stories-cta-block">
          <Container variant="primary">
            <SectionHeader
              title="Trusted by Industry Leaders"
              subtitle="Join 500+ companies that have transformed their hiring with Hirezy."
              align="center"
              className=""
            />
            
            <div className="success-stories-btns flex justify-center gap-[var(--sp-32)] mt-[var(--sp-32)]">
              <Button variant="primary" size="xl" showIcon={false}>
                <Typography colorVariant="white" variant="h4">Start Free Trial</Typography>
              </Button>
              <Button
                transparent={true}
                variant="primary"
                size="xl"
                showIcon={false}
              >
                <Typography variant="h4">Schedule a Demo</Typography>
              </Button>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
