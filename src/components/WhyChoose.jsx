"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./ui-kit/spacing";
import Label from "./ui-kit/lable";
import Typography from "./ui-kit/typography";
import Button from "./ui-kit/button";
import Card from "./ui-kit/value";
import api from "@/lib/api";

const WhyChoose = ({ open, setOpen }) => {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch CMS data
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/why-choose");
        setSection(res.data.data); // only section object
      } catch (err) {
        console.log("Failed to load section", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  console.log(section);

  if (loading || !section) {
    return (
      <section className="why-choose">
        <Container variant="secondary">
          <div className="animate-pulse h-64 bg-gray-200 rounded-lg w-full"></div>
        </Container>
      </section>
    );
  }

  const { title, label, description, buttonText, features } = section;

  return (
    <section className="why-choose">
      <Container variant="secondary">
        <div className="why-choose-grid">
          {/* Left Section */}
          <div className="why-left">
            <div className="why-left-content">
              <Label className="lable" text={label} />
              <Typography variant="h2" className="why-title">
                {title}
              </Typography>
              <Typography variant="body-4" className="why-desc">
                {description}
              </Typography>
            </div>

            <Button
              variant="primary"
              size="xl"
              showIcon={false}
              onClick={() => setOpen(true)}
              className="why-btn"
            >
              <Typography variant="h4">{buttonText}</Typography>
            </Button>
          </div>

          {/* Right Section – Features */}
          <div className="why-right">
            {features?.map((feature, index) => (
              <Card
                key={index}
                iconSrc={feature.icon}
                title={feature.title}
                iconAlt={feature.title}
                description={feature.desc}
                className="why-card"
              />
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="mobile-button-container">
          <Button
            variant="primary"
            size="xl"
            showIcon={false}
            onClick={() => setOpen(true)}
          >
            <Typography variant="h4">{buttonText}</Typography>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
