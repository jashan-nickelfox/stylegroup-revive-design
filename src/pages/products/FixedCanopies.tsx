
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Clock, Building, Umbrella } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const FixedCanopies = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Shield, title: "Permanent Protection", description: "Constant weather protection year-round" },
    { icon: Clock, title: "Durable Construction", description: "Built to last with minimal maintenance" },
    { icon: Building, title: "Structural Integrity", description: "Engineered for Australian conditions" },
    { icon: Umbrella, title: "All-Weather Cover", description: "Protection from sun, rain, and hail" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Fixed Canopies</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" 
                  alt="Fixed Canopies" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Permanent Weather Protection</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Fixed canopies provide permanent, reliable protection for your outdoor areas. 
                  Built with robust materials and engineered for Australian weather conditions, 
                  these structures offer long-term durability and continuous coverage.
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-6">Canopy Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Entry Canopies</h4>
                  <p className="text-sm text-stylegroup-darkgray">Protection for doorways and entrances</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Car Park Shades</h4>
                  <p className="text-sm text-stylegroup-darkgray">Vehicle protection from weather</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Outdoor Dining</h4>
                  <p className="text-sm text-stylegroup-darkgray">Covered areas for restaurants and cafes</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Construction Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Galvanised steel framework</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Powder-coated finish options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Various roofing materials available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Custom sizing and design</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Material Options</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Polycarbonate sheeting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Colorbond steel roofing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Shade cloth panels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Glass panel options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-stylegroup-green mb-4">Applications</h3>
              <p className="text-stylegroup-darkgray">
                Fixed canopies are ideal for commercial buildings, schools, hospitals, retail centres, 
                and residential properties where permanent weather protection is required. 
                Perfect for high-traffic areas that need continuous coverage.
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

export default FixedCanopies;
