import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import { formatDate } from "@/app/_utils/formatDate";
import type { Blog } from ".contentlayer/generated";

type PostProps = {
  post: Blog;
  mousePosition?: {
    x: number;
    y: number;
  };
};

export default function Post({ post, mousePosition }: PostProps) {
  const { date, slug, title, image } = post;
  const imageHeight = 200;
  const imageWidth = 300;
  const imageOffset = 24;

  return (
    <li className="group py-3 transition-opacity first:pt-0 last:pb-0">
      <Link href={`/blog/${slug}`}>
        <div className="transition-opacity">
          {image && mousePosition && (
            <motion.div
              animate={{
                top: mousePosition.y - imageHeight - imageOffset,
                left: mousePosition.x - imageWidth / 2,
              }}
              initial={false}
              transition={{ ease: "easeOut" }}
              style={{ width: imageWidth, height: imageHeight }}
              className="pointer-events-none absolute z-10 hidden overflow-hidden rounded bg-tertiary shadow-sm sm:group-hover:block"
            >
              <Image
                src={image}
                alt={title}
                width={imageWidth}
                height={imageHeight}
              />
            </motion.div>
          )}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Section heading={formatDate(date)}>
              <span className="font-medium leading-tight text-pretty">{title}</span>
            </Section>
            <div className="relative w-full aspect-[3/2] md:hidden rounded-md bg-secondary shadow-sm overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
