"use client";

import { usePathname } from "next/navigation";
import type { Project } from ".contentlayer/generated";
import Link from "@/app/components/Link";

type ProjectNavigationProps = {
  projects: Project[];
};

export default function ProjectNavigation({ projects }: ProjectNavigationProps) {
  projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const currentSlug = usePathname().split("/").pop();
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  const previous = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const next = currentIndex > 0 ? projects[currentIndex - 1] : null;

  if (!previous && !next) {
    return null;
  }

  return (
    <div className="mt-16 flex w-full justify-between border-t border-secondary pt-8">
      {previous && (
        <Link href={`/projects/${previous.slug}`} className="flex w-full flex-col gap-1 text-left">
          <span className="text-secondary">Previous</span>
          <span className="text-primary">{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link href={`/projects/${next.slug}`} className="flex w-full flex-col gap-1 text-right">
          <span className="text-secondary">Next</span>
          <span className="text-primary">{next.title}</span>
        </Link>
      )}
    </div>
  );
} 