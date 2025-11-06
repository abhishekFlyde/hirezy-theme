"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Typography from "./typography";

export default function FAQ({ faqs = [], className = "", ...props }) {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item as active by default

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`faq-container ${className}`} {...props}>
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={`faq-item ${isActive ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <Typography variant="h5">{faq.question}</Typography>
              <span className={`faq-icon ${isActive ? "rotate" : ""}`}>
                <ChevronDown size={20} />
              </span>
            </div>

            <div className={`faq-answer-wrapper ${isActive ? "open" : ""}`}>
              <Typography variant="body-4" className="faq-answer">
                {faq.answer}
              </Typography>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
