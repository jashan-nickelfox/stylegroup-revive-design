
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sun, Wind, Droplets, Settings } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const FoldingArmAwnings = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Sun, title: "UV Protection", description: "Blocks up to 98% of harmful UV rays" },
    { icon: Wind, title: "Wind Resistant", description: "Designed to withstand moderate winds" },
    { icon: Droplets, title: "Weather Protection", description: "Shelter from sun and light rain" },
    { icon: Settings, title: "Easy Operation", description: "Manual or motorized options available" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Folding Arm Awnings</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop" 
                  alt="Folding Arm Awnings" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Extend Your Living Space</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Folding arm awnings are the perfect solution for creating comfortable outdoor living spaces. 
                  With their sleek design and superior functionality, these awnings provide excellent protection 
                  from the elements while seamlessly blending with your home's architecture.
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Self-supporting arm design</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>No posts or supports required</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Adjustable pitch for optimal protection</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Wide range of fabric options</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Fully retractable design</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Wind sensor automation available</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>10-year structural warranty</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Professional installation included</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 border border-stylegroup-lightgray rounded-lg">
                <h4 className="font-medium mb-2">Manual Operation</h4>
                <p className="text-sm text-stylegroup-darkgray">Simple crank handle operation for easy extension and retraction</p>
              </div>
              <div className="text-center p-4 border border-stylegroup-lightgray rounded-lg">
                <h4 className="font-medium mb-2">Motorized Option</h4>
                <p className="text-sm text-stylegroup-darkgray">Electric motor with remote control for effortless operation</p>
              </div>
              <div className="text-center p-4 border border-stylegroup-lightgray rounded-lg">
                <h4 className="font-medium mb-2">Smart Integration</h4>
                <p className="text-sm text-stylegroup-darkgray">Compatible with home automation systems and weather sensors</p>
              </div>
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
    </div>
  );
};

export default FoldingArmAwnings;
