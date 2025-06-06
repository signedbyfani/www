import { allProjects } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CustomImage from "@/app/blog/components/Image";
import Avatar from "@/app/components/Avatar";
import Link from "@/app/components/Link";
import Mdx from "@/app/blog/components/MdxWrapper";
import ProjectNavigation from "@/app/projects/components/ProjectNavigation";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  const {
    title,
    date: publishedTime,
    image,
    slug,
  } = project;

  const ogImage = image
    ? `https://fanii.lol${image}`
    : `https://fanii.lol/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL("https://fanii.lol"),
    title: `${title} | Fanindra Maharana`,
    description: project.summary,
    openGraph: {
      title: `${title} | Fanindra Maharana`,
      description: project.summary,
      type: "article",
      publishedTime,
      url: `https://fanii.lol/projects/${slug}`,
      images: [{ url: ogImage, alt: title }],
    },
  };

  return metadata;
}

export default function Project({ params }: { params: any }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex flex-col gap-4">
          <div className="flex max-w-xl flex-col gap-4 text-pretty">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {project.title}
            </h1>
            <p className="text-secondary">{project.summary}</p>
          </div>
          {project.image && (
            <CustomImage
              src={project.image}
              alt={project.title}
              width={1600}
              height={900}
              contained
              size="lg"
            />
          )}
        </div>
        <div className="h-8" />
        <div className="project prose prose-neutral">
          <Mdx code={project.body.code} />
        </div>
        <ProjectNavigation projects={allProjects} />
      </article>
    </div>
  );
}
