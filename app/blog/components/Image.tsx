import Image from "next/image";
import clsx from "clsx";

type CustomImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  priority?: boolean;
  reset?: boolean;
  contained?: boolean;
  size?: "sm" | "base" | "lg" | "xl";
};

export default function CustomImage({
  src,
  width,
  height,
  alt,
  caption,
  priority,
  reset,
  contained,
  size = "base",
}: CustomImageProps) {
  return (
    <div className={clsx(reset ? "" : "not-prose my-8 w-full")}>
      <figure className={clsx("m-0 flex flex-col gap-2")}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
          className={clsx(
            "h-auto w-full",
            contained &&
              "overflow-hidden rounded-md border border-secondary bg-secondary md:rounded-lg",
            size === "sm" && "max-w-[700px] mx-auto",
            size === "base" && "max-w-none",
            size === "lg" && "max-w-none md:-ml-20 md:w-[calc(100%+160px)]",
            size === "xl" && "max-w-none md:-ml-48 md:w-[calc(100%+384px)]"
          )}
        />
        {caption && <figcaption className="text-center text-sm text-secondary">{caption}</figcaption>}
      </figure>
    </div>
  );
}
