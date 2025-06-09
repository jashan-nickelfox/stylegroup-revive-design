
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, TreePine, Palette, Shield, Sparkles } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const TimberShutters = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: TreePine, title: "Premium Timber", description: "High-quality hardwood construction" },
    { icon: Palette, title: "Custom Finishes", description: "Wide range of stains and paint options" },
    { icon: Shield, title: "Weather Resistant", description: "Treated for Australian climate conditions" },
    { icon: Sparkles, title: "Luxury Appeal", description: "Adds warmth and natural beauty to any space" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Timber Shutters</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=400&fit=crop" 
                  alt="Timber Shutters" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Natural Beauty & Warmth</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Our timber shutters combine the natural beauty of premium hardwood with 
                  exceptional functionality. Each shutter is crafted to provide superior 
                  light control, privacy, and insulation while adding warmth and character to your home.
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-6">Timber Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Western Red Cedar</h4>
                  <p className="text-sm text-stylegroup-darkgray">Natural beauty with excellent stability</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Tasmanian Oak</h4>
                  <p className="text-sm text-stylegroup-darkgray">Durable Australian hardwood</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Pine</h4>
                  <p className="text-sm text-stylegroup-darkgray">Cost-effective with great paintability</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Natural insulation properties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Unique grain patterns and character</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Can be refinished and restored</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Adds significant property value</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Care & Maintenance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Regular dusting with soft cloth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Occasional treatment with timber oil</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Professional refinishing available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Long-lasting with proper care</span>
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

export default TimberShutters;
