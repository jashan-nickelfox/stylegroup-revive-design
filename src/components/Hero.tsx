import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ContinuousCarousel from "./ContinuousCarousel";

const heroContent = [
  {
    title: "Luxurious Flooring Solutions",
    subtitle: "Style Meets Durability",
    description:
      "Transform your interiors with premium flooring designed for aesthetics and performance. Ideal for Brisbane homes, crafted for lasting comfort and beauty.",
  },
  {
    title: "Premium Blinds for Style, Comfort & Control",
    subtitle: "Perfect Light Control",
    description:
      "Discover our tailored blinds that seamlessly combine style, privacy, and energy efficiency. From sleek rollers to timeless venetians.",
  },
  {
    title: "Architectural Shutters That Define Elegance",
    subtitle: "Durability & Design",
    description:
      "Engineered for performance and crafted with elegance, our premium shutters offer unmatched durability and refined aesthetics.",
  },
  {
    title: "Stylish All-Weather Awnings for Outdoor Living",
    subtitle: "Outdoor Elegance",
    description:
      "Step into outdoor comfort with our all-weather awnings designed for year-round protection and aesthetic charm. Engineered to shield your home from harsh sun, wind, and rain",
  },  
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const { title, subtitle, description } = heroContent[currentIndex];

  useEffect(() => {
    if (typingDone) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroContent.length);
        setTypingDone(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [typingDone]);

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full bg-gradient overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ContinuousCarousel currentIndex={currentIndex} />
      </div>

      <div className="container h-full flex flex-col justify-center mt-24">
        <div
          key={currentIndex}
          className="max-w-3xl p-6 opacity-0 animate-fade-in transition-opacity duration-700 ease-in-out min-h-[380px] flex flex-col justify-between"
        >
          {/* Heading & Subtitle */}
          <div>
            <h1 className="text-white font-serif text-3xl sm:text-5xl lg:text-6xl font-medium mb-6">
              {title}
              <br />
              <TypeAnimation
                key={currentIndex}
                sequence={[subtitle, 1000, () => setTypingDone(true)]}
                wrapper="span"
                speed={40}
                repeat={0}
                className="text-stylegroup-green  font-semibold"
                style={{ textShadow: "2px 2px white", display: "inline-block" }}
              />
            </h1>

            <p className="text-white font-bold text-lg sm:text-xl mb-4 max-w-2xl">
              {description}
            </p>
          </div>

          {/* Fixed Button Group */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToQuote}
              size="lg"
              className="bg-stylegroup-green text-white hover:bg-white hover:text-stylegroup-green font-medium px-4 py-2 rounded transition-colors duration-300"
            >
              Request Free Quote
            </Button>
            <Button
              onClick={() => navigate('/products')}
              size="lg"
              className="bg-white text-stylegroup-green hover:bg-stylegroup-green hover:text-white flex items-center gap-2 transition-colors duration-300"
            >
              Discover Our Products <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24"></div>
    </section>
  );
};

export default Hero;