import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

interface CraftImageProps {
  imageSrc: string;
  name: string;
  href?: string;
}

export default function CraftImage({ imageSrc, name, href }: CraftImageProps) {
  const content = (
    <>
      <div className="w-full mb-2">
        <Image
          src={imageSrc}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          className="rounded-md border"
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