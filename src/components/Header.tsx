import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
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
import logo from '../assets/Style-Group-Logo1-300x82-removebg-preview.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleGetQuote = () => {
    scrollToSection('quote');
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  return (
    <header className={`w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50`}>
      <div className="bg-stylegroup-green text-white py-1.5">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6 text-base">
            <a href="tel:0733240900" className="flex items-center hover:text-stylegroup-lightgreen" aria-label="Call our office">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>(07) 3712 0200</span>
            </a>
            <a href="mailto:info@stylegroup.com.au" className="hidden md:flex items-center hover:text-stylegroup-lightgreen" aria-label="Email us">
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              <span>brisbane@stylegroup.com.au</span>
            </a>
            <Link to="/contact" className="hidden md:flex items-center hover:text-stylegroup-lightgreen cursor-pointer">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              <span>Brisbane, QLD</span>
            </Link>
          </div>
          <div>
            <Button 
              variant="link" 
              className="text-white text-base hover:text-stylegroup-lightgreen p-0" 
              onClick={handleBookMeasure}
              aria-label="Book a free measure and quote"
            >
              Book Free Measure
            </Button>
          </div>
        </div>
      </div>
      
      <div className={`container py-4 flex justify-between items-center`}>
        <Link to="/" className="flex items-center h-full" aria-label="Style Group - Home">
          <img 
            src={logo}
            alt="Style Group" 
            className="h-10 md:h-14 w-auto"
          />
        </Link>
        
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-base hover:text-stylegroup-green">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/products"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-stylegroup-lightgreen/50 to-stylegroup-green p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            All Products
                          </div>
                          <p className="text-base leading-tight text-white/90">
                            Browse our complete collection of premium window furnishings
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
                    <ProductLink to="/curtains" title="Curtains">
                      Create warmth and elegance with premium curtains
                    </ProductLink>
                    <ProductLink to="/motorization" title="Motorization">
                      Smart home solutions for window furnishings
                    </ProductLink>
                    <ProductLink to="/commercial" title="Commercial">
                      Custom solutions for business and commercial spaces
                    </ProductLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/services" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:text-stylegroup-green">
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/projects" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:text-stylegroup-green">
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:text-stylegroup-green">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:text-stylegroup-green">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:text-stylegroup-green">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="hidden lg:block">
          <Button 
            className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white" 
            onClick={handleGetQuote}
            aria-label="Get a free quote"
          >
            Get Free Quote
          </Button>
        </div>
        
        <button 
          className="lg:hidden p-2 rounded-md text-stylegroup-green" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
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
                      <li><Link to="/products" className="block py-1">All Products</Link></li>
                      <li><Link to="/blinds" className="block py-1">Blinds</Link></li>
                      <li><Link to="/shutters" className="block py-1">Shutters</Link></li>
                      <li><Link to="/awnings" className="block py-1">Awnings</Link></li>
                      <li><Link to="/curtains" className="block py-1">Curtains</Link></li>
                      <li><Link to="/motorization" className="block py-1">Motorization</Link></li>
                      <li><Link to="/commercial" className="block py-1">Commercial</Link></li>
                    </ul>
                  </details>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/services" className="block font-medium">Services</Link>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/projects" className="block font-medium">Gallery</Link>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/about" className="block font-medium">About</Link>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/blog" className="block font-medium">Blog</Link>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/contact" className="block font-medium">Contact</Link>
                </li>
              </ul>
              <div className="mt-6 space-y-3">
                <Button 
                  className="w-full bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                  onClick={handleGetQuote}
                >
                  Get Free Quote
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
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

const ProductLink = ({ to, title, children }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stylegroup-lightgray/30 hover:text-stylegroup-green"
        >
          <div className="text-base font-medium">{title}</div>
          <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
