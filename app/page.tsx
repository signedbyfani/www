import { allBlogs } from "contentlayer/generated";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from "contentlayer/generated";
import Link from "@/app/components/Link";
import PostList from "@/app/blog/components/PostList";
import ProjectList from "@/app/projects/components/ProjectList";
import BreathingText from "@/app/components/breathing-text";
import { ButtonGooey } from "@/app/components/GooeyButton";

export default function Home() {
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
          <ButtonGooey />
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

          <Link
            href="/blog"
            className="flex select-none w-fit text-sm gap-2 items-center rounded-md bg-tertiary px-3 py-2 no-underline hover:bg-accent hover:text-white"
          >
            Read all
            <ChevronRightIcon className="h-4 w-4" />
          </Link>

      </div>
      <div id="about"
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="font-semibold text-2xl text-primary">About me</h2>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg ">Hey, I&apos;m Fanindra Maharana, an Interaction Design student pursuing M. Des at JK Lakshmipat University. I&apos;m into designing smooth and thoughful digital experiences for poeple.</h3>
          <p>Funny how things work out, I did B. Tech in CSE (AI & ML), but design caught my interest during my second year of bachelors. I later wanted to pursue it full time.</p>
          <p>Outside of design, I&apos;m usually watching cricket, or watching movies or shows. I enjoy chatting about everything from maps, geo-politics, tech, AI, movies, cricket. Always up for a good conversation.</p>
          <h3 className="font-semibold text-lg ">Cheers!</h3>
        </div>
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
        <div className="flex flex-col mt-2">
          <h3>Things I specialize in - </h3>
          <div className="flex flex-row flex-wrap mt-4 gap-4 select-none cursor-pointer">
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
              UX Design
            </div>
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
              UI Design
            </div>
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
              UX Research
            </div>
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
            Prototyping
            </div>
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
              Design Systems
            </div>
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
              Wireframing
            </div>
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
              User Testing
            </div>
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
              Framer
            </div>
            <div
              className="flex w-fit items-center justify-center bg-secondary border px-3 py-2 rounded-md text-sm transition-transform duration-300 ease-out hover:scale-95">
              Webflow
            </div>
          </div>
        </div>
        <a href="Fanindra_Resume.pdf" target="_blank" className="flex flex-row gap-2 items-center px-4 py-3 bg-accent w-fit text-white font-semibold text-[1.125rem] rounded-lg hover:opacity-90 transition-all duration-300">
          Download my resume
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </a>


      </div>
    </div>
  );
}
