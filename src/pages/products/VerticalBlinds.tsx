
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Check, ArrowRight } from "lucide-react";

const VerticalBlinds = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    "Perfect for large windows and sliding doors",
    "89mm and 127mm slat widths available",
    "Fabric, PVC, and aluminum slat options",
    "Smooth track system for easy operation",
    "Excellent light control with rotating slats",
    "Available in hundreds of colors and textures",
    "Ideal for commercial and residential applications",
    "Custom-made to fit any window configuration"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="section-title text-center mb-4">Vertical Blinds</h1>
              <p className="text-lg text-stylegroup-darkgray max-w-3xl mx-auto">
                Ideal for large windows and sliding doors, our vertical blinds offer excellent light control and privacy. 
                Perfect for both residential and commercial spaces throughout Brisbane.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src="https://www.stylegroup.com.au/wp-content/uploads/2015/06/vertical-blinds-brisbane.jpg"
                  alt="Modern vertical blinds for large windows and sliding doors"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Versatile Window Solutions</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Vertical blinds are the perfect solution for large windows, sliding doors, and wide window expanses. 
                  With vertical slats that can be drawn to one side or split in the center, they offer maximum flexibility 
                  for light control and access. Ideal for both modern homes and commercial environments.
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
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Fabric Slats</h3>
                <p className="text-stylegroup-darkgray">Soft, elegant appearance with excellent light filtering properties, perfect for living areas.</p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">PVC Slats</h3>
                <p className="text-stylegroup-darkgray">Durable and easy to clean, ideal for high-moisture areas and commercial applications.</p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Aluminum Slats</h3>
                <p className="text-stylegroup-darkgray">Modern, sleek appearance with excellent durability and light control properties.</p>
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

export default VerticalBlinds;
