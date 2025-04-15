
import { useState, useRef, useEffect } from "react";
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
  const [maxScroll, setMaxScroll] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Calculate maximum scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const maxScrollValue = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setMaxScroll(maxScrollValue);
    }
  }, [filteredProjects]);
  
  // Update scroll position when scrolling manually
  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };
  
  // Filter projects by tag
  const filterByTag = (tag: string | null) => {
    setSelectedFilter(tag);
    if (tag === null) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      ));
    }
  };

  // Extract all unique tags for filter buttons
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <section className="py-16 md:py-24 bg-stylegroup-lightgray">
      <div className="container">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="section-title heading-underline">Recent Projects</h2>
            <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl">
              See how our window furnishing solutions have transformed homes and businesses across Brisbane
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollLeft}
              disabled={scrollPosition <= 0}
              className={`p-2 rounded-full border border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy hover:text-white transition-colors ${scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollRight}
              disabled={scrollPosition >= maxScroll}
              className={`p-2 rounded-full border border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy hover:text-white transition-colors ${scrollPosition >= maxScroll ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Scroll right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-4">
          <button
            onClick={() => filterByTag(null)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === null 
                ? 'bg-stylegroup-green text-white' 
                : 'bg-white text-stylegroup-darkgray hover:bg-stylegroup-green/10'
            }`}
          >
            All Projects
          </button>
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => filterByTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === tag 
                  ? 'bg-stylegroup-green text-white' 
                  : 'bg-white text-stylegroup-darkgray hover:bg-stylegroup-green/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div 
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x"
          ref={scrollRef}
        >
          {filteredProjects.map((project) => (
            <Link 
              key={project.id}
              to={`/projects/${project.id}`}
              className="min-w-[280px] md:min-w-[400px] bg-white rounded-lg overflow-hidden shadow-md flex flex-col snap-start hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-serif text-xl mb-2 group-hover:text-stylegroup-green transition-colors">{project.title}</h3>
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
                <div 
                  className="text-stylegroup-navy group-hover:text-stylegroup-gold flex items-center gap-1.5 text-sm font-medium transition-colors mt-2"
                >
                  View Project <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
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
