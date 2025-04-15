
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    title: "Blinds",
    description: "Control light and privacy with our range of stylish blinds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/blinds",
    subcategories: [
      { name: "Roller Blinds", link: "/blinds/roller" },
      { name: "Venetian Blinds", link: "/blinds/venetian" },
      { name: "Vertical Blinds", link: "/blinds/vertical" },
      { name: "Roman Blinds", link: "/blinds/roman" },
    ]
  },
  {
    id: 2,
    title: "Shutters",
    description: "Add sophistication with custom-designed shutters",
    image: "https://images.unsplash.com/photo-1484287045238-4a106943f160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    link: "/shutters",
    subcategories: [
      { name: "Plantation Shutters", link: "/shutters/plantation" },
      { name: "Timber Shutters", link: "/shutters/timber" },
      { name: "Exterior Shutters", link: "/shutters/exterior" },
    ]
  },
  {
    id: 3,
    title: "Awnings",
    description: "Extend your outdoor living with quality awnings",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/awnings",
    subcategories: [
      { name: "Folding Arm Awnings", link: "/awnings/folding-arm" },
      { name: "Straight Drop Awnings", link: "/awnings/straight-drop" },
      { name: "Pivot Arm Awnings", link: "/awnings/pivot-arm" },
    ]
  },
  {
    id: 4,
    title: "Curtains",
    description: "Create warmth and elegance with premium curtains",
    image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/curtains",
    subcategories: [
      { name: "Sheer Curtains", link: "/curtains/sheer" },
      { name: "Blockout Curtains", link: "/curtains/blockout" },
      { name: "S-Fold Curtains", link: "/curtains/s-fold" },
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
            Explore our wide selection of premium window furnishings designed for the Brisbane climate
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
