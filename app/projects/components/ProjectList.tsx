import Image from "next/image";
import type { Project } from ".contentlayer/generated";

import Link from "@/app/components/Link";
import Halo from "@/app/components/Halo";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="animated-list flex flex-col gap-9">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="transition-opacity"
        >
          <Link href={`/projects/${project.slug}`} className="space-y-4">
            <div className="aspect-[3/2] overflow-hidden rounded-md bg-secondary">
              {project.image ? (
                <Halo strength={10}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                </Halo>
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
            <div className="space-y-1">
              <p className="font-medium leading-tight">{project.title}</p>
              <p className="text-secondary">{project.summary}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
