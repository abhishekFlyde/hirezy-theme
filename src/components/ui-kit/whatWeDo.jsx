"use client";
import Image from "next/image";
import { Container } from "./spacing";
import Label from "./lable";
import Typography from "./typography";

const WhatWeDo = () => {
  // ✅ Static data
  const section = {
    label: "Selected",
    title: "What we DO",
    description:
      "Our commitment is to use active ingredients of natural origin wherever possible without compromising the quality of the formulas and the results.",
   
    features: [
      {
        id: 1,

        description: "Clean, ",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Frame.png",
      },
      {
        id: 2,
        description: "Fast, ",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(8).png",
      },
      {
        id: 3,
        description: "Cross-",
        icon: "https://ik.imagekit.io/a9uxeuyhx/noun-comedy-7990225%201.png",
      },
      {
        id: 4,
        description: "Cross-",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(9).png",
      },
      {
        id: 5,
        description: "Cross-",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(10).png",
      },
      {
        id: 6,
        description: "Cross-",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(11).png",
      },
      {
        id: 7,
        description: "Cross-",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(12).png",
      },
      {
        id: 8,
        description: "Cross-",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(13).png",
      },
      {
        id: 9,
        description: "Cross-",
        icon: "https://ik.imagekit.io/a9uxeuyhx/Group%20(14).png",
      },
    ],
  };

  const { title, label, description, features } = section;

  return (
    <section className="why-do">
      <Container variant="secondary">
        <div className="why-do-grid">
          {/* Left Section */}
          <div className="why-left-1">
            <div className="why-left-content">
              <Label className="lable" text={label} />
              <Typography variant="h2" className="why-title">
                {title}
              </Typography>
              <Typography variant="body-4" className="why-desc">
                {description}
              </Typography>
            </div>
          </div>

          {/* Right Section – Features */}
          <div className="why-right-grid">
            {features.map((item) => (
              <div key={item.id} className="why-grid-card">
                <div className="icon-circle ">
                  <Image
                    src={item.icon}
                    alt={item.title}
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
