import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ProductContent from "@/components/ProductContent";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

const Shutters = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Shutters</h1>
            
            <div className="mb-10">
              <ProductContent productSlug="shutters" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Plantation Shutters</h3>
                <p className="mb-3">Classic, wide-louvered shutters that add elegance and value to any home while providing excellent light control.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/shutters/plantation')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Timber Shutters</h3>
                <p className="mb-3">Beautiful natural wood shutters that add warmth and character to your home with exceptional durability.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/shutters/timber')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">PVC Shutters</h3>
                <p className="mb-3">Water-resistant shutters perfect for humid environments like bathrooms and kitchens with exceptional durability.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/shutters/pvc')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Exterior Shutters</h3>
                <p className="mb-3">Durable, weather-resistant shutters designed for outdoor use, offering privacy, security, and protection from the elements.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/shutters/exterior')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Request a Free Quote
              </Button>
              <Button 
                onClick={handleBookMeasure}
                variant="outline"
                className="border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy/10"
              >
                Book Free Measure
              </Button>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Shutters;
