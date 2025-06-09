
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  category: string;
  intro: string;
  image_url: string;
  slug: string;
  order_index: number;
}

const ProductCategories = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('products-changes-frontend')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'products'
        },
        () => {
          console.log('Products changed, refetching...');
          fetchProducts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true });

      if (error) {
        console.error('Error fetching products:', error);
        return;
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetQuote = () => {
    navigate("/", { state: { scrollToSection: "quote" } });
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center heading-underline mx-auto">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
              Explore our wide selection of premium window furnishings designed
              for the Brisbane climate
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-center heading-underline mx-auto">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
            Explore our wide selection of premium window furnishings designed
            for the Brisbane climate
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/${product.slug}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image_url || '/placeholder.svg'}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif font-bold text-2xl mb-2 transition-transform group-hover:-translate-y-1">
                    {product.name}
                  </h3>
                  <p className="font-bold text-white mb-4 text-sm">
                    {product.intro}
                  </p>
                  <div className="text-white group-hover:text-white flex items-center gap-1.5 text-sm font-medium transition-all group-hover:translate-x-1">
                    Explore {product.name}{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 text-center">
          <Link
            to="/products"
            className="inline-flex items-center bg-stylegroup-green text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-stylegroup-green/90 gap-2 font-medium"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>

          <Button
            onClick={handleGetQuote}
            variant="outline"
            className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10 transform hover:scale-105 transition-all duration-300"
          >
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
