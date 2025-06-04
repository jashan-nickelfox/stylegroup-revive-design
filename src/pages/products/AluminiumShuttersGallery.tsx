
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Sun, Wind, Eye } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const AluminiumShuttersGallery = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Shield, title: "Weather Resistant", description: "Built to withstand harsh Australian weather conditions" },
    { icon: Sun, title: "UV Protection", description: "Blocks harmful UV rays while maintaining visibility" },
    { icon: Wind, title: "Cyclone Rated", description: "Engineered to meet Australian cyclone standards" },
    { icon: Eye, title: "Privacy Control", description: "Adjustable louvres for perfect privacy and light control" }
  ];

  const specifications = [
    "Material: Premium powder-coated aluminium",
    "Blade widths: 63mm, 89mm, 114mm available",
    "Operation: Manual or motorized options",
    "Finish: Wide range of colours available",
    "Warranty: 10-year structural warranty",
    "Installation: Professional installation included"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Aluminium Shutters Gallery</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop" 
                  alt="Aluminium Shutters" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Premium Aluminium Shutters</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Our aluminium shutters combine exceptional durability with contemporary style. 
                  Perfect for modern homes and commercial properties, these shutters provide superior 
                  light control, privacy, and weather protection while adding significant value to your property.
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Low maintenance and long-lasting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Energy efficient temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Enhanced security and privacy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Noise reduction properties</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Specifications</h3>
                <ul className="space-y-2">
                  {specifications.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                      <span className="text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
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
      <FloatingContact />
    </div>
  );
};

export default AluminiumShuttersGallery;
