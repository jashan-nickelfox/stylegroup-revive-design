
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import ProductContent from "@/components/ProductContent";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

const Blinds = () => {
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
            <h1 className="section-title text-center mb-8">Blinds</h1>
            
            <div className="mb-10">
              <ProductContent productType="blinds" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Roller Blinds</h3>
                <p className="mb-3">Simple, elegant window coverings that roll up neatly, perfect for modern interiors and offering excellent light control.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/blinds/roller')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Venetian Blinds</h3>
                <p className="mb-3">Horizontal slats that can be tilted to control light and privacy, available in timber, aluminum, and PVC options.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/blinds/venetian')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Vertical Blinds</h3>
                <p className="mb-3">Vertical slats that draw to the side, ideal for sliding doors, large windows, and commercial applications.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/blinds/vertical')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Roman Blinds</h3>
                <p className="mb-3">Fabric blinds that fold up into neat horizontal pleats when raised, offering a softer, more luxurious look.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/blinds/roman')}
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

export default Blinds;
