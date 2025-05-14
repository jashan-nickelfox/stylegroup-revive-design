import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

// Define the product content data structure
const productContents = {
  blinds: {
    title: "Blinds",
    intro:
      "Our extensive range of quality blinds combines functionality with style to perfectly suit Brisbane's climate. From roller blinds to venetians, we offer solutions for every window and need.",
    features: [
      "UV protection options for Queensland's harsh sunlight",
      "Moisture-resistant materials for bathrooms and humid areas",
      "Child-safe cordless operation available on all styles",
      "Energy-efficient options to reduce cooling costs",
      "Custom-made to fit any window size or shape",
    ],
    image:
      "https://www.stylegroup.com.au/wp-content/uploads/2015/06/image_0003_63972-Venetian-1-Medium-300x244.jpg",
    link: "/blinds",
  },
  curtains: {
    title: "Aluminium Screens",
    intro:
      "Enhance both the security and style of your space with our high-quality aluminium screens. Designed to offer durability, privacy, and airflow, these screens are perfect for modern Australian homes and commercial spaces.",
    features: [
      "Custom-designed to fit windows, doors, or outdoor areas",
      "Durable, corrosion-resistant aluminium construction",
      "Powder-coated finishes available in various colours",
      "Modern laser-cut or slatted design options",
      "Ideal for privacy, shading, and security applications",
    ],
    image:
      "https://www.stylegroup.com.au/wp-content/uploads/2015/06/Calypso-102-300x225.jpg",
    link: "/curtains",
  },
  shutters: {
    title: "Shutters",
    intro:
      "Our plantation shutters add a timeless elegance to any home while providing superior light control and privacy. Available in timber, PVC, and aluminum options to suit every environment.",
    features: [
      "Highly durable and built to withstand Queensland weather",
      "Available in a range of colors and finishes",
      "Low maintenance and easy to clean",
      "Superior insulation properties for energy efficiency",
      "Custom-made to fit any window size or shape",
    ],
    image:
      "https://www.stylegroup.com.au/wp-content/uploads/2015/06/heritance_truview_living_3-536x1030.jpg",
    link: "/shutters",
  },
  awnings: {
    title: "Commercial Awnings",
    intro:
      "Our commercial awning solutions provide weather protection and brand visibility for businesses across Brisbane. From folding arm awnings to fixed canopies, we create custom solutions for every commercial need.",
    features: [
      "Durable materials designed for Queensland's extreme weather",
      "Custom branding and signage options available",
      "Motorized systems with wind and rain sensors",
      "Wide range of fabrics with UV protection",
      "Professional installation and maintenance services",
    ],
    image:
      "https://www.stylegroup.com.au/wp-content/uploads/2015/06/IMG_5005-300x225.jpg",
    link: "/awnings",
  },
};

interface ProductContentProps {
  productType: "blinds" | "curtains" | "shutters" | "awnings" | "motorization";
  showImage?: boolean;
  className?: string;
}

const ProductContent: React.FC<ProductContentProps> = ({
  productType,
  showImage = true,
  className = "",
}) => {
  const content = productContents[productType];

  if (!content) return null;

  return (
    <div className={`product-content ${className}`}>
      <h2 className="text-2xl font-medium text-stylegroup-green mb-3">
        {content.title}
      </h2>
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

      <h3 className="text-lg font-medium text-stylegroup-navy mb-3">
        Key Features:
      </h3>
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
