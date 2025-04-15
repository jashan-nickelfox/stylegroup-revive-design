
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Blinds",
    description: "Control light and privacy with our range of stylish blinds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/blinds",
  },
  {
    id: 2,
    title: "Shutters",
    description: "Add sophistication with custom-designed shutters",
    image: "https://images.unsplash.com/photo-1484287045238-4a106943f160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    link: "/shutters",
  },
  {
    id: 3,
    title: "Awnings",
    description: "Extend your outdoor living with quality awnings",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/awnings",
  },
  {
    id: 4,
    title: "Curtains",
    description: "Create warmth and elegance with premium curtains",
    image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/curtains",
  },
];

const ProductCategories = () => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (link) => {
    navigate(link);
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
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleCategoryClick(category.link)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-2xl mb-2">{category.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{category.description}</p>
                <div 
                  className="text-stylegroup-lightgreen hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors"
                >
                  Explore {category.title} <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
