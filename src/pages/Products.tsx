
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import ProductCategories from "@/components/ProductCategories";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

// Define product categories with descriptions and features
const productFeatures = [
  {
    category: "Quality Materials",
    description: "All our products are made from premium materials selected for durability and performance in the Queensland climate.",
    features: [
      "UV-resistant fabrics and finishes",
      "Moisture and humidity resistant components",
      "Fade-resistant colors and materials",
      "Premium hardware and mechanisms"
    ]
  },
  {
    category: "Expert Craftsmanship",
    description: "Every product is crafted with attention to detail and precision for exceptional quality and longevity.",
    features: [
      "Custom-made to your exact specifications",
      "Careful attention to detail and finish",
      "Precise installation by trained professionals",
      "Quality control at every stage of production"
    ]
  },
  {
    category: "Innovative Solutions",
    description: "We incorporate the latest technologies and design innovations for superior functionality.",
    features: [
      "Smart home integration options",
      "Motorized solutions for hard-to-reach windows",
      "Energy-efficient designs for climate control",
      "Child-safe operation mechanisms"
    ]
  }
];

const Products = () => {
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
            <h1 className="section-title text-center mb-4">Our Products</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Discover our complete range of premium window furnishing solutions, crafted specifically for the Brisbane climate and designed to enhance your home or business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Request a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
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
              {productFeatures.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                  <h3 className="text-xl font-medium text-stylegroup-green mb-4">{category.category}</h3>
                  <p className="text-stylegroup-darkgray mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-stylegroup-darkgray mb-6">
                All products come with comprehensive warranties and professional installation. 
                Our team is ready to help you select the perfect window furnishing solution for your home or business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={handleGetQuote}
                  className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                >
                  Request a Quote
                </Button>
                <Link to="/projects">
                  <Button 
                    variant="outline"
                    className="border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy/10"
                  >
                    View Projects Gallery
                  </Button>
                </Link>
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
