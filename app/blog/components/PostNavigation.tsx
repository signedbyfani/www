"use client";

import { usePathname } from "next/navigation";
import Link from "@/app/components/Link";
import type { Blog } from "contentlayer/generated";

interface PostNavigationProps {
  posts: Array<Blog>;
}

export default function PostNavigation({ posts }: PostNavigationProps) {
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const currentSlug = usePathname().split("/").pop();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
  const previous = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

  if (!previous && !next) {
    return null;
  }

  return (
    <div className="mt-16 flex w-full justify-between border-t border-secondary pt-8">
      {previous && (
        <Link href={`/blog/${previous.slug}`} className="flex w-full flex-col gap-1 text-left">
          <span className="text-secondary">Previous</span>
          <span className="text-primary">{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link href={`/blog/${next.slug}`} className="flex w-full flex-col gap-1 text-right">
          <span className="text-secondary">Next</span>
          <span className="text-primary">{next.title}</span>
        </Link>
      )}
    </div>
  );
} 