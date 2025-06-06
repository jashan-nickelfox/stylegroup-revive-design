import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "../assets/Style-Group-Logo1-300x82-removebg-preview.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollToSection: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleGetQuote = () => {
    scrollToSection("quote");
  };

  const handleBookMeasure = () => {
    navigate("/contact", { state: { showBookingForm: true } });
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-stylegroup-green text-white py-1.5">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6 text-base">
            <a
              href="tel:0733240900"
              className="idden md:flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
              aria-label="Call our office"
            >
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>(07) 3712 0200</span>
            </a>
            <a
              href="mailto:info@stylegroup.com.au"
              className="idden md:flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
              aria-label="Email us"
            >
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              <span>brisbane@stylegroup.com.au</span>
            </a>
            <Link
              to="/contact"
              className="hidden md:flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              <span>Brisbane, QLD</span>
            </Link>
          </div>
          <div>
            <Button
              variant="link"
              className="text-white text-base hover: p-0 transition-colors duration-300"
              onClick={handleBookMeasure}
              aria-label="Book a free measure and quote"
            >
              Book Free Measure
            </Button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center h-full"
          aria-label="Style Group - Home"
        >
          <img src={logo} alt="Style Group" className="h-10 md:h-14 w-auto" />
        </Link>

        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <Link
                to="/crimsafe"
                className="block mr-5 text-center"
                aria-label="Go to Crimsafe page"
              >
                <img
                  src="https://www.stylegroup.com.au/wp-content/themes/enfold-child/assets/images/crimsafe-authorised-dealer-badge.png"
                  alt="Crimsafe Authorized Dealer"
                  className="mx-auto h-12 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-base hover:text-stylegroup-green transition-colors duration-300">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/products"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-stylegroup-lightgreen/50 to-stylegroup-green p-6 no-underline outline-none focus:shadow-md transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            All Products
                          </div>
                          <p className="text-base leading-tight text-white/90">
                            Browse our complete collection of premium window
                            furnishings
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ProductLink to="/blinds" title="Blinds">
                      Control light and privacy with our quality blinds
                    </ProductLink>
                    <ProductLink to="/shutters" title="Shutters">
                      Add sophistication with custom-designed shutters
                    </ProductLink>
                    <ProductLink to="/awnings" title="Awnings">
                      Extend your outdoor living with quality awnings
                    </ProductLink>
                    <ProductLink to="/curtains" title="Aluminium Screens">
                      Enhance both the security and style of your space
                    </ProductLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {["services", "projects", "about", "blog", "contact"].map(
                (item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={`/${item}`}
                        className="group inline-flex h-10 items-center px-4 py-2 text-base font-medium hover:text-stylegroup-lightgreen hover:underline capitalize transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop quote button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            className="bg-stylegroup-green text-white font-medium px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:bg-stylegroup-green/90 hover:shadow-lg"
            onClick={handleGetQuote}
            aria-label="Get a free quote"
          >
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-stylegroup-green transition-colors duration-300 hover:bg-stylegroup-green/10"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40 overflow-hidden">
          <div className="container py-4">
            <nav>
              <ul className="space-y-4">
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-medium">
                      Products
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>
                        <Link to="/products" className="block py-1 hover:text-stylegroup-green transition-colors duration-300">
                          All Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/blinds" className="block py-1 hover:text-stylegroup-green transition-colors duration-300">
                          Blinds
                        </Link>
                      </li>
                      <li>
                        <Link to="/shutters" className="block py-1 hover:text-stylegroup-green transition-colors duration-300">
                          Shutters
                        </Link>
                      </li>
                      <li>
                        <Link to="/awnings" className="block py-1 hover:text-stylegroup-green transition-colors duration-300">
                          Awnings
                        </Link>
                      </li>
                      <li>
                        <Link to="/curtains" className="block py-1 hover:text-stylegroup-green transition-colors duration-300">
                          Curtains
                        </Link>
                      </li>
                      <li>
                        <Link to="/commercial" className="block py-1 hover:text-stylegroup-green transition-colors duration-300">
                          Commercial
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                {["services", "projects", "about", "blog", "contact"].map(
                  (item) => (
                    <li
                      key={item}
                      className="border-b border-stylegroup-lightgray pb-2"
                    >
                      <Link
                        to={`/${item}`}
                        className="block font-medium capitalize hover:text-stylegroup-green transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-6 space-y-3">
                <Button
                  className="w-full bg-stylegroup-green hover:bg-stylegroup-green/90 text-white transition-all duration-300"
                  onClick={handleGetQuote}
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 transition-all duration-300"
                  onClick={handleBookMeasure}
                >
                  Book Free Measure
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const ProductLink = ({ to, title, children }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        to={to}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-300 hover:bg-stylegroup-lightgray/30 hover:text-stylegroup-green"
      >
        <div className="text-base font-medium">{title}</div>
        <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
);

export default Header;
