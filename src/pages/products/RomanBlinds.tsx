
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Check, ArrowRight } from "lucide-react";

const RomanBlinds = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    "Elegant horizontal pleating creates a luxurious appearance",
    "Premium fabrics including linen, cotton, and designer collections",
    "Smooth cord and chain operation systems",
    "Custom-made to your exact window measurements",
    "Available in lined and unlined options",
    "Wide selection of colors, patterns, and textures",
    "Child-safe cordless operation available",
    "Professional installation and styling advice"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="section-title text-center mb-4">Roman Blinds</h1>
              <p className="text-lg text-stylegroup-darkgray max-w-3xl mx-auto">
                Add sophistication and warmth to your home with our custom Roman blinds. 
                Featuring elegant horizontal pleats and premium fabrics, they create beautiful focal points while providing excellent light control.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src="https://www.stylegroup.com.au/wp-content/uploads/2015/06/roman-blinds-brisbane.jpg"
                  alt="Elegant Roman blinds in luxury Brisbane home"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Luxury Roman Blinds</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Roman blinds are the perfect choice when you want to add texture, color, and elegance to your windows. 
                  Our custom-made Roman blinds feature beautiful horizontal pleating that creates a sophisticated look 
                  whether raised or lowered, making them ideal for formal living areas, bedrooms, and dining rooms.
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
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Designer Fabrics</h3>
                <p className="text-stylegroup-darkgray">Choose from our extensive collection of premium fabrics including linen, cotton, and designer prints.</p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Custom Sizing</h3>
                <p className="text-stylegroup-darkgray">Every Roman blind is made to your exact specifications for a perfect fit and professional finish.</p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Professional Installation</h3>
                <p className="text-stylegroup-darkgray">Our experienced team ensures perfect installation and provides styling advice for optimal results.</p>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default RomanBlinds;
