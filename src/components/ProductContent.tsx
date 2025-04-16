
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from 'lucide-react';

// Define the product content data structure
const productContents = {
  blinds: {
    title: "Blinds",
    intro: "Our extensive range of quality blinds combines functionality with style to perfectly suit Brisbane's climate. From roller blinds to venetians, we offer solutions for every window and need.",
    features: [
      "UV protection options for Queensland's harsh sunlight",
      "Moisture-resistant materials for bathrooms and humid areas",
      "Child-safe cordless operation available on all styles",
      "Energy-efficient options to reduce cooling costs",
      "Custom-made to fit any window size or shape"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/blinds"
  },
  curtains: {
    title: "Curtains",
    intro: "Our premium curtain collection offers elegant window dressing solutions that transform any room with texture, color, and style. From sheer curtains that filter light to blockout options for privacy.",
    features: [
      "Wide range of designer fabrics and patterns",
      "Custom-made to your exact measurements",
      "S-fold, pencil pleat, and wave heading styles",
      "Lined options for enhanced insulation",
      "Motorized operation available for all curtain styles"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    link: "/curtains"
  },
  shutters: {
    title: "Shutters",
    intro: "Our plantation shutters add a timeless elegance to any home while providing superior light control and privacy. Available in timber, PVC, and aluminum options to suit every environment.",
    features: [
      "Highly durable and built to withstand Queensland weather",
      "Available in a range of colors and finishes",
      "Low maintenance and easy to clean",
      "Superior insulation properties for energy efficiency",
      "Custom-made to fit any window size or shape"
    ],
    image: "https://images.unsplash.com/photo-1600607688960-3b18f6adf79d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/shutters"
  },
  awnings: {
    title: "Commercial Awnings",
    intro: "Our commercial awning solutions provide weather protection and brand visibility for businesses across Brisbane. From folding arm awnings to fixed canopies, we create custom solutions for every commercial need.",
    features: [
      "Durable materials designed for Queensland's extreme weather",
      "Custom branding and signage options available",
      "Motorized systems with wind and rain sensors",
      "Wide range of fabrics with UV protection",
      "Professional installation and maintenance services"
    ],
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/awnings"
  },
  motorization: {
    title: "Motorization",
    intro: "Transform your window furnishings with our smart motorization solutions. Control your blinds, curtains, or awnings with the touch of a button, voice command, or automated schedules.",
    features: [
      "Compatible with major smart home systems like Google Home and Alexa",
      "Solar-powered options available for eco-friendly operation",
      "Smartphone control through dedicated apps",
      "Programmable schedules for energy efficiency",
      "Battery and hardwired solutions available"
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/motorization"
  }
};

interface ProductContentProps {
  productType: 'blinds' | 'curtains' | 'shutters' | 'awnings' | 'motorization';
  showImage?: boolean;
  className?: string;
}

const ProductContent: React.FC<ProductContentProps> = ({ 
  productType, 
  showImage = true,
  className = "" 
}) => {
  const content = productContents[productType];
  
  if (!content) return null;
  
  return (
    <div className={`product-content ${className}`}>
      <h2 className="text-2xl font-medium text-stylegroup-green mb-3">{content.title}</h2>
      <p className="text-stylegroup-darkgray mb-6">{content.intro}</p>
      
      {showImage && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img 
            src={content.image} 
            alt={content.title} 
            className="w-full h-auto object-cover aspect-[16/9]" 
          />
        </div>
      )}
      
      <h3 className="text-lg font-medium text-stylegroup-navy mb-3">Key Features:</h3>
      <ul className="mb-6 space-y-2">
        {content.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
            <span className="text-stylegroup-darkgray">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link to={content.link}>
        <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default ProductContent;
