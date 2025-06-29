import { Metadata } from "next";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ImageSlider } from "@/app/components/ImageSlider";
import { SkillSlider } from "@/app/components/SkillSlider";
import Link from "@/app/components/Link";
import StackCards from "@/app/components/StackCards";

export const metadata: Metadata = {
  title: "About | Fanindra Maharana",
  description: "I'm Fanindra, an Interaction Design student passionate about creating thoughtful digital experiences. Learn more about my journey, skills, and interests.",
  openGraph: {
    title: "About | Fanindra Maharana",
    description: "I'm Fanindra, an Interaction Design student passionate about creating thoughtful digital experiences. Learn more about my journey, skills, and interests.",
    type: "website",
    url: "https://fanii.lol/about",
    images: [{
      url: "https://fanii.lol/og.png",
      alt: "About Fanindra Maharana"
    }],
  },
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-12 max-w-[2000px] mx-auto">
      {/* Header */}
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          About me
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">
            Hey, I&apos;m Fanindra Maharana, an Interaction Design student pursuing M. Des at JK Lakshmipat University. I&apos;m into designing smooth and thoughful digital experiences for poeple.
          </h3>
          <p>
            Funny how things work out, I did B. Tech in CSE (AI & ML), but design caught my interest during my second year of bachelors. I later wanted to pursue it full time. I still love to code, but design is where my heart is. Oh! they invented a term for this - <b className="text-accent">vibe-coding</b>.
          </p>
          <p>
            <s className="text-tertiary"> Outside of design, I&apos;m usually watching cricket, or watching movies or shows. I enjoy chatting about everything from maps, geo-politics, tech, AI, movies, cricket. Always up for a good conversation.</s> These days though, I&apos;m mostly just designing - work has kind of taken over everything else.
          </p>
          <p>
            You can also read <Link href="/blog/2025-so-far" underline>my story here</Link> if you&apos;d like to know more about me.</p>

          <h3 className="font-semibold text-lg">Cheers ✌🏼</h3>
        </div>
      </div>
      <div className="flex justify-center">
            <StackCards />
          </div>
      </div>



      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <div className="flex flex-col gap-4 sm:gap-8 sm:grid grid-cols-2">
          <div className="flex flex-col gap-2 p-4 border border-secondary rounded-lg bg-secondary">
            <p className="my-0 text-secondary text-sm">What I&apos;m up to</p>
            <p className="my-0 text-primary">Pursuing M. Des at JKLU, Jaipur and working on freelance design projects</p>
          </div>
          <div className="flex flex-col gap-2 p-4 border border-secondary rounded-lg bg-secondary">
            <p className="my-0 text-secondary text-sm">What I love</p>
            <p className="my-0 text-primary">Food, maps, architecture, tech, oh! did I mention food, movies, and food ig</p>
          </div>
          <div className="flex flex-col gap-2 p-4 border border-secondary rounded-lg bg-secondary">
            <p className="my-0 text-secondary text-sm">Currently obsessed with</p>
            <p className="my-0 text-primary">Getting 8 hrs of sleep and being productive</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ImageSlider />
        </div>
      </div>

      <div
        className="flex animate-in flex-col gap-4"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h3>Things I specialize in - </h3>
        <SkillSlider />
      </div>

      <div
        className="animate-in"
        style={{ "--index": 5 } as React.CSSProperties}
      >
        <a
          href="/Fanindra_Resume.pdf"
          target="_blank"
          className="flex flex-row gap-2 items-center px-4 py-3 bg-accent w-fit text-white font-semibold text-[1.125rem] rounded-lg hover:opacity-90 transition-all duration-300"
        >
          Download my resume
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
} 