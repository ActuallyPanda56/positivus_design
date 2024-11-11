"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import "../../styles/swiper.css";

const testimonials = [
  {
    name: "John Smith",
    title: "CEO",
    company: "XYZ Company",
    testimonial:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "Jane Doe",
    title: "Marketing Director",
    company: "ABC Corp",
    testimonial:
      "Positivus has been a game-changer for our marketing strategy. Their innovative approach and dedication to our success have resulted in a substantial boost in our brand awareness and customer engagement. We couldn't be happier with the results.",
  },
  {
    name: "Michael Johnson",
    title: "Product Manager",
    company: "Tech Solutions",
    testimonial:
      "The team at Positivus is exceptional. Their expertise in digital marketing has helped us launch several successful campaigns, driving significant growth in our user base. They are a pleasure to work with and always go above and beyond to meet our needs.",
  },
  {
    name: "Emily Davis",
    title: "Founder",
    company: "Startup Inc.",
    testimonial:
      "Working with Positivus has been a fantastic experience. Their insights and strategies have been instrumental in helping us establish a strong online presence. Their commitment to our success is evident in everything they do. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col bg-secondary text-accent py-16 md:py-24 lg:py-16 rounded-3xl overflow-hidden">
      <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1152px] 2xl:max-w-[1408px] mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          className="w-full"
          style={{ maxWidth: "100%" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="text-center p-4 md:p-6 lg:p-8 border border-primary rounded-2xl h-64 md:h-72 lg:h-80 flex items-center justify-center">
                  <p className="text-sm md:text-lg lg:text-xl italic">
                    {testimonial.testimonial}
                  </p>
                </div>
                <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col items-center">
                  <span className="text-primary text-base md:text-lg lg:text-xl">
                    {testimonial.name}
                  </span>
                  <span className="text-xs md:text-sm lg:text-base text-gray-500">
                    {testimonial.title} at {testimonial.company}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
