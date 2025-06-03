
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Eye, Wind, Wrench, Star, CheckCircle } from "lucide-react";

const AluminiumScreens = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const features = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Durable aluminium construction provides excellent security while maintaining visibility"
    },
    {
      icon: Eye,
      title: "Privacy Control",
      description: "Customizable opacity levels to balance privacy needs with natural light"
    },
    {
      icon: Wind,
      title: "Weather Resistant",
      description: "Powder-coated finish withstands Queensland's harsh weather conditions"
    },
    {
      icon: Wrench,
      title: "Custom Design",
      description: "Laser-cut patterns and slatted designs available to match your architectural style"
    }
  ];

  const specifications = [
    { label: "Material", value: "High-grade aluminium alloy" },
    { label: "Finish", value: "Powder-coated in various colours" },
    { label: "Thickness", value: "1.2mm - 2.0mm options available" },
    { label: "Design Options", value: "Laser-cut, slatted, perforated" },
    { label: "Installation", value: "Fixed or hinged mounting systems" },
    { label: "Warranty", value: "10-year structural warranty" }
  ];

  const applications = [
    "External window screens for privacy and security",
    "Balcony and deck screening solutions",
    "Commercial building facades",
    "Pool area enclosures",
    "Air conditioning unit concealment",
    "Architectural feature screens"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-stylegroup-green to-stylegroup-lightgreen text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Aluminium Screens
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Enhance both the security and style of your space with our high-quality aluminium screens. 
                Designed for durability, privacy, and modern aesthetics.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={handleGetQuote}
                  size="lg"
                  className="bg-white text-stylegroup-green hover:bg-gray-100"
                >
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">Modern Security & Style</h2>
                <p className="text-lg text-stylegroup-darkgray mb-6">
                  Our aluminium screens combine contemporary design with practical functionality. 
                  Perfect for modern Australian homes and commercial spaces, these screens offer 
                  superior durability while enhancing your property's aesthetic appeal.
                </p>
                <p className="text-lg text-stylegroup-darkgray mb-8">
                  Available in custom designs including laser-cut patterns, traditional slats, 
                  and perforated options, our screens can be tailored to match any architectural style.
                </p>
                <div className="flex items-center gap-4 text-stylegroup-green">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-medium">Premium Australian-made quality</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://www.stylegroup.com.au/wp-content/uploads/2015/06/Calypso-102-300x225.jpg"
                  alt="Aluminium Screens Installation"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-stylegroup-green text-white p-4 rounded-lg shadow-lg">
                  <p className="font-medium">10 Year</p>
                  <p className="text-sm">Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title text-center heading-underline mx-auto">Key Features</h2>
              <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
                Discover why our aluminium screens are the preferred choice for discerning homeowners
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <feature.icon className="h-12 w-12 text-stylegroup-green mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-stylegroup-green mb-3">{feature.title}</h3>
                  <p className="text-stylegroup-darkgray">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="section-title mb-8">Technical Specifications</h2>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-stylegroup-lightgray">
                      <span className="font-medium text-stylegroup-green">{spec.label}:</span>
                      <span className="text-stylegroup-darkgray">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="section-title mb-8">Applications</h2>
                <ul className="space-y-3">
                  {applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-stylegroup-green shrink-0 mr-3 mt-0.5" />
                      <span className="text-stylegroup-darkgray">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container">
            <h2 className="section-title text-center heading-underline mx-auto mb-12">Design Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Laser-cut aluminium screen design"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-stylegroup-green mb-2">Laser-Cut Patterns</h3>
                  <p className="text-sm text-stylegroup-darkgray">Custom geometric and artistic patterns</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Slatted aluminium screens"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-stylegroup-green mb-2">Slatted Design</h3>
                  <p className="text-sm text-stylegroup-darkgray">Traditional horizontal or vertical slats</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Perforated aluminium screens"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-stylegroup-green mb-2">Perforated Screens</h3>
                  <p className="text-sm text-stylegroup-darkgray">Varied hole patterns for different opacity levels</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-stylegroup-green text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Enhance Your Space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Contact our experts for a free consultation and custom quote for your aluminium screen project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleGetQuote}
                size="lg"
                className="bg-white text-stylegroup-green hover:bg-gray-100"
              >
                Get Free Quote
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
        </section>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default AluminiumScreens;
