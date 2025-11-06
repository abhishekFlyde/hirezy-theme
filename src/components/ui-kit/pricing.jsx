"use client";

import { Check } from "lucide-react";
import Typography from "./typography";
import { useState, useEffect } from "react";



export default function Pricing({
  planName,
  description,
  features = [],
  price,
  tag,
  iconSrc = "/images/pro-icon.svg",
  highlight = false,
  variant = "blue",
}) {

    const [headingVariant, setHeadingVariant] = useState("body-1");
  
    useEffect(() => {
      const handleResize = () => {
        setHeadingVariant(window.innerWidth <= 450 ? "h2" : "body-1");
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    
  return (
    <div className={`pricing-card ${variant} ${highlight ? "highlight" : ""}`}>
      {/* Icon and Tag */}
      <div className="pricing-header">
        <div className="pricing-icon">
          <img src={iconSrc} alt={`${planName} Icon`} />
        </div>
        {tag && (
          <div className="pricing-tag">
            <Typography variant="body-5">{tag}</Typography>
          </div>
        )}
      </div>

      {/* Plan name + Description */}
      <div className="pricing-title">
        <Typography variant={headingVariant} className="pricing-name">
          {planName}
        </Typography>
        <Typography variant="body-4" className="pricing-desc">
          {description}
        </Typography>
      </div>

      <div className="flex flex-col gap-[40px]">
        {/* Features */}
        <ul className="pricing-features">
          {features.map((item, index) => (
            <li key={index}>
              <span className="check-icon">
                <Check size={14} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="pricing-cost">
          <Typography variant="h2" className="price">
            ${price}
          </Typography>
          <Typography variant="body-4" className="per-month">
            /month
          </Typography>
          <Typography variant="body-4" className="billed">
            billed yearly
          </Typography>
        </div>
      </div>
      {/* Price & Button */}
      <div className="pricing-bottom">
        <button className="choose-btn">Choose Plan</button>
      </div>
    </div>
  );
}
