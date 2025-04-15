
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import ProductCategories from "@/components/ProductCategories";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Our Products</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Discover our complete range of premium window furnishing solutions, crafted specifically for the Brisbane climate and designed to enhance your home or business.
            </p>
            <Button 
              onClick={handleGetQuote}
              className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
            >
              Request a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <ProductCategories />

        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title text-center heading-underline mx-auto">Why Choose Our Products?</h2>
              <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
                Quality craftsmanship and superior materials make Style Group the preferred choice for window furnishings in Queensland.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Superior Quality</h3>
                <p className="text-stylegroup-darkgray">Our products are made from the highest quality materials, designed to withstand Queensland's harsh climate while maintaining their beauty and functionality.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Expert Installation</h3>
                <p className="text-stylegroup-darkgray">Our professional team ensures perfect installation every time, backed by our satisfaction guarantee and ongoing support.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Warranty Protection</h3>
                <p className="text-stylegroup-darkgray">All our products come with comprehensive warranties, giving you peace of mind in your investment for years to come.</p>
              </div>
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

export default Products;
