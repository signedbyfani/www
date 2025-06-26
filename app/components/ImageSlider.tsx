import { InfiniteSlider } from './InfiniteSlider';
import Image from 'next/image';

export function ImageSlider() {
  const images = [
    '/slider/slider 1.png',
    '/slider/slider 2.png',
    '/slider/slider 3.png',
    '/slider/slider 4.png',
    '/slider/slider 5.png',
    '/slider/slider 6.png',
    '/slider/slider 7.png',
  ];

  return (
    <InfiniteSlider gap={24} reverse speed={70}>
      {images.map((image, index) => (
        <div
          key={index}
          className="h-[200px] w-[200px] rounded-md bg-secondary border border-secondary overflow-hidden"
        >
          <Image
            src={image}
            alt={`Slider image ${index + 1}`}
            className="h-full w-full object-cover"
            width={200}
            height={200}
          />
        </div>
      ))}
    </InfiniteSlider>
  );
} 