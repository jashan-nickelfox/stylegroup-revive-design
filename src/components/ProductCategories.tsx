import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    title: "Blinds",
    description: "Control light and privacy with our range of stylish blinds",
    image:
      "https://www.stylegroup.com.au/wp-content/uploads/2015/06/image_0002_64377-Blinds-2.jpg",
    link: "/blinds",
    subcategories: [
      { name: "Roller Blinds", link: "/blinds/roller" },
      { name: "Roman Blinds", link: "/blinds/roman" },
      { name: "Venetian Blinds", link: "/blinds/venetian" },
      { name: "Vertical Blinds", link: "/blinds/vertical" },
      { name: "Panel Glide Blinds", link: "/blinds/panel-glides" },
      { name: "Honeycomb Blinds", link: "/blinds/honeycomb" },
    ],
  },
  {
    id: 2,
    title: "Shutters",
    description: "Add sophistication with custom-designed shutters",
    image:
      "https://www.stylegroup.com.au/wp-content/uploads/2015/06/heritance_truview_living_3-536x1030.jpg",
    link: "/shutters",
    subcategories: [
      { name: "Aluminium Shutters Gallery", link: "/shutters/aluminium-gallery" },
      { name: "Aluminium Screens", link: "/shutters/aluminium-screens" },
      { name: "Plantation Shutters", link: "/shutters/plantation" },
      { name: "Timber Shutters", link: "/shutters/timber" },
      { name: "PVC Shutters", link: "/shutters/pvc" },
      { name: "Exterior Shutters", link: "/shutters/exterior" },
    ],
  },
  {
    id: 3,
    title: "Awnings",
    description: "Extend your outdoor living with quality awnings",
    image:
      "	https://www.stylegroup.com.au/wp-content/uploads/2015/06/IMG_5005-300x225.jpg",
    link: "/awnings",
    subcategories: [
      { name: "Folding Arm Awnings", link: "/awnings/folding-arm" },
      { name: "Straight Drop Awnings", link: "/awnings/straight-drop" },
      { name: "Pivot Arm Awnings", link: "/awnings/pivot-arm" },
      { name: "Fixed Canopies", link: "/awnings/fixed-canopies" },
    ],
  },
  {
    id: 4,
    title: "Aluminium Screens",
    description: "Enhance both the security and style of space",
    image:
      "https://www.stylegroup.com.au/wp-content/uploads/2015/06/Calypso-102-300x225.jpg",
    link: "/curtains",
    subcategories: [
      { name: "Sheer Curtains", link: "/curtains/sheer" },
      { name: "Blockout Curtains", link: "/curtains/blockout" },
    ],
  },
];

const ProductCategories = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate("/", { state: { scrollToSection: "quote" } });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-center heading-underline mx-auto">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
            Explore our wide selection of premium window furnishings designed
            for the Brisbane climate
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif font-bold text-2xl mb-2 transition-transform group-hover:-translate-y-1">
                    {category.title}
                  </h3>
                  <p className="font-bold text-white mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="text-white group-hover:text-white flex items-center gap-1.5 text-sm font-medium transition-all group-hover:translate-x-1">
                    Explore {category.title}{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              {/* Dropdown menu for subcategories */}
              <div className="absolute bottom-0 left-0 right-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                <div className="p-4">
                  <h4 className="font-medium text-stylegroup-green mb-2 text-sm">
                    Popular {category.title}
                  </h4>
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
                        View All {category.title}{" "}
                        <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 text-center">
          <Link
            to="/products"
            className="inline-flex items-center bg-stylegroup-green text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-stylegroup-green/90 gap-2 font-medium"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>

          <Button
            onClick={handleGetQuote}
            variant="outline"
            className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 transform hover:scale-105 transition-all duration-300"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
