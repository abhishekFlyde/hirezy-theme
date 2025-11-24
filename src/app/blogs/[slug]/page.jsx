"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Container } from "@/components/ui-kit/spacing";
import SectionHeader from "@/components/ui-kit/sectionHeader";
import Header from "@/components/ui-kit/header";
import Footer from "@/components/ui-kit/footer";
import ArticleHeader from "@/components/ui-kit/articleHeader";
import Image from "next/image";
import {BlogsTextContent} from "@/components/ui-kit/blogsTextContent";
import {TextInfoCard} from "@/components/ui-kit/textInfoCard";
import "@/app/blogs/blogs.scss";


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
      <ArticleHeader />
      <Container variant="primary" className="blog-container">
        <div className="blog-image">
        <Image src='https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843' alt='Rectangle_1' width={916} height={516} />
        </div>

        <div className="blog-text-content">
        <BlogsTextContent heading={blog.title} description={blog.subtitle} />
        </div>

        <div className="blog-text-content">
        <BlogsTextContent heading={blog.title} description={blog.subtitle} />
        </div>
        
        <div className="blog-text-content">
        <BlogsTextContent heading={blog.title} description={blog.subtitle} />
        </div>

        <div className="blog-text-content">
        <TextInfoCard heading='Conclusion' description='Building high-performing remote teams requires intentional effort and the right approach. By focusing on clear communication, the right tools, personal connections, and outcome-based management, you can create a thriving remote team culture.' />
        </div>

     
      </Container>
      <Footer />
    </>
  );
}
