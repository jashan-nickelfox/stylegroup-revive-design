
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Bug, Wind, Home } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const AluminiumSecurityScreens = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Shield, title: "Enhanced Security", description: "Strong aluminium construction provides excellent protection" },
    { icon: Bug, title: "Insect Protection", description: "Fine mesh keeps insects out while allowing air circulation" },
    { icon: Wind, title: "Weather Resistant", description: "Durable construction withstands harsh weather conditions" },
    { icon: Home, title: "Aesthetic Appeal", description: "Sleek design complements modern home architecture" }
  ];

  const benefits = [
    "Heavy-duty aluminium frame construction",
    "Corrosion resistant powder coating",
    "Custom sizing for perfect fit",
    "Professional installation included",
    "Low maintenance requirements",
    "Excellent ventilation properties",
    "UV resistant materials",
    "10-year structural warranty"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Aluminium Security Screens</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop" 
                  alt="Aluminium Security Screens" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Premium Security & Protection</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Our aluminium security screens provide robust protection while maintaining excellent 
                  visibility and ventilation. Perfect for homes and businesses requiring enhanced security 
                  without compromising on style or functionality.
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-6 text-center">Why Choose Aluminium Security Screens?</h3>
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-4">Perfect For</h3>
              <p className="text-stylegroup-darkgray mb-6">
                Ideal for doors, windows, patios, and outdoor areas where security is a priority. 
                Our aluminium security screens are suitable for both residential and commercial properties, 
                providing reliable protection year-round.
              </p>
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

export default AluminiumSecurityScreens;
