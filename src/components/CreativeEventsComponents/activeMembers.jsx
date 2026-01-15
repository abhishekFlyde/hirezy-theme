"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "../ui-kit/sectionHeader";
import "./activeMembers.scss";

export default function ActiveMembers({
  label = "Selected",
  title = "Active Members",
  subtitle = "Our commitment is to use active ingredients of natural origin wherever possible without compromising the quality of the formulas and the results.",
  members = [
    {
      id: 1,
      image: "https://ik.imagekit.io/75zj3bigp/Testimonial.png",
      alt: "Active Member 1",
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/75zj3bigp/Testimonial.png",
      alt: "Active Member 2",
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/75zj3bigp/Testimonial.png",
      alt: "Active Member 3",
    },
  ],
}) {
  return (
    <section className="active-members">
      <SectionHeader
        className="active-members-header"
        label={label}
        title={title}
        subtitle={subtitle}
      />

      <div className="active-members__grid">
        {members.map((member) => (
          <div key={member.id} className="active-members__card">
            <Image
              src={member.image}
              alt={member.alt}
              width={400}
              height={600}
              className="active-members__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
