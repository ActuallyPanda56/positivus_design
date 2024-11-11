import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";

const team = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    testimonial:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "/assets/Team/johnSmith.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    testimonial:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "/assets/Team/janeDoe.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    testimonial:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "/assets/Team/michaelBrown.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    testimonial:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "/assets/Team/emilyJohnson.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    testimonial:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: "/assets/Team/brianWilliams.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    testimonial:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: "/assets/Team/sarahKim.png",
  },
];

export default function TeamCards() {
  return (
    <div className="flex flex-col items-end">
      <div className="grid grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="py-10 px-12 border border-b-8 border-secondary"
            style={{
              borderRadius: "52px",
            }}
          >
            <div className="flex items-end gap-4 relative border-b border-secondary pb-8">
              <Image
                src={member.image}
                alt={member.name}
                className="w-28 h-28 "
                width={128}
                height={128}
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
                <p className="text-gray-500">{member.role}</p>
              </div>
              <Link
                href="/team"
                className="absolute top-0 right-0 text-2xl rounded-full text-primary bg-secondary p-2"
              >
                <FaLinkedinIn className="" />
              </Link>
            </div>
            <p className="text-xl tracking-wide font-medium mt-4">
              {member.testimonial}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/team"
        className="py-5 px-20 text-white text-lg bg-secondary rounded-xl w-fit flex items-center justify-center hover:scale-105 transition-all mt-6"
      >
        See all team
      </Link>
    </div>
  );
}
