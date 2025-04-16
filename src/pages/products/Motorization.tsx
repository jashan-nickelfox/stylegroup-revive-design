
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import ProductContent from "@/components/ProductContent";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const Motorization = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  // Smart home integration systems
  const smartSystems = [
    {
      name: "Google Home",
      features: [
        "Voice control for all motorized window coverings",
        "Schedule-based automation",
        "Integration with other smart home devices",
      ]
    },
    {
      name: "Amazon Alexa",
      features: [
        "Voice commands for all motorized products",
        "Custom routines for different times of day",
        "Group control for multiple window coverings",
      ]
    },
    {
      name: "Apple HomeKit",
      features: [
        "Seamless integration with Apple ecosystem",
        "Siri voice control",
        "Automation based on location and time",
      ]
    },
    {
      name: "Somfy myLink",
      features: [
        "Dedicated app for complete control",
        "Timer functions for energy efficiency",
        "Remote access from anywhere",
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Motorization Solutions</h1>
            
            <div className="mb-10">
              <ProductContent productType="motorization" />
            </div>
            
            <div className="my-12">
              <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Smart Home Integration</h2>
              <p className="text-stylegroup-darkgray mb-8">
                Control your window coverings with the touch of a button, voice command, or automated schedule. 
                Our motorization solutions integrate seamlessly with all popular smart home systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {smartSystems.map((system, index) => (
                  <div key={index} className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4 text-stylegroup-green">{system.name}</h3>
                    <ul className="space-y-2">
                      {system.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="my-12">
              <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Products Compatible with Motorization</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-stylegroup-lightgray rounded-lg p-5 text-center hover:border-stylegroup-green transition-colors">
                  <h3 className="font-medium mb-2">Roller Blinds</h3>
                  <p className="text-sm text-stylegroup-darkgray mb-4">Quiet motors with precise control</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                    onClick={() => navigate('/blinds/roller')}
                  >
                    View Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="border border-stylegroup-lightgray rounded-lg p-5 text-center hover:border-stylegroup-green transition-colors">
                  <h3 className="font-medium mb-2">Curtains</h3>
                  <p className="text-sm text-stylegroup-darkgray mb-4">Smooth, silent operation</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                    onClick={() => navigate('/curtains')}
                  >
                    View Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="border border-stylegroup-lightgray rounded-lg p-5 text-center hover:border-stylegroup-green transition-colors">
                  <h3 className="font-medium mb-2">External Awnings</h3>
                  <p className="text-sm text-stylegroup-darkgray mb-4">Weather sensors and automation</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                    onClick={() => navigate('/awnings')}
                  >
                    View Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Request a Free Quote
              </Button>
              <Button 
                onClick={handleBookMeasure}
                variant="outline"
                className="border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy/10"
              >
                Book Free Consultation
              </Button>
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

export default Motorization;
