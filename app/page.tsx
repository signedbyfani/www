import { allBlogs } from "contentlayer/generated";
import { ArrowUpRightIcon, ArrowTurnDownRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from "contentlayer/generated";
import { Magnetic } from "@/app/components/Magnetic";
import Link from "@/app/components/Link";
import PostList from "@/app/blog/components/PostList";
import ProjectList from "@/app/projects/components/ProjectList";
import SkillsSlider from "@/app/components/SkillsSlider";
import ImageSlider from "@/app/components/ImageSlider";
import BreathingText from "@/app/components/breathing-text";

export default function Home() {
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // 3 most recent
    .filter((_, i) => i < 3);

  const projects = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4 align-center">

          <h1 className="animate-in sm:text-center text-4xl sm:text-5xl font-bold tracking-tighter text-primary">
            Hello. I&apos;m Fanindra, <br /> an           <BreathingText
              label="Interaction"
              staggerDuration={0.1}
              fromFontVariationSettings="'wght' 300, 'slnt' 0"
              toFontVariationSettings="'wght' 900, 'slnt' 0" className="p-1 text-accent rounded-md bg-accent/10"
            /> Designer
          </h1>
          <p
            className="sm:text-center text-lg sm:text-2xl font-semibold animate-in text-primary tracking-tight"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Designing for people - fast & steady
          </p>
        </div>
        <div
          className="flex animate-in gap-3 text-sm justify-center"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Magnetic>
            <Link
              className="flex select-none w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
              href="mailto:imfanindra@gmail.com">
              Contact
              <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="https://www.linkedin.com/in/fanindra-m/"
              className="flex select-none w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary">
              LinkedIn
              <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="https://www.behance.net/imfanindra"
              className="flex select-none w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary">
              Behance
              <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
            </Link>
          </Magnetic>
        </div>
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="text-lg font-semibold tracking-tight uppercase text-tertiary">Recent Projects</h2>
        <ProjectList projects={projects} />
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">Latest Blog Posts</h2>
        </div>
        <PostList posts={blogs} />

        <Magnetic>
          <Link
            href="/blog"
            className="flex select-none w-fit text-sm gap-2 items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Read all
            <ArrowTurnDownRightIcon className="h-4 w-4 text-secondary" />
          </Link></Magnetic>

      </div>
      <div id="about"
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="font-semibold text-2xl text-primary">About me</h2>
        <div className="flex flex-col">
        <video
      src="/about.webm"
      autoPlay
      loop
      muted
      playsInline
      className="rounded-lg w-full mx-auto my-4"
    >
      Your browser does not support the video tag.
    </video>
        </div>
        <div className="flex flex-col mt-2">
          <h3 className="text-secondary text-sm">Things I specialize in - </h3>
          <SkillsSlider /></div>


        <div className="flex flex-col gap-4 sm:gap-8 sm:grid grid-cols-2">
          <div className="flex flex-col gap-2 p-4 border border-secondary rounded-lg bg-secondary">
            <p className="my-0 text-secondary text-sm">What I&apos;m up to</p>
            <p className="my-0 text-primary">Pursuing M. Des at JKLU, Jaipur and working on freelance design projects</p>
          </div>
          <div className="flex flex-col gap-2 p-4 border border-secondary rounded-lg bg-secondary">
            <p className="my-0 text-secondary text-sm">What I love</p>
            <p className="my-0 text-primary">Food, maps, tech, oh! did I mention food, movies, and food ig</p>
          </div>
          <div className="flex flex-col gap-2 p-4 border border-secondary rounded-lg bg-secondary">
            <p className="my-0 text-secondary text-sm">Currently obsessed with</p>
            <p className="my-0 text-primary">The Last of Us S02 & Phineas and Ferb S05</p>
          </div>
        </div>
        <ImageSlider />


        <a href="Fanindra_Resume.pdf" target="_blank" className="flex flex-row gap-2 items-center px-3 py-2 bg-black w-fit text-white font-semibold text-md rounded-md border border-black bg-[linear-gradient(180deg,_#2D2D2D_1.06%,_#000_101.06%)] shadow-[142px_97px_48px_rgba(0,0,0,0),91px_62px_44px_rgba(0,0,0,0.01),51px_35px_37px_rgba(0,0,0,0.05),23px_16px_27px_rgba(0,0,0,0.09),6px_4px_15px_rgba(0,0,0,0.10)] hover:scale-95 transition-all duration-300">
          Download my resume
          <ArrowUpRightIcon className="h-4 w-4 text-white" />
        </a>


      </div>
    </div>
  );
}
