
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 flex items-center justify-center bg-white">
        <div className="container max-w-md text-center px-4 py-16">
          <h1 className="text-7xl font-bold text-stylegroup-green mb-2">404</h1>
          <p className="text-2xl font-medium text-stylegroup-darkgray mb-4">Page Not Found</p>
          <p className="text-stylegroup-darkgray mb-8">
            The page you're looking for may have been moved, deleted, or is temporarily unavailable. 
            We're currently working on adding more product and project pages to enhance your experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/')}
              className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
            >
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-stylegroup-darkgray mb-6">Looking for something specific?</p>
            <Button 
              onClick={() => navigate('/products')}
              variant="outline"
              className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 mr-2 mb-2"
            >
              Browse Products
            </Button>
            <Button 
              onClick={() => navigate('/projects')}
              variant="outline"
              className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 mr-2 mb-2"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              variant="outline"
              className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 mb-2"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
