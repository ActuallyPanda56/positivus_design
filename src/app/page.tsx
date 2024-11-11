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
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col w-full md:w-2/5 gap-8">
            <h2 className="text-4xl md:text-5xl 2xl:text-6xl leading-[60px] md:leading-[65px] 2xl:leading-[85px] font-semibold">
              Navigating the digital landscape for success
            </h2>
            <p className="text-lg md:text-2xl tracking-wide">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Link
              href="/request-a-quote"
              className="py-3 px-6 md:py-5 md:px-8 text-white text-lg bg-secondary rounded-xl w-fit flex items-center justify-center hover:scale-105 transition-all"
            >
              Book a consultation
            </Link>
          </div>
          <Image
            src="/assets/megaphone.svg"
            alt="Hero"
            width={400}
            height={400}
            className="w-full md:w-[500px]"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 my-12">
          {logos.map(({ src, alt }) => (
            <Image
              src={src}
              alt={alt}
              width={150}
              height={150}
              key={src}
              className="w-24 h-auto grayscale"
            />
          ))}
        </div>

        {sections.slice(0, 1).map(({ title, description, component }) => (
          <div className="flex flex-col gap-24 px-4 md:px-0" key={title}>
            <div className="flex flex-col md:flex-row gap-10 w-full md:w-2/3">
              <h2 className="px-4 py-2 text-3xl md:text-5xl bg-primary rounded-lg font-semibold text-center md:text-left flex items-center justify-center">
                {title}
              </h2>
              <p className="text-lg md:text-xl font-medium text-center md:text-left">
                {description}
              </p>
            </div>
            {component}
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between bg-accent py-16 md:py-20 px-8 md:px-10 relative rounded-2xl">
          <div className="flex flex-col w-full md:w-2/5 gap-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
              Let&apos;s make things happen
            </h2>
            <p className="text-lg md:text-xl tracking-wide text-center md:text-left">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Link
              href="/request-a-quote"
              className="py-4 px-6 md:py-5 md:px-8 text-white text-lg bg-secondary rounded-xl w-fit flex items-center justify-center hover:scale-105 transition-all"
            >
              Get your free proposal
            </Link>
          </div>
          <Image
            src="/assets/emoji_big.svg"
            alt="Hero"
            width={500}
            height={500}
            className="absolute right-0 -top-12 md:-top-8"
          />
        </div>

        {sections.slice(1).map(({ title, description, component }) => (
          <div className="flex flex-col gap-24 px-4 md:px-0" key={title}>
            <div className="flex flex-col md:flex-row gap-10 w-full md:w-2/3">
              <h2 className="px-4 py-2 text-3xl md:text-5xl bg-primary rounded-lg font-semibold text-center md:text-left">
                {title}
              </h2>
              <p className="text-lg md:text-xl font-medium text-center md:text-left">
                {description}
              </p>
            </div>
            {component}
          </div>
        ))}
      </main>
    </div>
  );
}
