
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Wind, Sun, Home } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const ExteriorShutters = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Shield, title: "Storm Protection", description: "Shields windows from severe weather" },
    { icon: Wind, title: "Cyclone Rated", description: "Engineered for extreme weather conditions" },
    { icon: Sun, title: "UV Protection", description: "Blocks harmful UV rays and heat" },
    { icon: Home, title: "Security", description: "Additional security for your property" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Exterior Shutters</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop" 
                  alt="Exterior Shutters" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Ultimate Protection</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Our exterior shutters provide the ultimate protection for your home against 
                  severe weather conditions. Built to Australian standards, these shutters offer 
                  superior storm protection while enhancing your property's security and energy efficiency.
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-6">Types of Exterior Shutters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Rolling Shutters</h4>
                  <p className="text-sm text-stylegroup-darkgray">Convenient and space-saving design</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Hinged Shutters</h4>
                  <p className="text-sm text-stylegroup-darkgray">Traditional style with modern performance</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Bahama Shutters</h4>
                  <p className="text-sm text-stylegroup-darkgray">Top-hinged for easy operation</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Protection Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Storm and cyclone protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Reduces energy costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Enhanced security</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Noise reduction</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Material Options</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Powder-coated aluminium</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Galvanised steel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Composite materials</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Weather-resistant finishes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
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
    </div>
  );
};

export default ExteriorShutters;
