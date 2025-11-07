"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Container } from "@/components/ui-kit/spacing";
import GridSection from "@/components/ui-kit/GridWrapper";
import { ImageCard } from "@/components/ui-kit/card";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import Image from "next/image";

export default function Blogs() {
  const [section, setSection] = useState({
    label: "Our Blogs",
    title: "Latest Insights",
    subtitle: "Explore stories, ideas, and updates from our team",
    minColWidth: "300px",
    gap: "24px",
    columns: 3,
    centerTitle: true,
    items: [],
  });

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(
          "https://mediumaquamarine-porcupine-223241.hostingersite.com/wp-json/wp/v2/posts?_embed"
        );
        const data = res.data;

        setSection((prev) => ({
          ...prev,
          items: data.map((item) => ({
            slug: item.slug,
            heading: item.title?.rendered || "Untitled",
            description: item.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
            imageLink:
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/default-image.jpg",
            textPosition: "bottom",
            colSpan: 1,
            rowSpan: 1,
          })),
        }));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getBlogs();
  }, []);

  return (
    <>
      <Header />
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
              <Link href={`/blogs/${card.slug}`} key={card.slug}>
                <ImageCard
                  heading={card.heading}
                  description={card.description}
                  imageLink={card.imageLink}
                  textPosition={card.textPosition}
                />
              </Link>
            ),
            colSpan: card.colSpan,
            rowSpan: card.rowSpan,
          }))}
        />
      </Container>
      <Footer />
    </>
  );
}
