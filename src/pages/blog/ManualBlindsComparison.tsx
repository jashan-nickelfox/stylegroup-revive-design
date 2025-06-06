
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

const ManualBlindsComparison = () => {
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
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Manual Blinds Comparison"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center mb-6 text-sm text-stylegroup-darkgray space-x-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                March 5, 2023
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                David Brown
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                Blinds
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-stylegroup-green mb-6">
              Manual Blinds: Which Is Right for You?
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-stylegroup-darkgray mb-6">
                Explore the pros and cons of different manual blind options to determine which suits your home and lifestyle needs best.
              </p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Manual Blind Operation Types</h2>
              
              <h3 className="text-xl font-medium text-stylegroup-green mt-6 mb-3">Chain Control</h3>
              <p><strong>Pros:</strong> Simple operation, reliable mechanism, cost-effective</p>
              <p><strong>Cons:</strong> Chains can be a safety concern with children</p>
              
              <h3 className="text-xl font-medium text-stylegroup-green mt-6 mb-3">Cord Control</h3>
              <p><strong>Pros:</strong> Easy to use, precise control, traditional option</p>
              <p><strong>Cons:</strong> Safety considerations, may wear over time</p>
              
              <h3 className="text-xl font-medium text-stylegroup-green mt-6 mb-3">Cordless Operation</h3>
              <p><strong>Pros:</strong> Child-safe, clean look, smooth operation</p>
              <p><strong>Cons:</strong> Slightly higher cost, may require more force for large blinds</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">Factors to Consider</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Safety requirements (especially with children)</li>
                <li>Window size and height</li>
                <li>Frequency of use</li>
                <li>Budget considerations</li>
                <li>Aesthetic preferences</li>
              </ul>
              
              <div className="bg-stylegroup-lightgray p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Need Help Choosing?</h3>
                <p className="mb-4">Our experts can help you select the perfect manual blind system for your needs.</p>
                <Link to="/contact">
                  <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90">
                    Get Expert Advice
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

export default ManualBlindsComparison;
