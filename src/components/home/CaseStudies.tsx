import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const caseStudies = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export default function CaseStudies() {
  return (
    <div
      className="flex bg-secondary py-16 px-6"
      style={{
        borderRadius: "52px",
      }}
    >
      {caseStudies.map((study, index) => (
        <div className={`flex flex-col w-1/3`} key={index}>
          <div
            className={`flex flex-col gap-8 px-16 py-4 ${
              index < caseStudies.length - 1 ? "border-r border-accent" : ""
            }`}
          >
            <p className="text-accent text-xl">{study}</p>
            <Link
              href="/request-a-quote"
              className="flex gap-3 items-center text-xl text-primary"
            >
              <span>Learn more</span>
              <GoArrowRight size={32} className="-rotate-12" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
