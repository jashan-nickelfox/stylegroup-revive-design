
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  intro: string;
  features: string[];
  image_url: string;
  slug: string;
}

interface ProductContentProps {
  productSlug: string;
  showImage?: boolean;
  className?: string;
}

const ProductContent: React.FC<ProductContentProps> = ({
  productSlug,
  showImage = true,
  className = "",
}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [productSlug]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', productSlug)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
        return;
      }

      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`product-content ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded mb-6"></div>
          {showImage && <div className="h-48 bg-gray-200 rounded mb-6"></div>}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={`product-content ${className}`}>
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className={`product-content ${className}`}>
      <h2 className="text-2xl font-medium text-stylegroup-green mb-3">
        {product.name}
      </h2>
      <p className="text-stylegroup-darkgray mb-6">{product.description || product.intro}</p>

      {showImage && product.image_url && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-auto object-cover aspect-[16/9]"
          />
        </div>
      )}

      {product.features && product.features.length > 0 && (
        <>
          <h3 className="text-lg font-medium text-stylegroup-navy mb-3">
            Key Features:
          </h3>
          <ul className="mb-6 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-stylegroup-green shrink-0 mr-2 mt-0.5" />
                <span className="text-stylegroup-darkgray">{feature}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <Link to={`/${product.slug}`}>
        <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default ProductContent;
