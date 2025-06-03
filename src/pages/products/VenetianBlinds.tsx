
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Check, ArrowRight } from "lucide-react";

const VenetianBlinds = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  const features = [
    "Precision-engineered slats for smooth tilting and lifting",
    "Available in aluminum, timber, and PVC materials",
    "25mm and 50mm slat sizes to suit different window styles",
    "Extensive color range including wood grain finishes",
    "Durable powder-coated aluminum for Queensland climate",
    "Easy-clean surfaces for low maintenance",
    "Child-safe cord and wand operation options",
    "Custom-made for perfect fit and operation"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="section-title text-center mb-4">Venetian Blinds</h1>
              <p className="text-lg text-stylegroup-darkgray max-w-3xl mx-auto">
                Experience precise light control and privacy with our premium Venetian blinds. 
                Available in aluminum, timber, and PVC, they offer versatile style options for any space in your Brisbane home.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src="https://www.stylegroup.com.au/wp-content/uploads/2015/06/image_0003_63972-Venetian-1-Medium-300x244.jpg"
                  alt="Quality Venetian blinds with precise light control"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Precision Light Control</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Venetian blinds offer unmatched versatility in light control and privacy management. 
                  With horizontal slats that can be tilted to your desired angle, you can direct light exactly where you want it 
                  while maintaining privacy. Our range includes premium materials suited to Brisbane's climate conditions.
                </p>
                
                <h3 className="text-lg font-medium text-stylegroup-navy mb-4">Key Features:</h3>
                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-3 mt-0.5" />
                      <span className="text-stylegroup-darkgray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleGetQuote}
                    className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white transition-all duration-300"
                  >
                    Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    onClick={handleBookMeasure}
                    variant="outline"
                    className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 transition-all duration-300"
                  >
                    Book Free Measure
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Aluminum Venetians</h3>
                <p className="text-stylegroup-darkgray">Durable and lightweight with powder-coated finishes, perfect for high-humidity areas like bathrooms.</p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Timber Venetians</h3>
                <p className="text-stylegroup-darkgray">Natural wood beauty with excellent insulation properties, ideal for living areas and bedrooms.</p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3 text-stylegroup-green">PVC Venetians</h3>
                <p className="text-stylegroup-darkgray">Moisture-resistant and easy to clean, perfect for kitchens and high-traffic areas.</p>
              </div>
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

export default VenetianBlinds;
