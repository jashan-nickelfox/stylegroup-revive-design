
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    title: "Flooring",
    description: "Quality flooring solutions for your home or business",
    image: "https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    link: "/flooring",
    subcategories: [
      { name: "Hybrid Flooring", link: "/flooring/hybrid" },
      { name: "Bamboo Flooring", link: "/flooring/bamboo" },
      { name: "Laminate Flooring", link: "/flooring/laminate" },
      { name: "Timber Selections", link: "/flooring/timber" },
      { name: "Flooring Gallery", link: "/flooring/gallery" },
      { name: "Floor Care", link: "/flooring/care" },
    ]
  },
  {
    id: 2,
    title: "Blinds",
    description: "Control light and privacy with our range of stylish blinds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/blinds",
    subcategories: [
      { name: "Roller Blinds", link: "/blinds/roller" },
      { name: "Honeycomb Blinds", link: "/blinds/honeycomb" },
      { name: "Panel Glide Blinds", link: "/blinds/panel-glide" },
      { name: "Vertical Blinds", link: "/blinds/vertical" },
      { name: "Venetian Blinds", link: "/blinds/venetian" },
      { name: "Roman Blinds", link: "/blinds/roman" },
      { name: "Sheer Vision Blinds", link: "/blinds/sheer-vision" },
      { name: "Blinds Gallery", link: "/blinds/gallery" },
    ]
  },
  {
    id: 3,
    title: "Shutters",
    description: "Add sophistication with custom-designed shutters",
    image: "https://images.unsplash.com/photo-1484287045238-4a106943f160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    link: "/shutters",
    subcategories: [
      { name: "Composite Shutters", link: "/shutters/composite" },
      { name: "Synthetic Shutters", link: "/shutters/synthetic" },
      { name: "Plantation Timber Shutters", link: "/shutters/plantation" },
      { name: "Aluminium Shutters", link: "/shutters/aluminium" },
      { name: "Shutters Gallery", link: "/shutters/gallery" },
    ]
  },
  {
    id: 4,
    title: "Awnings",
    description: "Extend your outdoor living with quality awnings",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/awnings",
    subcategories: [
      { name: "Roller-style Awnings", link: "/awnings/roller-style" },
      { name: "Folding Arm Awnings", link: "/awnings/folding-arm" },
      { name: "Ziptrak® Awnings", link: "/awnings/ziptrak" },
      { name: "Awnings Gallery", link: "/awnings/gallery" },
    ]
  },
  {
    id: 5,
    title: "Aluminium Screens",
    description: "Enhance protection and privacy with aluminium screens",
    image: "https://images.unsplash.com/photo-1575323878242-c32f0578a3fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    link: "/aluminium-screens",
    subcategories: [
      { name: "Aluminium Shutters & Screens Gallery", link: "/aluminium-screens/gallery" },
      { name: "Aluminium Shutters", link: "/aluminium-screens/shutters" },
    ]
  },
  {
    id: 6,
    title: "Security Barriers",
    description: "Protect your home with reliable security solutions",
    image: "https://images.unsplash.com/photo-1600450887237-700c12c6d46b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    link: "/security-barriers",
    subcategories: [
      { name: "Crimsafe", link: "/security-barriers/crimsafe" },
      { name: "Pleated Screens", link: "/security-barriers/pleated-screens" },
      { name: "Retractable Flyscreens", link: "/security-barriers/retractable-flyscreens" },
    ]
  },
];

const ProductCategories = () => {
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-center heading-underline mx-auto">Our Products</h2>
          <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
            Explore our wide selection of premium products designed for the Brisbane climate
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link to={category.link} className="block">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif text-2xl mb-2 transition-transform group-hover:-translate-y-1">{category.title}</h3>
                  <p className="text-white/80 mb-4 text-sm">{category.description}</p>
                  <div 
                    className="text-stylegroup-lightgreen group-hover:text-white flex items-center gap-1.5 text-sm font-medium transition-all group-hover:translate-x-1"
                  >
                    Explore {category.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
              
              {/* Dropdown menu for subcategories */}
              <div className="absolute bottom-0 left-0 right-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                <div className="p-4">
                  <h4 className="font-medium text-stylegroup-green mb-2 text-sm">Popular {category.title}</h4>
                  <ul className="space-y-2">
                    {category.subcategories.map((subcategory, idx) => (
                      <li key={idx}>
                        <Link 
                          to={subcategory.link}
                          className="text-stylegroup-darkgray hover:text-stylegroup-green text-sm flex items-center gap-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-stylegroup-lightgreen"></span>
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link 
                        to={category.link}
                        className="text-stylegroup-navy font-medium text-sm flex items-center mt-2"
                      >
                        View All {category.title} <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center bg-stylegroup-green hover:bg-stylegroup-green/90 text-white px-6 py-3 rounded-md transition-colors gap-2 font-medium"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
          <Button 
            onClick={handleGetQuote}
            variant="outline"
            className="ml-4 border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
