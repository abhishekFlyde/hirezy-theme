"use client";

import SectionHeader from "./sectionHeader";
import Typography from "./typography";
import Image from "next/image";
import { Container } from "./spacing";
import Link from "next/link";

export default function ArticleHeader() {
  return (
    <>
      <div className="blog-details-container">
        <Container className="blog-details-padding" variant="blockSpacing">
          <div className="blogs-details-header-container">
            <Link href="/blogs" className="flex gap-2 items-center">
              <Image
                src="https://ik.imagekit.io/75zj3bigp/Icon%20(5).png"
                alt=""
                width={20}
                height={20}
              />
              <Typography variant="body-4">Back to Blog</Typography>
            </Link>
            <div className="flex gap-2 items-center">
              <Typography variant="body-4">Blog</Typography>
              <Image
                src="https://ik.imagekit.io/75zj3bigp/Icon%20(6).png"
                alt=""
                width={20}
                height={20}
              />
              <Typography variant="h6">
                Building High-Performing Teams in a Remote-First World
              </Typography>
            </div>
            <SectionHeader
              label="Team Building"
              title="Building High-Performing Teams in a Remote-First World"
              align="left"
              labelBgColor="white"
            />
            <div className="blog-author-meta">
              <div className="blog-author-meta__profile">
                <Image
                  src="https://ik.imagekit.io/75zj3bigp/ImageWithFallback.png"
                  alt="Michael Chen"
                  width={48}
                  height={48}
                  className="blog-author-meta__avatar"
                />
                <Typography variant="h6" className="blog-author-meta__name">
                  Michael Chen
                </Typography>
              </div>
              <div className="blog-details-time-date flex items-center">
                <div className="blog-author-meta__item">
                  <Image
                    src="https://ik.imagekit.io/75zj3bigp/Icon%20(3).png?updatedAt=1763638995763"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <Typography
                    variant="body-5"
                    className="blog-author-meta__label"
                  >
                    Oct 28, 2025
                  </Typography>
                </div>

                <div className="blog-author-meta__dot" aria-hidden="true" />
                <div className="blog-author-meta__item">
                  <Image
                    src="https://ik.imagekit.io/75zj3bigp/Icon%20(1).png?updatedAt=1763384802745"
                    alt=""
                    width={20}
                    height={20}
                  />

                  <Typography
                    variant="body-5"
                    className="blog-author-meta__label"
                  >
                    7 min read
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
