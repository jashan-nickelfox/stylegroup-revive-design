
import { useState } from "react";
import { Phone, X, MessageSquare } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-24 z-40">
      <div className={`bg-white shadow-lg rounded-lg mb-4 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="p-4">
          <h4 className="font-medium text-stylegroup-navy mb-3">Contact Us</h4>
          <div className="space-y-3">
            <a 
              href="tel:0733240900" 
              className="flex items-center text-stylegroup-darkgray hover:text-stylegroup-navy"
            >
              <Phone className="h-4 w-4 mr-3" />
              <span>07 3324 0900</span>
            </a>
            <a 
              href="/quote" 
              className="bg-stylegroup-navy text-white py-2 px-4 rounded-md block text-center hover:bg-opacity-90 transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? 'bg-stylegroup-navy text-white' : 'bg-stylegroup-gold text-stylegroup-navy'
        }`}
        aria-label={isOpen ? 'Close contact panel' : 'Open contact panel'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingContact;
