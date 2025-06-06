
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Home, Eye, Wrench, Award, Phone, Lock, Bug, Wind, Star } from "lucide-react";
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
    { icon: Shield, title: "Maximum Security", description: "Patented screw-clamp technology creates an impenetrable barrier" },
    { icon: Eye, title: "Clear Vision", description: "316 Marine Grade stainless steel mesh maintains your view" },
    { icon: Bug, title: "Insect Protection", description: "Keep insects out while maintaining fresh air flow" },
    { icon: Wind, title: "Weather Resistant", description: "Engineered to withstand extreme Australian weather" },
    { icon: Lock, title: "Tamper Resistant", description: "Unique screw clamp system prevents forced entry" },
    { icon: Award, title: "10 Year Warranty", description: "Comprehensive warranty for complete peace of mind" }
  ];

  const benefits = [
    "Patented Tensile-Tuff® mesh - the strongest security mesh available",
    "316 Marine Grade stainless steel construction for maximum durability",
    "Tamper-resistant screw clamp system - unique patented technology",
    "Corrosion resistant powder coating in a variety of colours",
    "Custom manufactured to fit any opening perfectly",
    "Complies with all relevant Australian security standards",
    "Professional installation by certified technicians",
    "Low maintenance - simply hose down to clean"
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Brisbane North",
      text: "We installed Crimsafe screens 3 years ago and couldn't be happier. The security and peace of mind they provide is incredible, and the mesh is practically invisible.",
      rating: 5
    },
    {
      name: "Mark Thompson", 
      location: "Gold Coast",
      text: "After a break-in attempt, we knew we needed the best security. Crimsafe has given us that protection while keeping our home looking beautiful.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      location: "Sunshine Coast", 
      text: "The team at Style Group were professional from start to finish. Our Crimsafe doors and windows look amazing and work perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-stylegroup-green/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Australia's #1 Security Screen
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Crimsafe
                  <span className="block text-stylegroup-lightgreen">Security Screens</span>
                </h1>
                <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                  The only security screen combining patented screw-clamp technology with 
                  Tensile-Tuff® mesh. Maximum security without compromising your view or style.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-stylegroup-green/20 to-transparent rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&h=500&fit=crop" 
                  alt="Crimsafe Security Screen Installation" 
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Crimsafe?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Crimsafe is Australia's most trusted security screen system, providing uncompromising 
                protection with premium aesthetics for homes and businesses across the country.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-stylegroup-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-stylegroup-green/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-stylegroup-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Deep Dive */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-stylegroup-green text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Patented Technology
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  The Science Behind 
                  <span className="block text-stylegroup-green">Unbreakable Security</span>
                </h2>
                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                  Our revolutionary screw-clamp technology secures the Tensile-Tuff® mesh into 
                  a tamper-resistant frame, creating an impenetrable barrier that maintains 
                  complete visibility and optimal airflow.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-stylegroup-green/20 rounded-full p-1 mr-4 mt-1">
                        <Check className="h-4 w-4 text-stylegroup-green" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-stylegroup-green/10 to-transparent rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop" 
                  alt="Crimsafe Mesh Technology Close-up" 
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from real customers about their Crimsafe experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Perfect for Every Application</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Crimsafe security screens are versatile and can be custom-made for any opening
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Security Doors", description: "Front and back door protection with premium style", icon: Home },
                { title: "Window Screens", description: "Secure your windows without blocking the view", icon: Eye },
                { title: "Patio Enclosures", description: "Create safe outdoor living spaces for the family", icon: Shield },
                { title: "Pool Fencing", description: "Child-safe pool barriers that complement your landscape", icon: Lock }
              ].map((app, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-stylegroup-green/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-stylegroup-green/30 transition-colors">
                    <app.icon className="h-10 w-10 text-stylegroup-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        {/* <section className="py-20 bg-stylegroup-green text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Secure Your Home?</h2>
            <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust Crimsafe to protect their homes. 
              Contact Style Group today for a free consultation and discover why we're Queensland's 
              leading Crimsafe specialist.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                onClick={handleGetQuote}
                className="bg-white text-stylegroup-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleBookMeasure}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-stylegroup-green px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                Book Free Measure
              </Button>
              <Button 
                onClick={() => window.location.href = 'tel:0733240900'}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-stylegroup-green px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </section> */}

        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Crimsafe;
