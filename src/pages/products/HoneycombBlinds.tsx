
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Thermometer, Volume2, Shield, Lightbulb } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const HoneycombBlinds = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Thermometer, title: "Energy Efficient", description: "Excellent insulation properties" },
    { icon: Volume2, title: "Sound Dampening", description: "Reduces external noise" },
    { icon: Shield, title: "UV Protection", description: "Blocks harmful UV rays" },
    { icon: Lightbulb, title: "Light Filtering", description: "Soft, diffused natural light" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Honeycomb Blinds</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" 
                  alt="Honeycomb Blinds" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Superior Insulation & Style</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Honeycomb blinds, also known as cellular blinds, feature a unique honeycomb structure 
                  that provides exceptional insulation properties. These energy-efficient blinds help 
                  regulate indoor temperatures while offering beautiful light filtering and privacy options.
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-6">Energy Savings</h3>
              <p className="text-stylegroup-darkgray mb-4">
                The unique cellular construction of honeycomb blinds creates air pockets that act as insulation, 
                helping to keep your home cooler in summer and warmer in winter. This can result in significant 
                energy savings on your heating and cooling costs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Up to 25% reduction in energy costs</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Maintains comfortable room temperature</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Reduces HVAC system workload</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Single, double, and triple cell options</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Light filtering and blackout fabrics</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Cordless and motorized options</span>
                  </div>
                </div>
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

export default HoneycombBlinds;
