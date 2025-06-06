
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Bug, Wind, Home, Eye, Wrench, Award, Phone } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const Crimsafe = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    { icon: Shield, title: "Maximum Security", description: "Patented screw-clamp technology for unmatched protection" },
    { icon: Bug, title: "Insect Protection", description: "Keep insects out while maintaining airflow" },
    { icon: Wind, title: "Weather Resistant", description: "Engineered to withstand extreme weather conditions" },
    { icon: Eye, title: "Clear Vision", description: "Virtually invisible mesh maintains your view" },
    { icon: Wrench, title: "Easy Installation", description: "Professional installation with minimal disruption" },
    { icon: Award, title: "10 Year Warranty", description: "Comprehensive warranty for peace of mind" }
  ];

  const benefits = [
    "Patented Tensile-Tuff® mesh technology",
    "316 marine grade stainless steel mesh",
    "Tamper-resistant screw clamp system",
    "Corrosion resistant powder coating",
    "Custom made to fit any opening",
    "Complies with Australian standards",
    "Professional installation included",
    "Low maintenance requirements"
  ];

  const applications = [
    { title: "Security Doors", description: "Front and back door protection with style" },
    { title: "Window Screens", description: "Secure your windows without compromising aesthetics" },
    { title: "Patio Enclosures", description: "Create safe outdoor living spaces" },
    { title: "Pool Fencing", description: "Child-safe pool barriers that look great" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-stylegroup-navy to-stylegroup-green text-white py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Crimsafe Security Screens</h1>
                <p className="text-xl mb-8 text-white/90">
                  Australia's most trusted security screen system. Combining maximum security 
                  with premium aesthetics for your home or business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleGetQuote}
                    className="bg-white text-stylegroup-navy hover:bg-gray-100"
                    size="lg"
                  >
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    onClick={handleBookMeasure}
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    size="lg"
                  >
                    Book Measure
                  </Button>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" 
                  alt="Crimsafe Security Screen" 
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stylegroup-navy mb-4">Why Choose Crimsafe?</h2>
              <p className="text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
                Crimsafe is the only security screen that combines patented screw-clamp technology 
                with Tensile-Tuff® mesh for uncompromising security and style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-stylegroup-lightgray/30 hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-stylegroup-green mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-stylegroup-darkgray">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-stylegroup-navy mb-6">
                  Patented Technology
                </h2>
                <p className="text-lg mb-6 text-stylegroup-darkgray">
                  Crimsafe's patented screw-clamp technology secures the Tensile-Tuff® mesh into 
                  a tamper-resistant frame, creating an impenetrable barrier that maintains 
                  visibility and airflow.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-3 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
                  alt="Crimsafe Technology" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stylegroup-navy mb-4">Applications</h2>
              <p className="text-lg text-stylegroup-darkgray">
                Crimsafe security screens are perfect for various applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-stylegroup-lightgray/30 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium mb-3 text-stylegroup-green">{app.title}</h3>
                  <p className="text-stylegroup-darkgray">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-stylegroup-navy text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Property?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact Style Group today for a free consultation and quote. 
              Our expert team will help you choose the perfect Crimsafe solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                size="lg"
              >
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleBookMeasure}
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Book Free Measure
              </Button>
              <Button 
                onClick={() => window.location.href = 'tel:0733240900'}
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
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

export default Crimsafe;
