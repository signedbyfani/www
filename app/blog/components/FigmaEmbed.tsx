interface FigmaEmbedProps {
  src: string;
}

export default function FigmaEmbed({ src }: FigmaEmbedProps) {
  return (
    <div className="my-8 max-w-none md:-ml-48 md:w-[calc(100%+384px)] overflow-hidden rounded-lg">
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="100%"
        height="600"
        src={src}
        allowFullScreen
      />
    </div>
  );
} 