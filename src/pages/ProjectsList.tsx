
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Define the project data structure
const projects = [
  {
    id: "1",
    title: "Riverside Apartment",
    description: "Roller blinds and sheer curtains for this luxury riverside apartment",
    location: "New Farm, Brisbane",
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Residential",
    products: ["Roller Blinds", "Sheer Curtains"],
    tags: ["Residential", "Roller Blinds", "Sheer Curtains"],
  },
  {
    id: "2",
    title: "Modern Office",
    description: "Motorized blinds with smart home integration for a contemporary office space",
    location: "Brisbane CBD",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "Commercial",
    products: ["Motorized Blinds", "Smart Home Integration"],
    tags: ["Commercial", "Motorized Blinds", "Smart Home"],
  },
  {
    id: "3",
    title: "Coastal Villa",
    description: "Plantation shutters and outdoor awnings for this beachside property",
    location: "Redcliffe, Brisbane",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Residential",
    products: ["Plantation Shutters", "Outdoor Awnings"],
    tags: ["Residential", "Plantation Shutters", "Awnings"],
  },
  {
    id: "4",
    title: "Medical Centre",
    description: "Vertical blinds and privacy solutions for this healthcare facility",
    location: "Chermside, Brisbane",
    image: "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    category: "Commercial",
    products: ["Vertical Blinds", "Privacy Solutions"],
    tags: ["Commercial", "Vertical Blinds", "Privacy Solutions"],
  },
  {
    id: "5",
    title: "Heritage Hotel",
    description: "Custom curtains and wooden blinds for this heritage-listed hotel",
    location: "Spring Hill, Brisbane",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Commercial",
    products: ["Custom Curtains", "Wooden Blinds"],
    tags: ["Commercial", "Custom Curtains", "Wooden Blinds"],
  },
  {
    id: "6",
    title: "Modern Family Home",
    description: "Complete window covering solution for this contemporary family residence",
    location: "Paddington, Brisbane",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Residential",
    products: ["Roller Blinds", "Roman Blinds", "Curtains"],
    tags: ["Residential", "Roller Blinds", "Roman Blinds", "Curtains"],
  },
];

const ProjectsList = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };
  
  // Filter projects by category or product
  const filterProjects = (filter: string | null) => {
    setActiveFilter(filter);
    
    if (!filter) {
      setFilteredProjects(projects);
      return;
    }
    
    const filtered = projects.filter(project => 
      project.category === filter || project.products.includes(filter) || project.tags.includes(filter)
    );
    setFilteredProjects(filtered);
  };
  
  // Get unique categories and products for filters
  const categories = Array.from(new Set(projects.map(project => project.category)));
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Our Project Gallery</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Explore our portfolio of completed window furnishing projects across Brisbane and South East Queensland.
              Get inspired by our custom solutions for various residential and commercial spaces.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-4">
              <button
                onClick={() => filterProjects(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === null 
                    ? 'bg-stylegroup-green text-white' 
                    : 'bg-stylegroup-lightgray/30 text-stylegroup-darkgray hover:bg-stylegroup-green/10'
                }`}
              >
                All Projects
              </button>
              
              {categories.map((category, index) => (
                <button
                  key={`cat-${index}`}
                  onClick={() => filterProjects(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category 
                      ? 'bg-stylegroup-green text-white' 
                      : 'bg-stylegroup-lightgray/30 text-stylegroup-darkgray hover:bg-stylegroup-green/10'
                  }`}
                >
                  {category}
                </button>
              ))}
              
              {allTags.filter(tag => !categories.includes(tag)).map((tag, index) => (
                <button
                  key={`tag-${index}`}
                  onClick={() => filterProjects(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === tag 
                      ? 'bg-stylegroup-green text-white' 
                      : 'bg-stylegroup-lightgray/30 text-stylegroup-darkgray hover:bg-stylegroup-green/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-stylegroup-lightgray/30 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    className="aspect-video overflow-hidden cursor-pointer" 
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-stylegroup-green/10 text-stylegroup-green text-xs font-medium px-2.5 py-1 rounded mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-medium text-stylegroup-green mb-2">{project.title}</h3>
                    <p className="text-stylegroup-darkgray text-sm mb-2">{project.location}</p>
                    <p className="text-stylegroup-darkgray mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.products.map((product, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-white px-2 py-0.5 rounded"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      className="text-stylegroup-green font-medium flex items-center hover:underline"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-stylegroup-darkgray mb-4">No projects found with the selected filter.</p>
                <Button 
                  onClick={() => filterProjects(null)}
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                >
                  View All Projects
                </Button>
              </div>
            )}
            
            <div className="text-center mt-12">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Request a Similar Solution
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default ProjectsList;
