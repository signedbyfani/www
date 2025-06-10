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
          <div className="flex max-w-[700px] mx-auto w-full flex-col gap-2 text-pretty">
            <h1 className="animate-in text-3xl font-bold leading-tight tracking-tight text-primary">
              {blog.title}
            </h1>
            <p className="animate-in text-secondary" style={{ "--index": 1 } as React.CSSProperties}>
              <time dateTime={blog.date}>{formatDate(blog.date)}</time>
              {blog.updatedAt ? ` (Updated ${formatDate(blog.updatedAt)})` : ""}
            </p>
          </div>
        </div>
        {blog.image && (
          <>
            <div className="h-8" />
            <div className="animate-in" style={{ "--index": 2 } as React.CSSProperties}>
              
              <Image
                src={blog.image}
                alt={`${blog.title} blog image`}
                width={700}
                height={350}
                className="w-full max-w-none md:rounded-lg"
              />
            </div>
          </>
        )}
        <div className="h-16" />
        <div className="prose prose-neutral text-pretty mx-auto max-w-[700px] animate-in" style={{ "--index": 3 } as React.CSSProperties}>
          <Mdx code={blog.body.code} />
        </div>
        <div className="animate-in" style={{ "--index": 4 } as React.CSSProperties}>
          <PostNavigation posts={allBlogs} />
        </div>
      </article>
    </div>
  );
}
