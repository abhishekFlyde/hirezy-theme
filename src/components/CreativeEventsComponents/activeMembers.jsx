"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "../ui-kit/sectionHeader";
import Typography from "../ui-kit/typography";
import "./activeMembers.scss";

export default function ActiveMembers() {
  const members = [
    {
      id: 1,
      image:
        "https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843", // Placeholder
      alt: "Active Member 1",
    },
    {
      id: 2,
      image:
        "https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843", // Placeholder
      alt: "Active Member 2",
    },
    {
      id: 3,
      image:
        "https://ik.imagekit.io/75zj3bigp/default-image.jpg?updatedAt=1760090625843", // Placeholder
      alt: "Active Member 3",
    },
  ];

  return (
    <section className="active-members">
      <SectionHeader
        badge="Selected"
        label="ACTIVE"
        title="ACTIVE"
        titleScript="MEMBERS"
        description="Our commitment is to use active ingredients of natural origin wherever possible without compromising the quality of the formulas and the results."
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
