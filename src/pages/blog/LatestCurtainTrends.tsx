
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

const LatestCurtainTrends = () => {
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
                src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Latest Curtain Trends"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center mb-6 text-sm text-stylegroup-darkgray space-x-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                February 18, 2023
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Jessica Lee
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                Curtains
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-stylegroup-green mb-6">
              The Latest Curtain Trends for 2023
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-stylegroup-darkgray mb-6">
                Stay on top of the latest curtain styles, fabrics, and colors that are trending this year for modern Australian homes.
              </p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Natural and Sustainable Fabrics</h2>
              <p>Eco-conscious homeowners are choosing natural fibers like linen, cotton, and hemp. These sustainable options offer both style and environmental benefits.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Bold Patterns and Textures</h2>
              <p>2023 sees a move away from plain fabrics toward bold geometric patterns, botanical prints, and rich textures that add visual interest to rooms.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Earthy Color Palettes</h2>
              <p>Warm, earthy tones like terracotta, sage green, and warm browns are dominating the curtain color trends this year.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">S-Fold and Wave Curtains</h2>
              <p>The clean, continuous wave of S-fold curtains continues to be popular for its modern, sophisticated appearance.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Layered Window Treatments</h2>
              <p>Combining sheer and blockout curtains on the same window allows for maximum flexibility in light control and privacy.</p>
              
              <div className="bg-stylegroup-lightgray p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Update Your Curtains</h3>
                <p className="mb-4">Ready to embrace the latest curtain trends? Contact Style Group for a consultation.</p>
                <Link to="/contact">
                  <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90">
                    Explore Curtain Options
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

export default LatestCurtainTrends;
