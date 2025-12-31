"use client";
import React, { useState } from "react";
import Label from "./lable";
import GridSection from "./GridWrapper";
import { ImageCard } from "./card";
import { Container } from "./spacing";
import SectionHeader from "./sectionHeader";


export default function Tabs({ section }) {
  // Active tab state
  const [activeTab, setActiveTab] = useState(0);

  // Tab heading names
  const tabs = [
    "Keratin Treatments",
    "Wash & Care",
    "Leave-In & Styling",
    "Oils & Finishing",
  ];

  // Active tab items (3 columns always)
  const activeItems = section?.tabsData?.[activeTab] || [];

  return (
    <>
      <Container>
        <SectionHeader
         
          title={section.title || ""}
          subtitle={section.subtitle || ""}
          align={section?.centerTitle ? "center" : "left"}
        />
        {/* TABS */}
        <Container variant="primary" className="tabs">
          {tabs.map((tab, index) => (
            <Label
              key={index}
              text={tab}
              variant="tab"
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </Container>

        {/* GRID SECTION */}
        <GridSection
          minColWidth={section.minColWidth}
          gap={section.gap}
          columns={section.columns} // ALWAYS 3 COLUMNS
          centerTitle={section.centerTitle}
          items={activeItems.map((card) => ({
            component: (
              <ImageCard
                heading={card.heading}
                description={card.description}
                imageLink={card.imageLink}
                textPosition={card.textPosition}
              />
            ),
            colSpan: 1, // FIXED: 3-column layout
          }))}
        />
      </Container>
    </>
  );
}
