import { InfiniteSlider } from '@/app/components/infinite-slider';
import Image from 'next/image';

const images = [
  {
    src: "/slider/slider 1.png",
    alt: "Slider 1"
  },
  {
    src: "/slider/slider 2.png",
    alt: "Slider 2"
  },
  {
    src: "/slider/slider 3.png",
    alt: "Slider 3"
  },
  {
    src: "/slider/slider 4.png",
    alt: "Slider 4"
  },
  {
    src: "/slider/slider 5.png",
    alt: "Slider 5"
  },
  {
    src: "/slider/slider 6.png",
    alt: "Slider 6"
  },
  {
    src: "/slider/slider 7.png",
    alt: "Slider 7"
  }
];

export default function ImageSlider() {
  return (
    <div className="w-full overflow-visible select-none py-8">
      <InfiniteSlider 
        speed={60}
        className="gap-6"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[200px] aspect-square flex-shrink-0 overflow-hidden rounded-xl transition-transform duration-300 ease-out hover:scale-95"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover bg-secondary border border-secondary"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
} 