interface ContinuousCarouselProps {
  currentIndex: number;
  images: {
    url: string;
    alt: string;
    label: string;
  }[];
}

const ContinuousCarousel = ({ currentIndex, images }: ContinuousCarouselProps) => {
  return (
    <div className="relative w-full h-[900px] overflow-hidden rounded-lg shadow-lg">
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
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContinuousCarousel;
