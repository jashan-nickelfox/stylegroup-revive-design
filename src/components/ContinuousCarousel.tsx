
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousCarousel;
