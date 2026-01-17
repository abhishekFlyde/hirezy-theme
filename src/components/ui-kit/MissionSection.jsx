"use client";
import React from "react";
import Typography from "./typography";
import { Container } from "./spacing";

const MissionSection = ({
  bgText = "MISSION",
  mainText = `"To serve Australia’s multiculturalcommunities by creating experiences
that blend entertainment with cultural heritage connecting generations
through music and celebration."`,
  bgVariant = "big-text",
  textVariant = "body-4",
  textColor = "white2",
}) => {
  return (
    <Container className="mission-section" variant="primary">
      {/* Background Text */}
      <Typography variant={bgVariant} className="mission-bg-text">
        {bgText}
      </Typography>

      
      <Typography
        variant={textVariant}
        colorVariant={textColor}
        className="mission-main-text"
      >
        “{mainText}”
      </Typography>
    </Container>
  );
};

export default MissionSection;
