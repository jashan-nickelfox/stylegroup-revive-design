
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-stylegroup-navy text-white relative overflow-hidden">
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
          <Button asChild size="lg" className="bg-stylegroup-gold hover:bg-stylegroup-gold/90 text-stylegroup-navy">
            <Link to="/quote">Get Free Quote</Link>
          </Button>
          <Button asChild size="lg" className="bg-white hover:bg-stylegroup-lightgray text-stylegroup-navy">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
