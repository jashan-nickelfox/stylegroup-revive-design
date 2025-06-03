
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock, Settings, CheckCircle, Star } from "lucide-react";

const CrimsafePage = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const protectionLevels = [
    {
      title: 'Regular',
      description: 'Essential protection for your home and family',
      features: ['Basic mesh security', 'Standard locking', '5-year warranty'],
      price: 'From $450',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Classic',
      description: 'The new benchmark in security screens',
      features: ['Enhanced mesh strength', 'Premium locks', '10-year warranty'],
      price: 'From $650',
      popular: true,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Ultimate',
      description: 'Take your home security to the next level',
      features: ['Maximum security mesh', 'Multi-point locking', '12-year warranty'],
      price: 'From $850',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'iQ',
      description: "Australia's first smart digital mesh security screen",
      features: ['Smart technology', 'App control', 'Premium warranty'],
      price: 'From $1200',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
  ];

  const keyFeatures = [
    {
      icon: Shield,
      title: 'Strength',
      description: 'Crimsafe has been tested to be FIVE TIMES stronger than the Australian Standard.',
      highlight: '5x Stronger'
    },
    {
      icon: Settings,
      title: 'Fastening Method',
      description: "'Screw-Clamped' Mesh – creates a barrier that cannot be kicked in.",
      highlight: 'Screw-Clamp™'
    },
    {
      icon: Clock,
      title: 'Warranty',
      description: '12 Years of protection covered under your Crimsafe extended warranty.',
      highlight: '12 Years'
    },
    {
      icon: Award,
      title: 'Clamping System',
      description: 'Exclusive Screw-Clamp™ technology ensures a barrier that cannot be kicked in.',
      highlight: 'Patented'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <div className="mb-6">
                <img 
                  src="https://www.stylegroup.com.au/wp-content/themes/enfold-child/assets/images/crimsafe-authorised-dealer-badge.png"
                  alt="Crimsafe Authorized Dealer"
                  className="mx-auto h-16 w-auto mb-4"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                Australia's Strongest Mesh Security Screens
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Crimsafe: Now available at Style Group
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={handleGetQuote}
                  size="lg"
                  className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                >
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title text-center heading-underline mx-auto mb-8">
                Protect what is most precious to you
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-stylegroup-darkgray">
                As we celebrate our 18th year, we're thrilled to introduce the next chapter of our journey: 
                an official partnership with Crimsafe®. At Style Group, our family-driven ethos means we 
                don't just offer products, but an assurance of quality and care.
              </p>
              <p className="text-lg leading-relaxed text-stylegroup-darkgray">
                With over 60 years of combined experience in the home finishing industry, our directors 
                have always believed in sourcing and offering the best. And Crimsafe® is a testament to that promise.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container">
            <h2 className="section-title text-center heading-underline mx-auto mb-12">
              Why Choose Crimsafe?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <feature.icon className="h-12 w-12 text-stylegroup-green mx-auto mb-4" />
                  <div className="bg-stylegroup-green text-white text-sm font-bold px-3 py-1 rounded-full mb-3 inline-block">
                    {feature.highlight}
                  </div>
                  <h3 className="text-xl font-medium text-stylegroup-green mb-3">{feature.title}</h3>
                  <p className="text-stylegroup-darkgray text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Levels */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title text-center heading-underline mx-auto">
                Four Levels of Protection
              </h2>
              <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
                Choose the perfect Crimsafe solution for your home or business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {protectionLevels.map((level, index) => (
                <div key={index} className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${level.popular ? 'ring-2 ring-stylegroup-green' : ''}`}>
                  {level.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-stylegroup-green text-white px-4 py-1 text-sm font-medium rounded-b-lg">
                      Most Popular
                    </div>
                  )}
                  <img 
                    src={level.image}
                    alt={`Crimsafe ${level.title}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stylegroup-green mb-2">
                      Crimsafe® {level.title}
                    </h3>
                    <p className="text-stylegroup-darkgray mb-4">{level.description}</p>
                    <ul className="space-y-2 mb-6">
                      {level.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-stylegroup-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-stylegroup-green mb-4">{level.price}</div>
                    <Button className="w-full bg-stylegroup-green hover:bg-stylegroup-green/90">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">Crafted for Strength and Style</h2>
                <p className="text-lg leading-relaxed mb-6 text-stylegroup-darkgray">
                  Crafted meticulously with superior stainless-steel mesh, each Crimsafe® screen is more than 
                  just a security solution. Secured with a patented clamp system and firmly anchored in a robust 
                  frame, these screens not only provide unmatched security against potential intruders but also 
                  resilience against the unpredictability of nature.
                </p>
                <p className="text-lg leading-relaxed text-stylegroup-darkgray">
                  Whether it's cyclones, bush-fires, or pesky pests, Crimsafe® provides comprehensive protection 
                  while maintaining the aesthetic appeal of your home.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Crimsafe Installation"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-stylegroup-green text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-current" />
                    <div>
                      <p className="font-medium">Australian</p>
                      <p className="text-sm">Made</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-stylegroup-green text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Enhance Your Home Security?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Discover the Style Group difference, now fortified with Crimsafe® excellence. 
              Your peace of mind, safety, and home elegance are our priorities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleGetQuote}
                size="lg"
                className="bg-white text-stylegroup-green hover:bg-gray-100"
              >
                Arrange your FREE Measure & Quote
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default CrimsafePage;
