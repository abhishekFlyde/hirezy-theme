"use client";
import React, { useEffect, useState } from "react";
import Typography from "./typography";
import Button from "./button";
import Image from "next/image";
import { Container } from "./spacing";
import api from "@/lib/api";

const TransformSection = () => {
  const [section, setSection] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/transform-section");
        const data = res.data?.section || {};

        setSection({
          id: 1,
          title: data.title,
          desc: data.desc,
          btnText: data.btnText,
          btnIcon: data.btnIcon,
          bgImage: data.bgImage,
          buttonLink: data.buttonLink,
        });
      } catch (err) {
        console.error("Failed to load Transform Section", err);
      }
    })();
  }, []);

  if (!section) return null;

  return (
    <Container variant="section">
      <section className="transform-section section">
        <div
          key={section.id}
          className="transform-card"
          style={{ backgroundImage: `url(${section.bgImage})` }}
        >
          <div className="transform-card-content">
            <Typography variant="h1" className="cta-title">
              {section.title}
            </Typography>

            <Typography variant="body-3" className="cta-desc">
              {section.desc}
            </Typography>

            <Button
              variant="white"
              size="smTwo"
              showIcon={true}
              iconPosition="right"
              className="btn"
              icon={
                <Image
                  src={section.btnIcon}
                  width={14}
                  height={12}
                  alt="arrow"
                  className="arrow-img"
                />
              }
              as={section.buttonLink ? "a" : "button"}
              href={section.buttonLink || undefined}
            >
              <Typography variant="h4">{section.btnText}</Typography>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TransformSection;
