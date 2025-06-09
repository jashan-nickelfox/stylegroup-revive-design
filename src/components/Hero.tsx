import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ContinuousCarousel from "./ContinuousCarousel";
import { supabase } from "@/integrations/supabase/client";

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  background_image?: string | null;
}

const staticContent: HeroContent[] = [
  {
    title: "Luxurious Flooring Solutions",
    subtitle: "Style Meets Durability",
    description:
      "Transform your interiors with premium flooring designed for aesthetics and performance. Ideal for Brisbane homes, crafted for lasting comfort and beauty.",
    background_image: "/flooring.jpg",
  },
  {
    title: "Premium Blinds for Style, Comfort & Control",
    subtitle: "Perfect Light Control",
    description:
      "Discover our tailored blinds that seamlessly combine style, privacy, and energy efficiency. From sleek rollers to timeless venetians.",
    background_image: "/blinds.jpg",
  },
  {
    title: "Architectural Shutters That Define Elegance",
    subtitle: "Durability & Design",
    description:
      "Engineered for performance and crafted with elegance, our premium shutters offer unmatched durability and refined aesthetics.",
    background_image: "/shutters.jpg",
  },
  {
    title: "Stylish All-Weather Awnings for Outdoor Living",
    subtitle: "Outdoor Elegance",
    description:
      "Step into outdoor comfort with our all-weather awnings designed for year-round protection and aesthetic charm. Engineered to shield your home from harsh sun, wind, and rain",
    background_image: "/awnings.jpg",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [heroContent, setHeroContent] = useState<HeroContent[]>(staticContent);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    fetchHeroContent();
  }, []);

  useEffect(() => {
    if (typingDone && heroContent.length > 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroContent.length);
        setTypingDone(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [typingDone, heroContent]);

  const fetchHeroContent = async () => {
    const { data, error } = await supabase
      .from("hero_content")
      .select("*")
      .eq("is_active", true)
      .order("updated_at", { ascending: false });

    if (!error && data) {
      const supabaseContent: HeroContent[] = data.map((item) => ({
        title: item.title,
        subtitle: item.subtitle,
        description: item.description,
        background_image: item.background_image || "/fallback.jpg",
      }));

      setHeroContent([...staticContent, ...supabaseContent]);
    }
  };

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { title, subtitle, description } = heroContent[currentIndex];

  return (
    <section className="relative h-screen min-h-[600px] w-full bg-gradient overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ContinuousCarousel
          currentIndex={currentIndex}
          images={heroContent.map((item) => ({
            url: item.background_image || "/fallback.jpg",
            alt: item.title,
            label: item.title,
          }))}
        />
      </div>

      <div className="container h-full flex flex-col justify-center mt-24">
        <div
          key={currentIndex}
          className="max-w-3xl p-6 opacity-0 animate-fade-in transition-opacity duration-700 ease-in-out min-h-[380px] flex flex-col justify-between"
        >
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
                className="text-stylegroup-green font-semibold"
                style={{ textShadow: "2px 2px white", display: "inline-block" }}
              />
            </h1>

            <p className="text-white font-bold text-lg sm:text-xl mb-4 max-w-2xl">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToQuote}
              size="lg"
              className="hero-button bg-stylegroup-green text-white font-medium px-4 py-2 rounded"
            >
              Get Free Quote
            </Button>
            <Button
              onClick={() => navigate("/products")}
              size="lg"
              className="hero-button bg-white text-stylegroup-green flex items-center gap-2 hover:bg-white hover:text-stylegroup-green"
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
