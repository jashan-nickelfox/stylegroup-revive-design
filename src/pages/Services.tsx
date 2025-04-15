
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
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
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Our Services</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              From consultation to installation, Style Group provides comprehensive window furnishing services for residential and commercial clients across Brisbane.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Request a Free Quote
              </Button>
              <Button
                onClick={handleBookMeasure}
                variant="outline"
                className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
              >
                Book Free Measure
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-medium text-stylegroup-green mb-6">Expert Consultation</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Our experienced consultants will help you select the perfect window furnishings for your home or business. We consider your specific needs, style preferences, and budget to provide tailored recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>Personalized in-home consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>Expert product knowledge and advice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>Material and fabric samples available</span>
                  </li>
                </ul>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Consultation service" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45249ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Installation service" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-medium text-stylegroup-green mb-6">Professional Installation</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Our skilled installers ensure your window furnishings are perfectly fitted, functioning correctly, and looking their best. We take care of everything, from delivery to installation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>Experienced and trained installers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>Clean and efficient installation process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>Full demonstration of operation and care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-stylegroup-green text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-medium mb-6">Ready to Transform Your Windows?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80">
              Contact Style Group today to schedule a free consultation and discover how our window furnishing solutions can enhance your space.
            </p>
            <Button 
              onClick={handleBookMeasure} 
              size="lg" 
              className="bg-white text-stylegroup-green hover:bg-stylegroup-lightgray"
            >
              Book Your Free Measure <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default Services;
