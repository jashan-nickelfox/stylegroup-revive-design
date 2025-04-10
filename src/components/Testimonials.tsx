
import { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Ascot, Brisbane",
    rating: 5,
    text: "We couldn't be happier with our new plantation shutters. The team at Style Group was professional from start to finish. The measuring was precise, and the installation went perfectly. They transformed our home!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    project: "Plantation Shutters",
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "New Farm, Brisbane",
    rating: 5,
    text: "Outstanding service from the first phone call to the completed installation. I got motorized roller blinds for my apartment, and they work flawlessly with my smart home system. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    project: "Motorized Roller Blinds",
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Paddington, Brisbane",
    rating: 5,
    text: "The quality of the Roman blinds I purchased exceeded my expectations. The fabric is luxurious, and they look spectacular in my living room. The Style Group team was knowledgeable and helped me choose the perfect option.",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    project: "Roman Blinds",
  },
  {
    id: 4,
    name: "David Chen",
    location: "Hamilton, Brisbane",
    rating: 5,
    text: "As an architect, I appreciate attention to detail. Style Group delivered exactly what my client wanted for their new home - beautiful sheer curtains that create a stunning effect with the natural light. The installation was perfect.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    project: "Sheer Curtains",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index}
        className={`h-4 w-4 ${index < rating ? "text-stylegroup-gold fill-stylegroup-gold" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-stylegroup-navy text-white">
      <div className="container relative">
        <div className="absolute top-0 right-0 opacity-10">
          <Quote className="h-32 w-32" />
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4 relative inline-block mx-auto">
            What Our Clients Say
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-stylegroup-gold"></span>
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Read what Brisbane homeowners and businesses think about our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden border-4 border-stylegroup-gold h-48 w-48 mx-auto">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className="text-lg italic mb-4">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="font-serif text-xl mb-1">{testimonials[currentIndex].name}</div>
                <div className="text-white/80 text-sm mb-2">{testimonials[currentIndex].location}</div>
                <div className="text-stylegroup-gold text-sm">Project: {testimonials[currentIndex].project}</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-stylegroup-navy transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-stylegroup-navy transition-colors"
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
                    index === currentIndex ? 'bg-stylegroup-gold' : 'bg-white/30'
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
