"use client";
import Image from "next/image";
import { Container } from "./spacing";
import Label from "./lable";
import Typography from "./typography";

const WhatWeDo = () => {
  const section = {
    label: "Selected",
    title: "What we DO",
    description:
      "Our commitment is to use active ingredients of natural origin wherever possible without compromising the quality of the formulas and the results.",

    features: [
      {
        id: 1,
        description: "Clean",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Frame.png",
      },
      {
        id: 2,
        description: "Fast",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(8).png",
      },
      {
        id: 3,
        description: "Cross",
        icon: "https://ik.imagekit.io/a9uxeuyhx/noun-comedy-7990225%201.png",
      },
      {
        id: 4,
        description: "Cross",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(9).png",
      },
      {
        id: 5,
        description: "Cross",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(10).png",
      },
      {
        id: 6,
        description: "Cross",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(11).png",
      },
      {
        id: 7,
        description: "Cross",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(12).png",
      },
      {
        id: 8,
        description: "Cross",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(13).png",
      },
      {
        id: 9,
        description: "Cross",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(14).png",
      },
    ],
  };

  const { title, label, description, features } = section;

  return (
    <section className="what-we-do">
      <Container variant="secondary">
        <div className="what-we-do-grid">
          {/* LEFT */}
          <div className="what-we-do-left">
            <div className="what-we-do-content">
              <Label text={label} />
              <Typography variant="h2" className="what-we-do-title">
                {title}
              </Typography>
              <Typography variant="body-4" className="what-we-do-desc">
                {description}
              </Typography>
            </div>
          </div>

          {/* RIGHT */}
          <div className="what-we-do-icons-grid">
            {features.map((item) => (
              <div key={item.id} className="what-we-do-icon-card">
                <div className="what-we-do-icon-circle">
                  <Image
                    src={item.icon}
                    alt="feature icon"
                    width={26}
                    height={26}
                  />
                </div>

                <Typography variant="body-4">{item.description}</Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
