
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import ProductContent from "@/components/ProductContent";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

const Curtains = () => {
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
            <h1 className="section-title text-center mb-8">Curtains</h1>
            
            <div className="mb-10">
              <ProductContent productType="curtains" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Sheer Curtains</h3>
                <p className="mb-3">Lightweight, translucent curtains that diffuse natural light while maintaining privacy and creating an elegant, airy atmosphere.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/curtains/sheer')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Blockout Curtains</h3>
                <p className="mb-3">Heavy, lined curtains that completely block light, providing optimal privacy and insulation for bedrooms and media rooms.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/curtains/blockout')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">S-Fold Curtains</h3>
                <p className="mb-3">Contemporary curtains with a smooth, wave-like fold pattern that creates a clean, modern look perfect for large windows.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/curtains/s-fold')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Pencil Pleat Curtains</h3>
                <p className="mb-3">Traditional curtains with tightly gathered pleats at the top, offering a classic, tailored appearance suitable for any décor.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/curtains/pencil-pleat')}
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
      <FloatingContact />
    </div>
  );
};

export default Curtains;
