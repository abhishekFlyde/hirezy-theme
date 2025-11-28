"use client";

import { useState, useEffect } from "react";
import Typography from "./typography";

export const TextInfoCard = ({
  heading = "",
  description = "",

}) => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const descriptionVariant = isMobile ? "body-1" : "body-3";


  return (
    <div className="textInfoCardContainer">
      <div className="textInfoCard flex flex-col w-full">
        <Typography variant="h3">{heading}</Typography>

        <Typography variant={descriptionVariant}
         color="gray200">
          {description}
        </Typography>
      </div>
    </div>
  );
};
