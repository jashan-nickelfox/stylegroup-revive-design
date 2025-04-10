
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Riverside Apartment",
    description: "Roller blinds and sheer curtains for this luxury riverside apartment",
    location: "New Farm, Brisbane",
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Residential", "Roller Blinds", "Sheer Curtains"],
  },
  {
    id: 2,
    title: "Modern Office",
    description: "Motorized blinds with smart home integration for a contemporary office space",
    location: "Brisbane CBD",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    tags: ["Commercial", "Motorized Blinds", "Smart Home"],
  },
  {
    id: 3,
    title: "Coastal Villa",
    description: "Plantation shutters and outdoor awnings for this beachside property",
    location: "Redcliffe, Brisbane",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Residential", "Plantation Shutters", "Awnings"],
  },
  {
    id: 4,
    title: "Medical Centre",
    description: "Vertical blinds and privacy solutions for this healthcare facility",
    location: "Chermside, Brisbane",
    image: "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    tags: ["Commercial", "Vertical Blinds", "Privacy Solutions"],
  },
];

const FeaturedProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
      setScrollPosition(scrollRef.current.scrollLeft - 320);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      setScrollPosition(scrollRef.current.scrollLeft + 320);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-stylegroup-lightgray">
      <div className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="section-title heading-underline">Recent Projects</h2>
            <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl">
              See how our window furnishing solutions have transformed homes and businesses across Brisbane
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full border border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full border border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div 
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x"
          ref={scrollRef}
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="min-w-[280px] md:min-w-[400px] bg-white rounded-lg overflow-hidden shadow-md flex flex-col snap-start"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                  <p className="text-stylegroup-darkgray text-sm mb-4">
                    {project.description}
                  </p>
                  <p className="text-stylegroup-darkgray text-sm mb-4">
                    <strong>Location:</strong> {project.location}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-stylegroup-lightgray px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  to={`/projects/${project.id}`}
                  className="text-stylegroup-navy hover:text-stylegroup-gold flex items-center gap-1.5 text-sm font-medium transition-colors mt-2"
                >
                  View Project <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy hover:text-white rounded-md transition-colors font-medium"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
