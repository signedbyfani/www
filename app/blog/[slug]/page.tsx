import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allBlogs } from ".contentlayer/generated";

import Mdx from "@/app/blog/components/MdxWrapper";
import PostNavigation from "@/app/blog/components/PostNavigation";
import { formatDate } from "@/app/_utils/formatDate";

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const {
    title,
    date: publishedTime,
    image,
    slug,
  } = blog;

  const ogImage = image
    ? `https://fanii.lol${image}`
    : `https://fanii.lol/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL("https://fanii.lol"),
    title: `${title} | Fanindra Maharana`,
    description: title,
    openGraph: {
      title: `${title} | Fanindra Maharana`,
      description: title,
      type: "article",
      publishedTime,
      url: `https://fanii.lol/blog/${slug}`,
      images: [{ url: ogImage, alt: title }],
    },
  };

  return metadata;
}

export default async function Blog({ params }: { params: any }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex flex-col gap-8">
          <div className="flex max-w-xl flex-col gap-4 text-pretty">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {blog.title}
            </h1>
            <p className="text-secondary">
              <time dateTime={blog.date}>{formatDate(blog.date)}</time>
              {blog.updatedAt ? ` (Updated ${formatDate(blog.updatedAt)})` : ""}
            </p>
          </div>
        </div>
        {blog.image && (
          <>
            <div className="h-8" />
            <Image
              src={blog.image}
              alt={`${blog.title} blog image`}
              width={700}
              height={350}
              className="-ml-6 w-[calc(100%+48px)] max-w-none md:rounded-lg lg:-ml-20 lg:w-[calc(100%+160px)]"
              priority
            />
          </>
        )}
        <div className="h-16" />
        <div className="prose prose-neutral text-pretty">
          <Mdx code={blog.body.code} />
        </div>
        <PostNavigation posts={allBlogs} />
      </article>
    </div>
  );
}
