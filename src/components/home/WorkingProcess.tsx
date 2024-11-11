"use client";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";

const process = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    description:
      "After the consultation, we will conduct in-depth research to identify your target audience, competitors, and industry trends. Based on this research, we will develop a comprehensive digital marketing strategy that aligns with your business goals.",
  },
  {
    title: "Implementation",
    description:
      "Once the strategy is finalized, we will begin implementing the various marketing tactics outlined in the plan. This may include search engine optimization, pay-per-click advertising, social media marketing, email marketing, and more.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "Throughout the campaign, we will closely monitor the performance of each marketing channel and make adjustments as needed to ensure optimal results. This may involve tweaking ad copy, adjusting targeting parameters, or reallocating budget.",
  },
  {
    title: "Reporting and Communication",
    description:
      "At the end of the campaign, we will provide you with a detailed report outlining the results of our efforts. This will include key performance metrics, insights gained, and recommendations for future marketing initiatives.",
  },
  {
    title: "Continual Improvement",
    description:
      "Our work doesn't stop once the campaign is complete. We will continue to analyze data, test new strategies, and refine our approach to ensure ongoing success for your business.",
  },
];

export default function WorkingProcess() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col gap-8">
      {process.map(({ title, description }, index) => (
        <div
          className={`flex flex-col px-16 py-14 border border-b-8 border-secondary transition-all duration-500 ease-in-out ${
            activeIndex === index ? "shadow-lg" : ""
          }`}
          key={index}
          style={{
            borderRadius: "52px",
          }}
        >
          <div
            className="flex justify-between items-center cursor-pointer border-secondary"
            onClick={() => toggleSection(index)}
          >
            <div className="flex gap-8 items-center">
              <p className="text-6xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-3xl font-semibold">{title}</h3>
            </div>
            <BsPlus
              size={40}
              className={`outline rounded-full transition-transform duration-500 ease-in-out ${
                activeIndex === index ? "rotate-45" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index
                ? "max-h-[500px] opacity-100 mt-4 border-t border-secondary pt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-xl transition-opacity duration-500 ease-in-out">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
