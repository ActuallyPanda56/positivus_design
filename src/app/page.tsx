import CaseStudies from "@/components/home/CaseStudies";
import ContactForm from "@/components/home/ContactForm";
import ServiceCards from "@/components/home/ServiceCards";
import TeamCards from "@/components/home/TeamCards";
import Testimonials from "@/components/home/Testimonials";
import WorkingProcess from "@/components/home/WorkingProcess";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/assets/logos/amazon.svg", alt: "Amazon Logo" },
  { src: "/assets/logos/dribble.svg", alt: "dribble Logo" },
  { src: "/assets/logos/hubspot.svg", alt: "hubspot Logo" },
  { src: "/assets/logos/notion.svg", alt: "notion Logo" },
  { src: "/assets/logos/netflix.svg", alt: "netflix Logo" },
  { src: "/assets/logos/zoom.svg", alt: "zoom Logo" },
];

const sections = [
  {
    title: "Services",
    description:
      "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
    component: <ServiceCards />,
  },
  {
    title: "Case Studies",
    description:
      "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
    component: <CaseStudies />,
  },
  {
    title: "Our Working Process",
    description: "Step-by-Step Guide to Achieving Your Business Goals",
    component: <WorkingProcess />,
  },
  {
    title: "Team",
    description:
      "Meet the skilled and experienced team behind our successful digital marketing strategies",
    component: <TeamCards />,
  },
  {
    title: "Testimonials",
    description:
      "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
    component: <Testimonials />,
  },
  {
    title: "Contact Us",
    description: "Connect with Us: Let's Discuss Your Digital Marketing Needs",
    component: <ContactForm />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main className="flex flex-col gap-32">
        <div className="flex justify-between">
          <div className="flex flex-col w-2/5 gap-8">
            <h2 className="text-6xl leading-[85px] font-semibold">
              Navigating the digital landscape for success
            </h2>
            <p className="text-2xl  tracking-wide">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Link
              href="/request-a-quote"
              className="py-5 px-8 text-white text-lg bg-secondary rounded-xl w-fit flex items-center justify-center hover:scale-105 transition-all"
            >
              Book a consultation
            </Link>
          </div>
          <Image
            src="/assets/megaphone.svg"
            alt="Hero"
            width={500}
            height={500}
          />
        </div>
        <div className="flex justify-between">
          {logos.map(({ src, alt }) => (
            <Image
              src={src}
              alt={alt}
              width={200}
              height={200}
              key={src}
              className="w-32 h-auto grayscale"
            />
          ))}
        </div>
        {sections.slice(0, 1).map(({ title, description, component }) => (
          <div className="flex flex-col gap-24" key={title}>
            <div className="flex gap-10 w-2/3">
              <h2 className="px-2 py-1 text-5xl bg-primary rounded-lg font-semibold flex items-center justify-center text-nowrap">
                {title}
              </h2>
              <p className="text-xl font-medium">{description}</p>
            </div>
            {component}
          </div>
        ))}
        <div
          className="flex justify-between bg-accent py-20 px-10 relative"
          style={{
            borderRadius: "52px",
          }}
        >
          <div className="flex flex-col w-2/5 gap-8">
            <h2 className="text-3xl font-semibold">
              Let&apos;s make things happen
            </h2>
            <p className="text-xl tracking-wide">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Link
              href="/request-a-quote"
              className="py-5 px-8 text-white text-lg bg-secondary rounded-xl w-fit flex items-center justify-center hover:scale-105 transition-all"
            >
              Get your free porposal
            </Link>
          </div>
          <Image
            src="/assets/emoji_big.svg"
            alt="Hero"
            width={600}
            height={600}
            className="absolute right-0 -top-8"
          />
        </div>
        {sections.slice(1).map(({ title, description, component }) => (
          <div className="flex flex-col gap-24" key={title}>
            <div className="flex gap-10 w-2/3">
              <h2 className="px-2 py-1 text-5xl bg-primary rounded-lg font-semibold flex items-center justify-center text-nowrap">
                {title}
              </h2>
              <p className="text-xl font-medium">{description}</p>
            </div>
            {component}
          </div>
        ))}
      </main>
    </div>
  );
}
