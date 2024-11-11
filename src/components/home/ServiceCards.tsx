import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const services = [
  {
    img_src: "/assets/lens.svg",
    title: "Search engine",
    title2: "optimization",
  },
  {
    img_src: "/assets/click.svg",
    title: "Pay-per-click",
    title2: "advertising",
  },
  {
    img_src: "/assets/emoji.svg",
    title: "Social media",
    title2: "marketing",
  },
  { img_src: "/assets/messages.svg", title: "Email", title2: "Marketing" },
  { img_src: "/assets/navbars.svg", title: "Content", title2: "Creation" },
  {
    img_src: "/assets/statistics.svg",
    title: "Analytics and",
    title2: "Tracking",
  },
];

const cardStyles = [
  {
    bg: "bg-accent",
    text_bg: "bg-primary",
    button_bg: "bg-secondary",
    button_text: "text-primary",
  },
  {
    bg: "bg-primary",
    text_bg: "bg-accent",
    button_bg: "bg-secondary",
    button_text: "text-primary",
  },
  {
    bg: "bg-secondary",
    text_bg: "bg-accent",
    button_bg: "bg-accent",
    button_text: "text-black",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-10">
      {services.map(({ img_src, title, title2 }, index) => (
        <div
          className={`flex h-[360px] border-b-8 border border-secondary py-16 px-16 justify-between ${
            cardStyles[index % 3].bg
          }`}
          key={title}
          style={{
            borderRadius: "52px",
          }}
        >
          <div className="flex flex-col justify-between w-1/2">
            <div>
              <h3
                className={`text-4xl font-semibold rounded-xl px-2 py-1 w-fit ${
                  cardStyles[index % 3].text_bg
                }`}
              >
                {title}
              </h3>
              <h3
                className={`text-4xl font-semibold rounded-xl px-2 py-1 w-fit ${
                  cardStyles[index % 3].text_bg
                }`}
              >
                {title2}
              </h3>
            </div>
            <Link
              href="/request-a-quote"
              className="flex gap-3 items-center text-xl font-medium"
            >
              <GoArrowRight
                size={44}
                className={`-rotate-12 rounded-full p-1.5  ${
                  cardStyles[index % 3].button_bg
                } ${cardStyles[index % 3].button_text}`}
              />
              <span className={`${index % 3 === 2 && "text-white"}`}>
                Learn more
              </span>
            </Link>
          </div>
          <Image src={img_src} alt={title} width={240} height={240} />
        </div>
      ))}
    </div>
  );
}
