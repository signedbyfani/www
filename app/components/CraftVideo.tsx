import Link from "next/link";
import { ArrowUpRight } from "react-feather";

interface CraftVideoProps {
  videoSrc: string;
  name: string;
  href?: string;
}

export default function CraftVideo({ videoSrc, name, href }: CraftVideoProps) {
  const content = (
    <>
      <div className="w-full mb-2">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          draggable="false"
          className="w-full h-auto block rounded-md border"
        />
      </div>
      <div className="flex items-center gap-2">
        <p>{name}</p>
        {href && <ArrowUpRight size={16} />}
      </div>
    </>
  );

  return (
    <div className="col-span-full">
      {href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{content}</Link>
      ) : (
        content
      )}
    </div>
  );
} 