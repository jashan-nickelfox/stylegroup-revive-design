import { useState } from "react";

interface ContinuousCarouselProps {
  currentIndex: number;
}

interface CarouselImage {
  url: string;
  alt: string;
  label: string;
}

const images: CarouselImage[] = [
  {
    url: "/flooring.jpg",
    alt: "Modern interior with window treatments",
    label: "Flooring",
  },
  {
    url: "/blinds.jpg",
    alt: "Elegant roller blinds in modern home",
    label: "Blinds",
  },
  {
    url: "/shutters.jpg",
    alt: "Contemporary window shutters",
    label: "Shutters",
  },
  {
    url: "/awnings.jpg",
    alt: "Stylish outdoor awnings",
    label: "Awnings",
  },
];

const ContinuousCarousel = ({ currentIndex }: ContinuousCarouselProps) => {
  return (
    <div className="relative w-full h-[900px] overflow-hidden rounded-lg shadow-lg">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover filter blur-sm brightness-10"
              loading="lazy"
            />
            {/* Black transparent overlay */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      ))}

      {/* Slanted Labels */}
      {/* {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-6 right-[-40px] transform rotate-45 origin-top-right z-30 text-white text-sm font-semibold tracking-wide bg-black/60 px-8 py-2 shadow-lg transition-all duration-700 ${
            index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ width: "200px" }}
        >
          {image.label}
        </div>
      ))} */}
    </div>
  );
};

export default ContinuousCarousel;