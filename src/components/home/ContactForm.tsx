"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [isHiSelected, setIsHiSelected] = useState(true);
  const [isQuoteSelected, setIsQuoteSelected] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    if (name === "hi" && checked === true) {
      setIsHiSelected(checked);
      if (checked) setIsQuoteSelected(false); // Uncheck "quote" if "hi" is selected
    } else if (name === "quote") {
      setIsQuoteSelected(true);
      if (checked) setIsHiSelected(false); // Uncheck "hi" if "quote" is selected
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex justify-between items-center bg-accent">
      <form className="w-full max-w-lg p-8 space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="hi"
              id="hi"
              checked={isHiSelected}
              onChange={handleChange}
              className="hidden peer"
            />
            <label
              htmlFor="hi"
              className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer relative"
            >
              {isHiSelected && (
                <span className="w-3 h-3 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all peer-checked:scale-100"></span>
              )}
            </label>
            <label
              htmlFor="hi"
              className="text-sm font-medium text-gray-700 ml-2"
            >
              Say Hi
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="quote"
              id="quote"
              checked={isQuoteSelected}
              onChange={handleChange}
              className="hidden peer"
            />
            <label
              htmlFor="quote"
              className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer relative"
            >
              {isQuoteSelected && (
                <span className="w-3 h-3 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all peer-checked:scale-100"></span>
              )}
            </label>
            <label
              htmlFor="quote"
              className="text-sm font-medium text-gray-700 ml-2"
            >
              Get A Quote
            </label>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="Name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="Name"
              type="text"
              placeholder="Enter your name"
              className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              name="Email"
              type="email"
              placeholder="Enter your email"
              className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="Message"
              placeholder="Your message"
              rows={4}
              className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <button className="w-full p-3 bg-secondary text-white rounded-lg hover:scale-105 transition-all">
            Send Message
          </button>
        </div>
      </form>
      <Image
        src="/assets/stars.svg"
        alt="Contact Us"
        width={350}
        height={350}
      />
    </div>
  );
}
