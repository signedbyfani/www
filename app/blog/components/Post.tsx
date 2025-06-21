import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import { formatDate } from "@/app/_utils/formatDate";
import type { Blog } from "contentlayer/generated";

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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <Section heading={formatDate(date)}>
              <span className="font-medium leading-tight text-pretty">{title}</span>
            </Section>
          </div>
        </div>
      </Link>
    </li>
  );
}
