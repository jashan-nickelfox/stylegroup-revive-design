
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CallToAction from "@/components/CallToAction";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SheerCurtains = () => {
  const navigate = useNavigate();
  
  const handleConsultationClick = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Sheer Curtains</h1>
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="Elegant sheer curtains" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Sheer curtains add an elegant touch of sophistication to any room while allowing natural light to filter through. Made from lightweight, translucent fabrics, they provide a soft, diffused glow during the day and gentle privacy at night.
              </p>
              <h2 className="text-2xl font-medium text-stylegroup-green mt-8 mb-4">Features & Benefits</h2>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Softly filters harsh sunlight while maintaining views</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Creates an airy, light atmosphere in any room</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Available in a wide range of fabrics, textures, and colors</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Can be paired with blockout curtains for complete light control</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-stylegroup-lightgreen/20 text-stylegroup-green p-1 rounded mr-3 mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Perfect for living rooms, dining areas, and bedrooms</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-medium text-stylegroup-green mt-8 mb-4">Our Sheer Curtain Options</h2>
              <p className="mb-6">
                At Style Group, we offer a comprehensive range of sheer curtain options to suit any home or commercial space. Our collection includes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3 text-stylegroup-green">S-Fold Sheers</h3>
                  <p>Contemporary wave-like folds that create a modern, clean look with flowing curves.</p>
                </div>
                <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Pinch Pleat Sheers</h3>
                  <p>Classic elegance with tailored pleats that add sophistication to formal spaces.</p>
                </div>
                <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Eyelet Sheers</h3>
                  <p>Simple rings that allow curtains to hang with deep, uniform folds for a casual look.</p>
                </div>
                <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3 text-stylegroup-green">Rod Pocket Sheers</h3>
                  <p>Traditional style with a channel sewn into the curtain header for a gathered appearance.</p>
                </div>
              </div>
              
              <div className="mt-10 mb-8 text-center">
                <Button 
                  size="lg" 
                  className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                  onClick={handleConsultationClick}
                >
                  Book a Free Consultation
                </Button>
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

export default SheerCurtains;
