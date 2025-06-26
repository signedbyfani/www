import { allBlogs } from "contentlayer/generated";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from "contentlayer/generated";
import Link from "@/app/components/Link";
import PostList from "@/app/blog/components/PostList";
import ProjectList from "@/app/projects/components/ProjectList";
import BreathingText from "@/app/components/breathing-text";
import { ButtonGooey } from "@/app/components/GooeyButton";
import CraftImage from "@/app/components/CraftImage";
import CraftVideo from "@/app/components/CraftVideo";

export default function Home() {
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((_, i) => i < 3);

  const projects = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">

      <section className="flex flex-col gap-8">
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
      </section>

      <section
        className="flex animate-in flex-col gap-4"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <h2 className="text-lg font-semibold tracking-tight uppercase text-tertiary">Featured Projects</h2>
        <ProjectList projects={projects} />
      </section>

      <section
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

      </section>

      <section id="craft"
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 5 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">More Projects</h2>
          <p className="text-secondary">Here are some of my other projects that I&apos;ve worked on, ranging from Multidisciplinary projects, Framer Websites, Course work iterations, and more.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8 animate-in" style={{ "--index": 6 } as React.CSSProperties}>
          <CraftImage
              imageSrc="/craft/crutch.webp"
              name="Redesigned crutch tips for better functionality"
              href="https://www.behance.net/gallery/222082189/Redesigning-Crutch-tips-for-better-functionality"
            />

            <CraftImage
              imageSrc="/craft/Design Sphere.png"
              name="Framer Portfolio Template"
              href="https://www.framer.com/marketplace/templates/designsphere/"
            />
            <CraftImage
              imageSrc="/craft/thathera.jpeg"
              name="Documentation of Thathera craft of Jaipur"
              href="https://heyzine.com/flip-book/39541d10be.html"
            />
            <CraftImage
              imageSrc="/craft/jdw.png"
              name="Jaipur Design Week 2025 Official Website"
              href="https://scary-answers-416366.framer.app/"
            />
            <CraftImage
              imageSrc="/craft/Learnuiux.png"
              name="LearnUIUX Website redesign"
              href="https://learnuiux-redesign.framer.website/"
            />
          </div>
          <div className="space-y-8 animate-in" style={{ "--index": 7 } as React.CSSProperties}>
          <CraftImage
              imageSrc="/craft/Seating.jpeg"
              name="Designed a seating space for IOD at JKLU"
            />

            <CraftImage
              imageSrc="/craft/mental-health.png"
              name="Helping people with their Mental Health"
              href="https://www.behance.net/gallery/222100555/Mental-Health-Design-Process-Case-Study"
            />
            <CraftImage
              imageSrc="/craft/Cred.gif"
              name="Cred style button animation"
            />
            <CraftImage
              imageSrc="/craft/WhatsApp.png"
              name="WhatsApp Concept: Access previous chats on groups"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
