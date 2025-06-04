
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

const PlantationShuttersGuide = () => {
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
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Plantation Shutters Guide"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center mb-6 text-sm text-stylegroup-darkgray space-x-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                May 22, 2023
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Michael Smith
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                Shutters
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-stylegroup-green mb-6">
              Plantation Shutters: The Ultimate Guide
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-stylegroup-darkgray mb-6">
                Plantation shutters offer timeless elegance and practical benefits. Discover everything you need to know about these popular window treatments and why they're perfect for Australian homes.
              </p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">What Are Plantation Shutters?</h2>
              <p>Plantation shutters are interior window coverings featuring wide, horizontal slats (louvers) that can be adjusted to control light and privacy. They're permanently mounted to your window frame.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Benefits of Plantation Shutters</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Excellent light control and privacy options</li>
                <li>Energy efficiency - help insulate your home</li>
                <li>Increase property value</li>
                <li>Durable and long-lasting</li>
                <li>Easy to clean and maintain</li>
                <li>Timeless aesthetic appeal</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Material Options</h2>
              <p><strong>PVC Shutters:</strong> Perfect for high-humidity areas like bathrooms and kitchens. Moisture-resistant and easy to clean.</p>
              <p><strong>Timber Shutters:</strong> Natural wood beauty with excellent insulation properties. Perfect for living areas and bedrooms.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Choosing the Right Style</h2>
              <p>Consider your home's architecture, window size, and personal preferences when selecting plantation shutter styles. Our experts can help you choose the perfect option.</p>
              
              <div className="bg-stylegroup-lightgray p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Ready for Plantation Shutters?</h3>
                <p className="mb-4">Contact Style Group for a free measure and quote on plantation shutters for your home.</p>
                <Link to="/contact">
                  <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default PlantationShuttersGuide;
