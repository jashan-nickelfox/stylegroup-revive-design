
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Eye, EyeOff, Wind, Palette } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const AluminiumPrivacyScreens = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: EyeOff, title: "Complete Privacy", description: "Block unwanted views while maintaining style" },
    { icon: Wind, title: "Airflow Control", description: "Designed to allow controlled ventilation" },
    { icon: Palette, title: "Design Options", description: "Various patterns and colors to match your style" },
    { icon: Eye, title: "Selective Vision", description: "Control what you see and what others can see" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Aluminium Privacy Screens</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop" 
                  alt="Aluminium Privacy Screens" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Style Meets Privacy</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Create private, comfortable spaces with our aluminium privacy screens. 
                  Perfect for balconies, patios, and outdoor areas where you want to enjoy 
                  your space without prying eyes.
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
              <h3 className="text-xl font-medium text-stylegroup-green mb-6 text-center">Privacy Screen Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Custom patterns and perforations",
                  "Powder coated in various colors",
                  "Weather resistant construction",
                  "Easy installation and maintenance",
                  "Blocks unwanted views effectively",
                  "Allows controlled natural light",
                  "Enhances outdoor living spaces",
                  "Architectural design integration"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
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

export default AluminiumPrivacyScreens;
