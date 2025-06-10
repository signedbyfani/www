"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "@/app/components/Link";

interface MediaItem {
  src: string;
  type: "image" | "video";
  alt: string;
  createdAt: number;
  modifiedAt: number;
}

export default function VisualFeed() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    // Fetch all media files from the public/visual-feed directory
    const fetchMedia = async () => {
      try {
        const response = await fetch("/api/visual-feed");
        const data = await response.json();
        // The API now returns pre-sorted data, but we could sort here if needed
        // data.sort((a: MediaItem, b: MediaItem) => b.modifiedAt - a.modifiedAt);
        setMediaItems(data);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="flex flex-col gap-16 md:gap-12 max-w-[2000px] mx-auto px-4">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in mb-2 text-3xl font-bold tracking-tight text-primary">
            Visual Feed
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Here are some of my design explorations ranging from Graphic Design, Framer Websites, Course work iterations, and more.
          </p>
        </div>
      </div>

      <div 
        className="mt-4 columns-1 max-w-none md:-ml-48 md:w-[calc(100%+384px)] gap-6 animate-in xl:columns-3"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {mediaItems.map((item, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                className="rounded-lg object-cover w-full"
                style={{ height: "auto" }}
              />
            ) : (
              <video
                src={item.src}
                className="rounded-lg w-full"
                autoPlay
                playsInline
                muted
                loop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 