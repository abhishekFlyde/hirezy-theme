"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Container } from "@/components/ui-kit/spacing";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";

export default function BlogDetails() {
  const { slug } = useParams(); // 🔹 Get slug from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const getBlogDetails = async () => {
      try {
        const res = await axios.get(
          `https://mediumaquamarine-porcupine-223241.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}`
        );
        const post = res.data[0]; // WP returns an array

        if (post) {
          setBlog({
            label: "Blog Details",
            title: post.title?.rendered || "Untitled Blog",
            subtitle:
              post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
              "No description available.",
            content: post.content?.rendered || "",
            image:
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/default-image.jpg",
          });
        }
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);
      }
    };

    getBlogDetails();
  }, [slug]);

  if (loading) {
    return (
      <Container variant="primary" className="mainSec text-center">
        <p>Loading blog details...</p>
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container variant="primary" className="mainSec text-center">
        <p>Blog not found.</p>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container variant="primary" className="mainSec">
        {/* 🔹 Blog Header Section */}
        <SectionHeader
          label={blog.label}
          title={blog.title}
          subtitle={blog.subtitle}
          align="center"
        />

     
      </Container>
      <Footer />
    </>
  );
}
