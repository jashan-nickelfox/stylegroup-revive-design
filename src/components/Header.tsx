
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
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:0733240900" className="flex items-center hover:text-stylegroup-lightgreen" aria-label="Call our office">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>07 3324 0900</span>
            </a>
            <a href="mailto:info@stylegroup.com.au" className="hidden md:flex items-center hover:text-stylegroup-lightgreen" aria-label="Email us">
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              <span>info@stylegroup.com.au</span>
            </a>
            <Link to="/contact" className="hidden md:flex items-center hover:text-stylegroup-lightgreen cursor-pointer">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              <span>Brisbane, QLD</span>
            </Link>
          </div>
          <div>
            <Button 
              variant="link" 
              className="text-white text-sm hover:text-stylegroup-lightgreen p-0" 
              onClick={handleBookMeasure}
              aria-label="Book a free measure and quote"
            >
              Book Free Measure
            </Button>
          </div>
        </div>
      </div>
      
      <div className={`container py-4 flex justify-between items-center`}>
        <Link to="/" className="flex items-center" aria-label="Style Group - Home">
          <img 
            src="https://www.stylegroup.com.au/wp-content/uploads/2015/06/Style-Group-Logo1-300x82.jpg" 
            alt="Style Group" 
            className="h-10 md:h-12 w-auto"
          />
        </Link>
        
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-stylegroup-green">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3">
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/products"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-stylegroup-lightgreen/50 to-stylegroup-green p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            All Products
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Browse our complete collection of premium products
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    
                    {/* Flooring */}
                    <li>
                      <h3 className="font-medium mb-2 text-stylegroup-green">🧱 Flooring</h3>
                      <ul className="space-y-1.5">
                        <ProductNavLink to="/flooring/hybrid">Hybrid Flooring</ProductNavLink>
                        <ProductNavLink to="/flooring/bamboo">Bamboo Flooring</ProductNavLink>
                        <ProductNavLink to="/flooring/laminate">Laminate Flooring</ProductNavLink>
                        <ProductNavLink to="/flooring/timber">Timber Selections</ProductNavLink>
                        <ProductNavLink to="/flooring/gallery">Flooring Gallery</ProductNavLink>
                        <ProductNavLink to="/flooring/care">Floor Care</ProductNavLink>
                      </ul>
                    </li>
                    
                    {/* Blinds */}
                    <li>
                      <h3 className="font-medium mb-2 text-stylegroup-green">🪟 Blinds</h3>
                      <ul className="space-y-1.5">
                        <ProductNavLink to="/blinds/roller">Roller Blinds</ProductNavLink>
                        <ProductNavLink to="/blinds/honeycomb">Honeycomb Blinds</ProductNavLink>
                        <ProductNavLink to="/blinds/panel-glide">Panel Glide Blinds</ProductNavLink>
                        <ProductNavLink to="/blinds/vertical">Vertical Blinds</ProductNavLink>
                        <ProductNavLink to="/blinds/venetian">Venetian Blinds</ProductNavLink>
                        <ProductNavLink to="/blinds/roman">Roman Blinds</ProductNavLink>
                        <ProductNavLink to="/blinds/sheer-vision">Sheer Vision Blinds</ProductNavLink>
                        <ProductNavLink to="/blinds/gallery">Blinds Gallery</ProductNavLink>
                      </ul>
                    </li>
                    
                    {/* Shutters */}
                    <li>
                      <h3 className="font-medium mb-2 text-stylegroup-green">🚪 Shutters</h3>
                      <ul className="space-y-1.5">
                        <ProductNavLink to="/shutters/composite">Composite Shutters</ProductNavLink>
                        <ProductNavLink to="/shutters/synthetic">Synthetic Shutters</ProductNavLink>
                        <ProductNavLink to="/shutters/plantation">Plantation Timber Shutters</ProductNavLink>
                        <ProductNavLink to="/shutters/aluminium">Aluminium Shutters</ProductNavLink>
                        <ProductNavLink to="/shutters/gallery">Shutters Gallery</ProductNavLink>
                      </ul>
                    </li>
                    
                    {/* Awnings */}
                    <li>
                      <h3 className="font-medium mb-2 text-stylegroup-green">🌞 Awnings</h3>
                      <ul className="space-y-1.5">
                        <ProductNavLink to="/awnings/roller-style">Roller-style Awnings</ProductNavLink>
                        <ProductNavLink to="/awnings/folding-arm">Folding Arm Awnings</ProductNavLink>
                        <ProductNavLink to="/awnings/ziptrak">Ziptrak® Awnings</ProductNavLink>
                        <ProductNavLink to="/awnings/gallery">Awnings Gallery</ProductNavLink>
                      </ul>
                    </li>
                    
                    {/* Aluminium Screens */}
                    <li>
                      <h3 className="font-medium mb-2 text-stylegroup-green">🛡️ Aluminium Screens</h3>
                      <ul className="space-y-1.5">
                        <ProductNavLink to="/aluminium-screens/gallery">Aluminium Shutters & Screens Gallery</ProductNavLink>
                        <ProductNavLink to="/aluminium-screens/shutters">Aluminium Shutters</ProductNavLink>
                      </ul>
                    </li>
                    
                    {/* Security Barriers */}
                    <li>
                      <h3 className="font-medium mb-2 text-stylegroup-green">🔐 Security Barriers</h3>
                      <ul className="space-y-1.5">
                        <ProductNavLink to="/security-barriers/crimsafe">Crimsafe</ProductNavLink>
                        <ProductNavLink to="/security-barriers/pleated-screens">Pleated Screens</ProductNavLink>
                        <ProductNavLink to="/security-barriers/retractable-flyscreens">Retractable Flyscreens</ProductNavLink>
                      </ul>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/services" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-stylegroup-green">
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/projects" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-stylegroup-green">
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-stylegroup-green">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-stylegroup-green">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-stylegroup-green">
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
                    <div className="mt-2 ml-4 space-y-3">
                      <div>
                        <h4 className="font-medium text-stylegroup-green mb-1">🧱 Flooring</h4>
                        <ul className="ml-3 space-y-1">
                          <li><Link to="/flooring/hybrid" className="block py-1 text-sm">Hybrid Flooring</Link></li>
                          <li><Link to="/flooring/bamboo" className="block py-1 text-sm">Bamboo Flooring</Link></li>
                          <li><Link to="/flooring/laminate" className="block py-1 text-sm">Laminate Flooring</Link></li>
                          <li><Link to="/flooring/timber" className="block py-1 text-sm">Timber Selections</Link></li>
                          <li><Link to="/flooring/gallery" className="block py-1 text-sm">Flooring Gallery</Link></li>
                          <li><Link to="/flooring/care" className="block py-1 text-sm">Floor Care</Link></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-stylegroup-green mb-1">🪟 Blinds</h4>
                        <ul className="ml-3 space-y-1">
                          <li><Link to="/blinds/roller" className="block py-1 text-sm">Roller Blinds</Link></li>
                          <li><Link to="/blinds/honeycomb" className="block py-1 text-sm">Honeycomb Blinds</Link></li>
                          <li><Link to="/blinds/panel-glide" className="block py-1 text-sm">Panel Glide Blinds</Link></li>
                          <li><Link to="/blinds/vertical" className="block py-1 text-sm">Vertical Blinds</Link></li>
                          <li><Link to="/blinds/venetian" className="block py-1 text-sm">Venetian Blinds</Link></li>
                          <li><Link to="/blinds/roman" className="block py-1 text-sm">Roman Blinds</Link></li>
                          <li><Link to="/blinds/sheer-vision" className="block py-1 text-sm">Sheer Vision Blinds</Link></li>
                          <li><Link to="/blinds/gallery" className="block py-1 text-sm">Blinds Gallery</Link></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-stylegroup-green mb-1">🚪 Shutters</h4>
                        <ul className="ml-3 space-y-1">
                          <li><Link to="/shutters/composite" className="block py-1 text-sm">Composite Shutters</Link></li>
                          <li><Link to="/shutters/synthetic" className="block py-1 text-sm">Synthetic Shutters</Link></li>
                          <li><Link to="/shutters/plantation" className="block py-1 text-sm">Plantation Timber Shutters</Link></li>
                          <li><Link to="/shutters/aluminium" className="block py-1 text-sm">Aluminium Shutters</Link></li>
                          <li><Link to="/shutters/gallery" className="block py-1 text-sm">Shutters Gallery</Link></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-stylegroup-green mb-1">🌞 Awnings</h4>
                        <ul className="ml-3 space-y-1">
                          <li><Link to="/awnings/roller-style" className="block py-1 text-sm">Roller-style Awnings</Link></li>
                          <li><Link to="/awnings/folding-arm" className="block py-1 text-sm">Folding Arm Awnings</Link></li>
                          <li><Link to="/awnings/ziptrak" className="block py-1 text-sm">Ziptrak® Awnings</Link></li>
                          <li><Link to="/awnings/gallery" className="block py-1 text-sm">Awnings Gallery</Link></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-stylegroup-green mb-1">🛡️ Aluminium Screens</h4>
                        <ul className="ml-3 space-y-1">
                          <li><Link to="/aluminium-screens/gallery" className="block py-1 text-sm">Aluminium Shutters & Screens Gallery</Link></li>
                          <li><Link to="/aluminium-screens/shutters" className="block py-1 text-sm">Aluminium Shutters</Link></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-stylegroup-green mb-1">🔐 Security Barriers</h4>
                        <ul className="ml-3 space-y-1">
                          <li><Link to="/security-barriers/crimsafe" className="block py-1 text-sm">Crimsafe</Link></li>
                          <li><Link to="/security-barriers/pleated-screens" className="block py-1 text-sm">Pleated Screens</Link></li>
                          <li><Link to="/security-barriers/retractable-flyscreens" className="block py-1 text-sm">Retractable Flyscreens</Link></li>
                        </ul>
                      </div>
                      
                      <div>
                        <Link to="/products" className="block font-medium text-stylegroup-navy py-1">View All Products</Link>
                      </div>
                    </div>
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

const ProductNavLink = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="block text-sm py-1.5 text-stylegroup-darkgray hover:text-stylegroup-green transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

// This is a modified version of the ProductLink component to fit the new navigation design
const ProductLink = ({ to, title, children }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stylegroup-lightgray/30 hover:text-stylegroup-green"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
