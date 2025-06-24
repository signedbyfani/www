import Image from "next/image";
import type { Project } from "contentlayer/generated";
import Link from "@/app/components/Link";
import Halo from "@/app/components/Halo";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="animated-list flex flex-col gap-16 mt-8">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="transition-opacity border-b border-primary pb-8"
        >
          <Link href={`/projects/${project.slug}`} className="flex flex-col gap-4">

            <div className="flex flex-col gap-2 w-full">
              <p className="font-semibold text-xl text-secondary">{project.title} - <span className="text-primary tertiary">{project.bigTitle}</span></p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              {project.category && (
                <div className="flex flex-wrap gap-2">
                  {project.category.split(',').map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-secondary border border-secondary text-secondary whitespace-nowrap"
                    >
                      {category.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="aspect-[3/2] overflow-hidden rounded-md border border-secondary bg-secondary">
              {project.image ? (
                <Halo strength={10}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                </Halo>
              ) : project.coverVideo ? (
                <video
                  src={project.coverVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                </div>
              )}
            </div>
          </Link>

        </li>
      ))}
    </ul>
  );
}
