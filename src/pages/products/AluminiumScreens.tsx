
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Bug, Wind, Home } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const AluminiumScreens = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Shield, title: "Security", description: "Enhanced protection while maintaining visibility" },
    { icon: Bug, title: "Insect Protection", description: "Keep insects out while allowing fresh air in" },
    { icon: Wind, title: "Weather Shield", description: "Protection from wind, rain, and debris" },
    { icon: Home, title: "Privacy", description: "Maintain privacy without blocking natural light" }
  ];

  const benefits = [
    "Powder-coated aluminium construction",
    "Corrosion and rust resistant",
    "Low maintenance requirements",
    "Custom sizing available",
    "Professional installation",
    "10-year warranty coverage"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Aluminium Screens</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop" 
                  alt="Aluminium Security Screens" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Premium Security & Style</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Our aluminium screens provide the perfect combination of security, protection, and 
                  aesthetic appeal. Designed to enhance both the security and style of your space, 
                  these screens offer excellent ventilation while keeping your home safe and comfortable.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <feature.icon className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-1" />
                      <div>
                        <h3 className="font-medium text-sm">{feature.title}</h3>
                        <p className="text-xs text-stylegroup-darkgray">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-stylegroup-lightgray/30 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-medium text-stylegroup-green mb-6 text-center">Why Choose Aluminium Screens?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-stylegroup-green mb-4">Applications</h3>
              <p className="text-stylegroup-darkgray mb-6">
                Perfect for doors, windows, patios, and outdoor entertainment areas. 
                Our aluminium screens are suitable for residential and commercial properties, 
                providing reliable protection and enhanced comfort year-round.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Request a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={handleBookMeasure}
                variant="outline"
                className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
              >
                Book Free Measure
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

export default AluminiumScreens;
