
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

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
            <a href="tel:0733240900" className="flex items-center hover:text-stylegroup-lightgreen">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>07 3324 0900</span>
            </a>
            <a href="mailto:info@stylegroup.com.au" className="hidden md:flex items-center hover:text-stylegroup-lightgreen">
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
            >
              Book Free Measure
            </Button>
          </div>
        </div>
      </div>
      
      <div className={`container py-4 flex justify-between items-center`}>
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-stylegroup-green">
            Style<span className="text-stylegroup-lightgreen">Group</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8">
            <li className="group relative">
              <button className="flex items-center font-medium hover:text-stylegroup-green">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full transform -translate-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 bg-white shadow-lg rounded-md min-w-[200px] z-10">
                <div className="py-2">
                  <Link to="/blinds" className="block px-4 py-2 hover:bg-stylegroup-lightgray">Blinds</Link>
                  <Link to="/shutters" className="block px-4 py-2 hover:bg-stylegroup-lightgray">Shutters</Link>
                  <Link to="/awnings" className="block px-4 py-2 hover:bg-stylegroup-lightgray">Awnings</Link>
                  <Link to="/curtains" className="block px-4 py-2 hover:bg-stylegroup-lightgray">Curtains</Link>
                  <Link to="/motorization" className="block px-4 py-2 hover:bg-stylegroup-lightgray">Motorization</Link>
                  <Link to="/commercial" className="block px-4 py-2 hover:bg-stylegroup-lightgray">Commercial</Link>
                </div>
              </div>
            </li>
            <li className="group relative">
              <Link to="/projects" className="font-medium hover:text-stylegroup-green">Gallery</Link>
            </li>
            <li className="group relative">
              <Link to="/about" className="font-medium hover:text-stylegroup-green">About</Link>
            </li>
            <li className="group relative">
              <Link to="/blog" className="font-medium hover:text-stylegroup-green">Blog</Link>
            </li>
            <li className="group relative">
              <Link to="/faqs" className="font-medium hover:text-stylegroup-green">FAQs</Link>
            </li>
            <li className="group relative">
              <Link to="/contact" className="font-medium hover:text-stylegroup-green">Contact</Link>
            </li>
          </ul>
        </nav>
        
        <div className="hidden lg:block">
          <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white" onClick={handleGetQuote}>Get Free Quote</Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 rounded-md text-stylegroup-green" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
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
                  <Link to="/projects" className="block font-medium">Gallery</Link>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/about" className="block font-medium">About</Link>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/blog" className="block font-medium">Blog</Link>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/faqs" className="block font-medium">FAQs</Link>
                </li>
                <li className="border-b border-stylegroup-lightgray pb-2">
                  <Link to="/contact" className="block font-medium">Contact</Link>
                </li>
              </ul>
              <div className="mt-6">
                <Button 
                  className="w-full bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                  onClick={handleGetQuote}
                >
                  Get Free Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
