"use client";

import { useState, useEffect } from "react";
import Typography from "./typography";

export const BlogsTextContent = ({
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

    const headingVariant = isMobile ? "h2" : "body-1";
    const descriptionVariant = isMobile ? "body-1" : "body-4";


  return (
    <div className="blogsCardHead flex flex-col w-full">


      <Typography variant={headingVariant}>{heading}</Typography>

      <Typography variant={descriptionVariant} className="color-black-400">
        {description}
      </Typography>
    </div>
  );
};
