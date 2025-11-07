"use client";
import { useState } from "react";
import { Container } from "@/components/ui-kit/spacing";
import GridSection from "@/components/ui-kit/GridWrapper";
import { ImageCard } from "@/components/ui-kit/card";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";

export default function Blogs() {
  const [section, setSection] = useState({
    label: "Our Blogs",
    title: "Latest Insights",
    subtitle: "Explore stories, ideas, and updates from our team",
    minColWidth: "300px",
    gap: "24px",
    columns: 3,
    centerTitle: true,
    items: [
      {
        heading: "How to Build a Better Brand",
        description:
          "Discover strategies for creating a brand that connects with your audience.",
        imageLink:
          "https://ik.imagekit.io/a9uxeuyhx/Widget.png?updatedAt=1762516572667",
        textPosition: "bottom",
        colSpan: 1,
        rowSpan: 1,
      },
      {
        heading: "Design Trends in 2025",
        description:
          "A deep dive into upcoming trends shaping modern UI and UX design.",
        imageLink:
          "https://ik.imagekit.io/a9uxeuyhx/Widget.png?updatedAt=1762516572667",
        textPosition: "bottom",
        colSpan: 1,
        rowSpan: 1,
      },
      {
        heading: "The Future of Remote Work",
        description:
          "How teams are evolving in a post-pandemic world and what it means for you.",
        imageLink:
          "https://ik.imagekit.io/a9uxeuyhx/Widget.png?updatedAt=1762516572667",
        textPosition: "bottom",
        colSpan: 1,
        rowSpan: 1,
      },
    ],
  });

  return (
    <>
    <Header/>
      <Container variant="primary">
        <GridSection
          label={section.label}
          title={section.title}
          subtitle={section.subtitle}
          minColWidth={section.minColWidth}
          gap={section.gap}
          columns={section.columns}
          centerTitle={section.centerTitle}
          items={section.items.map((card) => ({
            component: (
              <ImageCard
                key={card.heading}
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
      <Footer/>
    </>
  );
}
