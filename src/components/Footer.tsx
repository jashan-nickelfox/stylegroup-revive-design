// FULL UPDATED FOOTER.TSX
import { Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    const fetchFooter = async () => {
      const { data, error } = await supabase
        .from("footer_content")
        .select("*")
        .limit(1)
        .single();

      if (error) {
        console.error("Error fetching footer:", error);
      } else {
        setFooterData(data);
      }
    };
    fetchFooter();
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollToSection: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookMeasure = () => {
    navigate("/contact", { state: { showBookingForm: true } });
  };

  const handleSubscribe = (e: any) => {
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
    toast({ title: "Success", description: "Thank you for subscribing!" });
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
              <a href={`tel:${footerData?.phone || "0733240900"}`} className="flex items-center text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out">
                <Phone className="h-4 w-4 mr-3" />
                <span>{footerData?.phone || "07 3324 0900"}</span>
              </a>
              <a href={`mailto:${footerData?.email || "info@stylegroup.com.au"}`} className="flex items-center text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out">
                <Mail className="h-4 w-4 mr-3" />
                <span>{footerData?.email || "info@stylegroup.com.au"}</span>
              </a>
              <Link to="/contact" className="flex items-center text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out">
                <MapPin className="h-4 w-4 mr-3" />
                <span>{footerData?.address || "123 Main St, Brisbane QLD"}</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Our Services</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Our Gallery</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Contact Us</Link></li>
              <li><Link to="/faqs" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> FAQs</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Blog</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-medium mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> All Products</Link></li>
              <li><Link to="/blinds" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Blinds</Link></li>
              <li><Link to="/shutters" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Shutters</Link></li>
              <li><Link to="/awnings" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Awnings</Link></li>
              <li><Link to="/commercial" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Commercial Solutions</Link></li>
              <li><Link to="/service-areas" className="text-white/80 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Service Areas</Link></li>
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href={footerData?.social_facebook || "https://facebook.com/StyleGroupQld"} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-lightgreen p-2.5 rounded-full transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href={footerData?.social_instagram || "https://instagram.com/StyleGroupQld"} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-lightgreen p-2.5 rounded-full transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href={footerData?.social_twitter || "https://twitter.com/StylePlantation"} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-lightgreen p-2.5 rounded-full transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href={footerData?.social_linkedin || "https://linkedin.com/company/stylegroup"} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-stylegroup-lightgreen p-2.5 rounded-full transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
            <h4 className="text-lg font-medium mt-6 mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {(footerData?.business_hours || `Monday - Friday: 8:30 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: 10.00 AM - 2.00 AM`)?.split("\n").map((line: string, i: number) => (
                <li className="flex justify-between" key={i}>
                  <span className="text-white/80">{line.split(":")[0]}:</span>
                  <span>{line.split(":").slice(1).join(":")}</span>
                </li>
              ))}
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