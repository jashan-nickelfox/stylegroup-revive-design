
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Sun, Eye, Wind } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const StraightDropAwnings = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Shield, title: "Weather Protection", description: "Excellent protection from sun, wind and rain" },
    { icon: Sun, title: "Heat Reduction", description: "Significantly reduces indoor temperatures" },
    { icon: Eye, title: "Privacy Screen", description: "Provides privacy while maintaining airflow" },
    { icon: Wind, title: "Wind Resistant", description: "Designed to handle strong wind conditions" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Straight Drop Awnings</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop" 
                  alt="Straight Drop Awnings" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Versatile Protection</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Straight drop awnings offer exceptional versatility and protection for your outdoor spaces. 
                  These innovative awnings provide excellent weather protection while maintaining visibility 
                  and can be used in various configurations to suit your specific needs.
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-6">Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Cafe Screens</h4>
                  <p className="text-sm text-stylegroup-darkgray">Perfect for outdoor dining areas and cafes</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Privacy Screens</h4>
                  <p className="text-sm text-stylegroup-darkgray">Create private outdoor spaces</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Wind Breaks</h4>
                  <p className="text-sm text-stylegroup-darkgray">Protection from strong winds</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Blocks up to 95% of UV radiation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Reduces air conditioning costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Maintains natural light and visibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Quick and easy deployment</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Fabric Options</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Clear PVC for maximum visibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Mesh fabrics for airflow</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Solid fabrics for privacy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>Various colours and patterns</span>
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

export default StraightDropAwnings;
