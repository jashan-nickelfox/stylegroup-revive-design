
import { useEffect, useRef, useState } from 'react';

interface CarouselImage {
  url: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Modern interior with window treatments"
  },
  {
    url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Elegant roller blinds in modern home"
  },
  {
    url: "https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Contemporary window shutters"
  },
  {
    url: "https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Stylish outdoor awnings"
  },
  {
    url: "https://images.unsplash.com/photo-1615874833974-642a3fa5fb6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Modern aluminium screens"
  }
];

const ContinuousCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let currentScroll = 0;

    const scroll = () => {
      if (isHovered || !scrollContainer) return;
      
      currentScroll += 0.5; // Adjust speed here
      if (currentScroll >= scrollContainer.scrollWidth / 2) {
        currentScroll = 0;
      }
      
      scrollContainer.scrollLeft = currentScroll;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-hidden whitespace-nowrap"
      >
        {/* First set of images */}
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="min-w-[300px] h-[600px] relative inline-block transform transition-transform duration-500"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="min-w-[300px] h-[600px] relative inline-block transform transition-transform duration-500"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousCarousel;
