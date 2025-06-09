import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ProductContent from "@/components/ProductContent";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

const Awnings = () => {
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
            <h1 className="section-title text-center mb-8">Awnings</h1>
            
            <div className="mb-10">
              <ProductContent productSlug="awnings" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Folding Arm Awnings</h3>
                <p className="mb-3">Retractable awnings perfect for patios and outdoor entertaining areas, providing shade when needed and tucking away when not in use.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/awnings/folding-arm')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Straight Drop Awnings</h3>
                <p className="mb-3">Vertical awnings that drop straight down, ideal for blocking low sun angles and providing privacy for verandas and balconies.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/awnings/straight-drop')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Pivot Arm Awnings</h3>
                <p className="mb-3">Window awnings with arms that pivot outward, allowing airflow while providing shade and keeping the view partially visible.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/awnings/pivot-arm')}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Fixed Canopies</h3>
                <p className="mb-3">Permanent shade structures for windows, doorways, and outdoor areas, offering year-round protection from sun and rain.</p>
                <Button 
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                  onClick={() => navigate('/awnings/canopies')}
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
                Get Free Quote
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

export default Awnings;
