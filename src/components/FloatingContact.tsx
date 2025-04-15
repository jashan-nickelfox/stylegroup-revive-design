
import { useState } from "react";
import { Phone, X, MessageSquare, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToQuote = () => {
    setIsOpen(false);
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToSection: 'quote' } });
    }
  };
  
  const handlePhoneClick = () => {
    // Just close the panel, the default behavior (calling the number) will happen
    setIsOpen(false);
  };
  
  const handleEmailClick = () => {
    setIsOpen(false);
  };
  
  const handleBookingClick = () => {
    setIsOpen(false);
    navigate('/contact', { state: { showBookingForm: true } });
  };

  return (
    <div className="fixed right-6 bottom-24 z-40">
      <div className={`bg-white shadow-lg rounded-lg mb-4 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="p-4">
          <h4 className="font-medium text-stylegroup-green mb-3">Contact Us</h4>
          <div className="space-y-3">
            <a 
              href="tel:0733240900" 
              className="flex items-center text-stylegroup-darkgray hover:text-stylegroup-green"
              onClick={handlePhoneClick}
              aria-label="Call our office"
            >
              <Phone className="h-4 w-4 mr-3" />
              <span>07 3324 0900</span>
            </a>
            <a 
              href="mailto:info@stylegroup.com.au" 
              className="flex items-center text-stylegroup-darkgray hover:text-stylegroup-green"
              onClick={handleEmailClick}
              aria-label="Email us"
            >
              <Mail className="h-4 w-4 mr-3" />
              <span>info@stylegroup.com.au</span>
            </a>
            <Button 
              onClick={scrollToQuote}
              className="bg-stylegroup-green text-white py-2 px-4 rounded-md block text-center hover:bg-opacity-90 transition-colors w-full"
              aria-label="Request a quote"
            >
              Request Quote
            </Button>
            <Button 
              onClick={handleBookingClick}
              variant="outline"
              className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 w-full"
              aria-label="Book a free measure"
            >
              Book Free Measure
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? 'bg-stylegroup-green text-white' : 'bg-stylegroup-lightgreen text-stylegroup-green'
        }`}
        aria-label={isOpen ? 'Close contact panel' : 'Open contact panel'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingContact;
