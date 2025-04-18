
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full bg-gradient-to-b from-black/20 to-black/70 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
          alt="Modern interior with window treatments" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container h-full flex flex-col justify-center pt-24">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white font-serif text-3xl sm:text-5xl lg:text-6xl font-medium mb-6">
            Premium Window Furnishings<br />
                <span 
                  className="text-stylegroup-lightgreen text-opacity-80 font-semibold"
                  style={{ textShadow: '2px 2px white' }}
                >
                  For Every Space
                </span>
          </h1>
          <p className="text-white text-lg sm:text-xl mb-8 max-w-2xl">
            Elevate your home with custom window treatments designed for the Brisbane climate. Quality craftsmanship, expert installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToQuote} size="lg" className="bg-stylegroup-green text-white hover:bg-white hover:text-stylegroup-green font-medium px-4 py-2 rounded transition-colors duration-300">
              Request Free Quote
            </Button>
            <Button onClick={() => navigate('/products')} size="lg" className="bg-white text-stylegroup-green hover:bg-stylegroup-green hover:text-white flex items-center gap-2 transition-colors duration-300">
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
