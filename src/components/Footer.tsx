
import { Link, useNavigate } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowRight,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <footer className="bg-stylegroup-green text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif mb-6">
              Style<span className="text-stylegroup-lightgreen">Group</span>
            </h3>
            <p className="mb-6 text-white/80">
              Brisbane's premier provider of quality window furnishings for residential and commercial clients.
            </p>
            <div className="space-y-3">
              <a href="tel:0733240900" className="flex items-center text-white/80 hover:text-stylegroup-lightgreen" aria-label="Call our office">
                <Phone className="h-4 w-4 mr-3" />
                <span>07 3324 0900</span>
              </a>
              <a href="mailto:info@stylegroup.com.au" className="flex items-center text-white/80 hover:text-stylegroup-lightgreen" aria-label="Email us">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@stylegroup.com.au</span>
              </a>
              <Link to="/contact" className="flex items-center text-white/80 hover:text-stylegroup-lightgreen cursor-pointer">
                <MapPin className="h-4 w-4 mr-3" />
                <span>123 Main St, Brisbane QLD</span>
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Our Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> FAQs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Blog
                </Link>
              </li>
              <li>
                <div onClick={() => scrollToSection('quote')} className="text-white/80 hover:text-stylegroup-lightgreen flex items-center cursor-pointer">
                  <ArrowRight className="h-3 w-3 mr-2" /> Get a Quote
                </div>
              </li>
              <li>
                <div onClick={handleBookMeasure} className="text-white/80 hover:text-stylegroup-lightgreen flex items-center cursor-pointer">
                  <ArrowRight className="h-3 w-3 mr-2" /> Book Free Measure
                </div>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-medium mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> All Products
                </Link>
              </li>
              <li>
                <Link to="/blinds" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Blinds
                </Link>
              </li>
              <li>
                <Link to="/shutters" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Shutters
                </Link>
              </li>
              <li>
                <Link to="/awnings" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Awnings
                </Link>
              </li>
              <li>
                <Link to="/curtains" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Curtains
                </Link>
              </li>
              <li>
                <Link to="/motorization" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Motorization
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Commercial Solutions
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-white/80 hover:text-stylegroup-lightgreen flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Service Areas
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter & Social Media */}
          <div>
            {/* <h4 className="text-lg font-medium mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for the latest updates and promotions.</p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-stylegroup-lightgreen"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email for newsletter"
                />
                <Button type="submit" className="bg-stylegroup-lightgreen hover:bg-stylegroup-lightgreen/90 text-white">
                  Subscribe
                </Button>
              </div>
            </form> */}
            
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/StyleGroupQld" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-lightgreen p-2.5 rounded-full transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/StyleGroupQld/" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-lightgreen p-2.5 rounded-full transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/StylePlantation" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-lightgreen p-2.5 rounded-full transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/stylegroup" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-lightgreen p-2.5 rounded-full transition-colors" aria-label="Follow us on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <h4 className="text-lg font-medium mt-6 mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-white/80">Monday - Friday:</span>
                <span>8:30 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Saturday:</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Style Group. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-white/70">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
