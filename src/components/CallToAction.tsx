
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToSection: 'quote' } });
    }
  };
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-16 bg-stylegroup-green text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Transform Your Space?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Schedule a free consultation with our window furnishing experts today and discover the perfect solutions for your home or business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToQuote} 
            size="lg" 
            className="bg-stylegroup-lightgreen hover:bg-stylegroup-lightgreen/90 text-white"
          >
            Get Free Quote
          </Button>
          <Button 
            onClick={handleContactClick} 
            size="lg" 
            className="bg-white hover:bg-stylegroup-lightgray text-stylegroup-green"
          >
            <span className="flex items-center gap-2">
              Contact Us <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
