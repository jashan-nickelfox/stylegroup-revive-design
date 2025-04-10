
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stylegroup-navy text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif mb-6">
              Style<span className="text-stylegroup-gold">Group</span>
            </h3>
            <p className="mb-6 text-white/80">
              Brisbane's premier provider of quality window furnishings for residential and commercial clients.
            </p>
            <div className="space-y-3">
              <a href="tel:0733240900" className="flex items-center text-white/80 hover:text-stylegroup-gold">
                <Phone className="h-4 w-4 mr-3" />
                <span>07 3324 0900</span>
              </a>
              <a href="mailto:info@stylegroup.com.au" className="flex items-center text-white/80 hover:text-stylegroup-gold">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@stylegroup.com.au</span>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center text-white/80 hover:text-stylegroup-gold">
                <MapPin className="h-4 w-4 mr-3" />
                <span>123 Main St, Brisbane QLD</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Our Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> FAQs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-medium mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blinds" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Blinds
                </Link>
              </li>
              <li>
                <Link to="/shutters" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Shutters
                </Link>
              </li>
              <li>
                <Link to="/awnings" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Awnings
                </Link>
              </li>
              <li>
                <Link to="/curtains" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Curtains
                </Link>
              </li>
              <li>
                <Link to="/motorization" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Motorization
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-white/80 hover:text-stylegroup-gold flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Commercial Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours & Social Media */}
          <div>
            <h4 className="text-lg font-medium mb-6">Opening Hours</h4>
            <ul className="space-y-3 mb-6">
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
            
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-gold p-2.5 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-gold p-2.5 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-gold p-2.5 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-gold p-2.5 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Style Group. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-white/70">
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
