import { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id?: string;
  name: string;
  location?: string;
  rating: number;
  text: string;
  image: string;
}

const hardcodedTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "Ascot, Brisbane",
    rating: 5,
    text: "We couldn't be happier with our new plantation shutters. The team at Style Group was professional from start to finish. The measuring was precise, and the installation went perfectly. They transformed our home!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: "2",
    name: "Michael Thompson",
    location: "New Farm, Brisbane",
    rating: 5,
    text: "Outstanding service from the first phone call to the completed installation. I got motorized roller blinds for my apartment, and they work flawlessly with my smart home system. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: "3",
    name: "Emma Wilson",
    location: "Paddington, Brisbane",
    rating: 5,
    text: "The quality of the Roman blinds I purchased exceeded my expectations. The fabric is luxurious, and they look spectacular in my living room. The Style Group team was knowledgeable and helped me choose the perfect option.",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: "4",
    name: "David Chen",
    location: "Hamilton, Brisbane",
    rating: 5,
    text: "As an architect, I appreciate attention to detail. Style Group delivered exactly what my client wanted for their new home - beautiful sheer curtains that create a stunning effect with the natural light. The installation was perfect.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1287&q=80",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(hardcodedTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchSupabaseTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials]);

  const fetchSupabaseTestimonials = async () => {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .eq("is_active", true)
      .order("order_index", { ascending: true });

    if (!error && data) {
      const formatted = data.map((item) => ({
        id: item.id,
        name: item.customer_name,
        location: item.customer_company || item.customer_title || "Brisbane",
        rating: item.rating || 5,
        text: item.testimonial_text,
        image: item.image_url || "/default-avatar.jpg",
      }));

      // Append Supabase testimonials after static ones
      setTestimonials((prev) => [...prev, ...formatted]);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating
              ? "text-stylegroup-lightgreen fill-stylegroup-lightgreen"
              : "text-gray-300"
          }`}
        />
      ));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-stylegroup-green/95 text-white"
    >
      <div className="container relative">
        <div className="absolute top-0 right-0 opacity-10">
          <Quote className="h-32 w-32" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4 relative inline-block mx-auto">
            What Our Clients Say
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-stylegroup-lightgreen"></span>
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Read what Brisbane homeowners and businesses think about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-black/20 backdrop-blur-sm rounded-xl">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden border-4 border-stylegroup-lightgreen h-48 w-48 mx-auto">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex mb-2">{renderStars(current.rating)}</div>
                <blockquote className="text-lg italic mb-4">
                  "{current.text}"
                </blockquote>
                <div className="font-serif text-xl mb-1">{current.name}</div>
                {current.location && (
                  <div className="text-white/80 text-sm mb-1">{current.location}</div>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-white text-white hover:bg-stylegroup-lightgreen hover:border-stylegroup-lightgreen transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-white text-white hover:bg-stylegroup-lightgreen hover:border-stylegroup-lightgreen transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full mx-1 ${
                    index === currentIndex
                      ? "bg-stylegroup-lightgreen"
                      : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
