
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

const HowToChoosePerfectBlinds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <article className="container py-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-stylegroup-green hover:underline mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="How to Choose Perfect Blinds"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center mb-6 text-sm text-stylegroup-darkgray space-x-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                June 15, 2023
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Emily Johnson
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                Blinds
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-stylegroup-green mb-6">
              How to Choose the Perfect Blinds for Your Brisbane Home
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-stylegroup-darkgray mb-6">
                Finding the right blinds involves considering light control, privacy needs, and your home's style. This comprehensive guide walks you through all the options available to Brisbane homeowners.
              </p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Consider Your Light Control Needs</h2>
              <p>The first step in choosing blinds is understanding how much light control you need in each room. Bedrooms typically require blackout options, while living areas might benefit from light filtering solutions.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Privacy Requirements</h2>
              <p>Different rooms have different privacy needs. Bathrooms and bedrooms require maximum privacy, while you might want to maintain some visibility in common areas.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Style and Aesthetic</h2>
              <p>Your blinds should complement your interior design. Consider the color scheme, furniture style, and overall aesthetic of your home when making your selection.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Popular Blind Types for Brisbane Homes</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Roller Blinds - Simple, effective, and versatile</li>
                <li>Roman Blinds - Elegant fabric option with soft folds</li>
                <li>Venetian Blinds - Classic horizontal slats for precise light control</li>
                <li>Vertical Blinds - Perfect for large windows and sliding doors</li>
              </ul>
              
              <div className="bg-stylegroup-lightgray p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Need Expert Advice?</h3>
                <p className="mb-4">Our team at Style Group can help you choose the perfect blinds for your Brisbane home with a free consultation and measure.</p>
                <Link to="/contact">
                  <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90">
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default HowToChoosePerfectBlinds;
