
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Check, ArrowRight } from "lucide-react";

const RollerBlinds = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    "Simple, clean operation with smooth rolling mechanism",
    "Available in blockout, translucent, and sunscreen fabrics",
    "Child-safe cordless and motorized options available",
    "Custom sizing to fit any window perfectly",
    "Wide range of colors and patterns to match your décor",
    "Easy maintenance and cleaning",
    "Superior UV protection for furniture and floors",
    "Energy-efficient options to reduce cooling costs"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="section-title text-center mb-4">Roller Blinds</h1>
              <p className="text-lg text-stylegroup-darkgray max-w-3xl mx-auto">
                Discover the perfect blend of style and functionality with our premium roller blinds. 
                Designed for modern living, they offer excellent light control and privacy while maintaining a sleek, minimalist appearance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src="https://www.stylegroup.com.au/wp-content/uploads/2015/06/roller-blinds-brisbane.jpg"
                  alt="Premium roller blinds in modern Brisbane home"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Why Choose Our Roller Blinds?</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Our roller blinds are the epitome of simplicity and elegance. With a smooth rolling mechanism and 
                  premium fabrics, they provide excellent light control while complementing any interior design style. 
                  Perfect for Brisbane's climate, they offer superior UV protection and energy efficiency.
                </p>
                
                <h3 className="text-lg font-medium text-stylegroup-navy mb-4">Key Features:</h3>
                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-3 mt-0.5" />
                      <span className="text-stylegroup-darkgray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleGetQuote}
                    className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white transition-all duration-300"
                  >
                    Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    onClick={handleBookMeasure}
                    variant="outline"
                    className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 transition-all duration-300"
                  >
                    Book Free Measure
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Blockout Fabrics</h3>
                <p className="text-stylegroup-darkgray">Perfect for bedrooms and media rooms, providing complete light control and privacy.</p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Translucent Options</h3>
                <p className="text-stylegroup-darkgray">Allow natural light while maintaining privacy, ideal for living areas and offices.</p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Sunscreen Fabrics</h3>
                <p className="text-stylegroup-darkgray">Reduce glare and UV rays while preserving your view to the outside world.</p>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default RollerBlinds;
