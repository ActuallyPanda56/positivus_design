import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const routes = [
  { href: "/about-us", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col py-10 px-16 bg-secondary rounded-t-2xl text-accent w-full mt-10 gap-10">
      <div className="flex justify-between items-center">
        <Image
          src="/assets/logo-white.svg"
          alt="Logo"
          width={200}
          height={200}
        />
        <ul className="flex gap-8 items-center">
          {routes.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`underline underline-offset-2`}>
                {label || href}{" "}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          <Link
            href={"/"}
            className="text-accent hover:text-primary transition-all"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href={"/"}
            className="text-accent hover:text-primary transition-all"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href={"/"}
            className="text-accent hover:text-primary transition-all"
          >
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-semibold bg-primary text-secondary w-fit px-1 rounded-lg">
            Contact Us
          </h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <div>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>
        <form className="bg-[#292A32] rounded-xl flex py-12 w-3/5 px-12 justify-between gap-5">
          <input
            type="email"
            placeholder="Email"
            className=" text-accent w-full bg-transparent outline-none border border-white rounded-lg px-4"
          />
          <button
            type="submit"
            className="bg-primary text-secondary px-4 rounded-lg w-full"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="w-full border"></div>

      <div className="flex gap-3">
        <p>© 2023 Positivus. All rights reserved.</p>
        <Link
          href={"/"}
          className="underline underline-offset-2 text-accent hover:text-primary transition-all"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
