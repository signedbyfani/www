import { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import PostList from "@/app/blog/components/PostList";

export const metadata: Metadata = {
  title: "Blog | Fanindra Maharana",
  description:
    "I write about design, interaction design, and occasionally life updates!",
  openGraph: {
    title: "Blog | Fanindra Maharana",
    description:
      "I write about design, interaction design, and occasionally life updates!",
    type: "website",
    url: "https://fanii.lol/blog/Blog",
    images: [{ url: "https://fanii.lol/og.png", alt: "Blog" }],
  },
};

export default function BlogPage() {
  const blogs = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in mb-2 text-3xl font-bold tracking-tight">My Thoughts, Stories and Opinions</h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {blogs.length} posts so far. Stay tuned for more!
          </p>
        </div>
      </div>
      <div
        className="animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <PostList posts={blogs} />
      </div>
    </div>
  );
}