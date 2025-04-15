
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };
  
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.classList.add('overflow-hidden');
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.classList.remove('overflow-hidden');
  };

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Modern Apartment Blinds",
      location: "New Farm, Brisbane",
      description: "Custom roller blinds installation for a modern apartment with floor-to-ceiling windows.",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      category: "Blinds",
      products: ["Roller Blinds", "Motorized Blinds"],
    },
    {
      id: 2,
      title: "Hampton Style Home Shutters",
      location: "Ascot, Brisbane",
      description: "Plantation shutters installation throughout a classic Hampton style home.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Shutters",
      products: ["Plantation Shutters", "PVC Shutters"],
    },
    {
      id: 3,
      title: "Luxury Home Curtains",
      location: "Hamilton, Brisbane",
      description: "Custom sheer and blockout curtains for a luxury riverfront home.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Curtains",
      products: ["Sheer Curtains", "S-Fold Curtains", "Blockout Curtains"],
    },
    {
      id: 4,
      title: "Outdoor Living Awnings",
      location: "Bulimba, Brisbane",
      description: "Folding arm awnings for an outdoor entertainment area.",
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Awnings",
      products: ["Folding Arm Awnings", "Outdoor Blinds"],
    },
    {
      id: 5,
      title: "Office Building Blinds",
      location: "Brisbane CBD",
      description: "Commercial blinds installation for a multi-level office building.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Commercial",
      products: ["Vertical Blinds", "Roller Blinds", "Motorized Systems"],
    },
    {
      id: 6,
      title: "Eco-Friendly Home Blinds",
      location: "Paddington, Brisbane",
      description: "Sustainable blinds installation for an eco-conscious home renovation.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Blinds",
      products: ["Bamboo Blinds", "Honeycomb Blinds"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Our Project Gallery</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Explore our portfolio of completed window furnishing projects across Brisbane and South East Queensland.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-stylegroup-lightgray/30 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden cursor-pointer" onClick={() => openModal(project)}>
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
                    <p className="text-stylegroup-darkgray text-sm mb-4">{project.location}</p>
                    <p className="text-stylegroup-darkgray mb-4">{project.description}</p>
                    <button 
                      className="text-stylegroup-green font-medium flex items-center hover:underline"
                      onClick={() => openModal(project)}
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
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
        
        {/* Project Modal */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b">
                <h2 className="text-2xl font-medium text-stylegroup-green">{selectedProject.title}</h2>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-stylegroup-lightgray/30"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-medium text-stylegroup-green mb-4">Project Details</h3>
                    <p className="text-stylegroup-darkgray mb-6">{selectedProject.description}</p>
                    <p className="text-stylegroup-darkgray mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
                    </p>
                    <div className="mb-6">
                      <h4 className="font-medium text-stylegroup-darkgray mb-2">Products Used:</h4>
                      <ul className="list-disc list-inside space-y-1 text-stylegroup-darkgray">
                        {selectedProject.products.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      onClick={handleGetQuote}
                      className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                    >
                      Request a Similar Solution
                    </Button>
                  </div>
                  <div>
                    <div className="bg-stylegroup-lightgray p-6 rounded-lg">
                      <h3 className="text-xl font-medium text-stylegroup-green mb-4">Project Info</h3>
                      <div className="space-y-4 text-stylegroup-darkgray">
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p>{selectedProject.location}</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Category</h4>
                          <p>{selectedProject.category}</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Completion</h4>
                          <p>2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default Projects;
