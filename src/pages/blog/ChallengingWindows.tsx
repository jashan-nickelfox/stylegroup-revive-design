
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

const ChallengingWindows = () => {
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
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" 
                alt="Challenging Windows Solutions"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center mb-6 text-sm text-stylegroup-darkgray space-x-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                January 29, 2023
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Robert Taylor
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                Solutions
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-stylegroup-green mb-6">
              Window Treatments for Challenging Windows
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-stylegroup-darkgray mb-6">
                Solutions for unusually shaped, oversized, or hard-to-reach windows that require specialized window furnishings.
              </p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Arched and Shaped Windows</h2>
              <p>Custom-made shutters or specialty blinds can accommodate unique window shapes while maintaining functionality and style.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Extra Large Windows</h2>
              <p>Panel glides and vertical blinds are excellent options for oversized windows, providing easy operation and consistent coverage.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">High or Hard-to-Reach Windows</h2>
              <p>Automated solutions eliminate the need to reach high windows, while extended wand controls can help with manual operation.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Slanted or Angled Windows</h2>
              <p>Specially designed brackets and custom measurements ensure window treatments fit perfectly on angled installations.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Bay Windows</h2>
              <p>Multiple window treatments can be combined or custom-bent tracks used to create seamless coverage across bay window configurations.</p>
              
              <div className="bg-stylegroup-lightgray p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Custom Solutions Available</h3>
                <p className="mb-4">No window is too challenging. Contact Style Group for custom solutions for your unique windows.</p>
                <Link to="/contact">
                  <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90">
                    Discuss Your Requirements
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

export default ChallengingWindows;
