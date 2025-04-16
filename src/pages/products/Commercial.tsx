
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import ProductContent from "@/components/ProductContent";
import { Button } from "@/components/ui/button";
import { Building2, Factory, Store, School, Building, Hotel, Check } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const Commercial = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  // Commercial sectors we service
  const commercialSectors = [
    {
      name: "Office Buildings",
      icon: <Building2 className="h-10 w-10 text-stylegroup-green mb-4" />,
      description: "Custom window treatments for corporate environments, focusing on glare reduction, energy efficiency, and professional aesthetics."
    },
    {
      name: "Retail Spaces",
      icon: <Store className="h-10 w-10 text-stylegroup-green mb-4" />,
      description: "Enhance your store's ambiance and protect merchandise from sun damage with our specialized retail solutions."
    },
    {
      name: "Healthcare Facilities",
      icon: <Building className="h-10 w-10 text-stylegroup-green mb-4" />,
      description: "Antimicrobial fabrics and easy-clean options designed specifically for medical environments and patient comfort."
    },
    {
      name: "Educational Institutions",
      icon: <School className="h-10 w-10 text-stylegroup-green mb-4" />,
      description: "Durable, low-maintenance window coverings that improve classroom environments and learning conditions."
    },
    {
      name: "Hospitality Industry",
      icon: <Hotel className="h-10 w-10 text-stylegroup-green mb-4" />,
      description: "Elevate guest experience with premium window treatments that combine functionality with sophisticated design."
    },
    {
      name: "Industrial Facilities",
      icon: <Factory className="h-10 w-10 text-stylegroup-green mb-4" />,
      description: "Heavy-duty solutions for warehouses, factories, and industrial spaces focusing on durability and functionality."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Commercial Solutions</h1>
            
            <div className="mb-10">
              <ProductContent productType="awnings" />
            </div>
            
            <div className="my-12">
              <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Commercial Sectors We Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commercialSectors.map((sector, index) => (
                  <div key={index} className="bg-stylegroup-lightgray/30 rounded-lg p-6 text-center">
                    <div className="flex justify-center">{sector.icon}</div>
                    <h3 className="text-lg font-medium mb-3">{sector.name}</h3>
                    <p className="text-sm text-stylegroup-darkgray">{sector.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="my-12">
              <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Commercial Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Energy Efficiency</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                      <span>Reduce cooling costs by up to 30% with solar control fabrics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                      <span>Improve insulation during winter with thermal options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                      <span>Automated systems that respond to changing light conditions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Employee Comfort</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                      <span>Eliminate glare on computer screens and workspaces</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                      <span>Maintain comfortable temperatures throughout the day</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                      <span>Create pleasant work environments with natural light control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Request Commercial Quote
              </Button>
              <Button 
                onClick={handleBookMeasure}
                variant="outline"
                className="border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy/10"
              >
                Book Site Visit
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

export default Commercial;
