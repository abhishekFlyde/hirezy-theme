"use client";

import Image from "next/image";
import Label from "../ui-kit/lable";
import Typography from "../ui-kit/typography";
// import Button from "./button";
import "@/styles/_storyCard.scss";
import Card from "../ui-kit/value";
import Link from "next/link";
import "./_storyCard.scss";

const defaultMetrics = [
  { value: "65%", label: "Faster Hiring" },
  { value: "3x", label: "More Applicants" },
  { value: "120hrs", label: "Time Saved" },
];

export default function StoryCard({
  category = "Technology",
  title = "TechFlow Solutions",

  heroImage = "https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843",
  quote = "Hirezy transformed our recruitment process. We reduced our time-to-hire by 65% and significantly improved candidate quality. The platform's AI-powered matching is incredibly accurate.",
  authorName = "Sarah Chen",
  authorRole = "VP of People Operations",
  metrics = defaultMetrics,
  challengeTitle = "The Challenge",
  challengeDescription = "TechFlow was struggling with a lengthy hiring process that averaged 45 days, causing them to lose top talent to competitors. Their small HR team was overwhelmed with manual screening of hundreds of applications.",
  solutionTitle = "The Solution",
  solutionDescription = "By implementing Hirezy's AI-powered screening and automated workflows, TechFlow streamlined their entire recruitment pipeline. The platform's intelligent matching helped them identify the best candidates faster, while automated communications kept candidates engaged throughout the process.",
  ctaText = "Read Full Story",
  onCtaClick,
}) {
  return (
    <Link href="/success-stories/single-success-story" className="block">
      <article className="story-card">
        <div className="story-card__media">
          <Image
            src={heroImage}
            alt={`${title} team photo`}
            width={1280}
            height={640}
            className="story-card__media-img"
          />
          <div className="story-card__overlay">
            <div className="story-card__overlay-icon-wrapper">
              <Image
                src="https://ik.imagekit.io/75zj3bigp/Icon.png"
                alt="Graph icon"
                width={20}
                height={20}
                className="story-card__overlay-icon"
              />
            </div>
            <Typography variant="h3" className="story-card__overlay-value">
              7,700+
            </Typography>
            <Typography variant="body-4" className="story-card__overlay-label">
              Tickets Sold
            </Typography>
          </div>
        </div>

        <div className="story-card__body">
          <div className="story-card__header">
            {category && (
              <Label text={category} className="story-card__label" />
            )}
            <Typography variant="h2" className="story-card__title">
              {title}
            </Typography>
          </div>

          <div className="story-card__quote">
            <Image
              src="https://ik.imagekit.io/75zj3bigp/Icon%20(2).png"
              alt=""
              width={32}
              height={32}
              className="story-card__quote-icon"
            />
            <Typography variant="body-3" className="story-card__quote-text">
              {quote}
            </Typography>
            <div className="story-card__quote-author">
              <Typography variant="h6" className="story-card__quote-name">
                {authorName}
              </Typography>
              <Typography variant="body-4" className="story-card__quote-role">
                {authorRole}
              </Typography>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
