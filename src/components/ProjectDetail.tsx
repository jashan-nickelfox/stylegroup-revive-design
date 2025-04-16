
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define the data structure for project details
const projects = [
  {
    id: "1",
    title: "Riverside Apartment",
    description: "Roller blinds and sheer curtains for this luxury riverside apartment",
    location: "New Farm, Brisbane",
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    tags: ["Residential", "Roller Blinds", "Sheer Curtains"],
    overview: "Complete window furnishing solution for a luxury apartment with floor-to-ceiling windows offering panoramic river views.",
    challenge: "The client needed a solution that would provide privacy and light control without obstructing the stunning river views.",
    solution: "We installed motorized roller blinds with sunscreen fabric that allows views out while reducing glare and heat. Sheer S-fold curtains were added for an extra layer of privacy and to soften the contemporary interior.",
    scope: "Supply and installation of motorized roller blinds and S-fold sheer curtains throughout the entire apartment.",
    products: ["Motorized Roller Blinds", "Sheer S-Fold Curtains", "Somfy Smart Home Integration"],
    completion: "2023",
    relatedProjects: ["2", "3"]
  },
  {
    id: "2",
    title: "Modern Office",
    description: "Motorized blinds with smart home integration for a contemporary office space",
    location: "Brisbane CBD",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    tags: ["Commercial", "Motorized Blinds", "Smart Home"],
    overview: "Smart office solution featuring automated window treatments that respond to light and temperature conditions.",
    challenge: "The client needed to reduce glare on computer screens while maintaining natural light and views in their open-plan office.",
    solution: "We implemented a fully automated blind system that adjusts throughout the day based on sun position and temperature sensors, optimizing light levels and energy efficiency.",
    scope: "Installation of Somfy-powered motorized blinds with smartphone control across three floors of office space.",
    products: ["Motorized Roller Blinds", "Light and Temperature Sensors", "Smartphone Control System"],
    completion: "2022",
    relatedProjects: ["4", "5"]
  },
  {
    id: "3",
    title: "Coastal Villa",
    description: "Plantation shutters and outdoor awnings for this beachside property",
    location: "Redcliffe, Brisbane",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    tags: ["Residential", "Plantation Shutters", "Awnings"],
    overview: "Complete interior and exterior window treatment solution for a luxury beachfront property exposed to harsh coastal elements.",
    challenge: "The client needed window coverings that could withstand salt air and strong coastal winds while complementing their Hamptons-inspired home.",
    solution: "We installed PVC plantation shutters for all interior windows and motorized folding arm awnings with wind sensors for outdoor areas.",
    scope: "Custom PVC plantation shutters for all interior windows and folding arm awnings for outdoor entertainment areas.",
    products: ["PVC Plantation Shutters", "Motorized Folding Arm Awnings", "Wind Sensors"],
    completion: "2023",
    relatedProjects: ["1", "6"]
  },
  {
    id: "4",
    title: "Medical Centre",
    description: "Vertical blinds and privacy solutions for this healthcare facility",
    location: "Chermside, Brisbane",
    image: "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    tags: ["Commercial", "Vertical Blinds", "Privacy Solutions"],
    overview: "Specialized privacy and light control solution for a busy medical center with specific hygiene and confidentiality requirements.",
    challenge: "The medical center needed window coverings that were easy to clean, antimicrobial, and provided complete privacy for examination rooms.",
    solution: "We installed antimicrobial vertical blinds in examination rooms and privacy film on reception area windows to ensure patient confidentiality.",
    scope: "Anti-bacterial vertical blinds for examination rooms and frosted film privacy solutions for reception and waiting areas.",
    products: ["Antimicrobial Vertical Blinds", "Privacy Window Film", "Light Filtering Roller Blinds"],
    completion: "2023",
    relatedProjects: ["2", "5"]
  },
  {
    id: "5",
    title: "Heritage Hotel",
    description: "Custom curtains and wooden blinds for this heritage-listed hotel",
    location: "Spring Hill, Brisbane",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    tags: ["Commercial", "Custom Curtains", "Wooden Blinds"],
    overview: "Period-appropriate window treatments for a heritage-listed hotel that required maintaining historical character while meeting modern standards.",
    challenge: "The client needed window coverings that complemented the hotel's 1920s architecture while providing modern functionality and meeting heritage regulations.",
    solution: "We created custom-made curtains in period-appropriate fabrics and wooden venetian blinds that matched the hotel's original wood finishes.",
    scope: "Design and installation of custom draperies for public areas and wooden venetian blinds for 45 guest rooms.",
    products: ["Custom Draperies", "Wooden Venetian Blinds", "Pinch Pleat Curtains"],
    completion: "2022",
    relatedProjects: ["2", "4"]
  },
  {
    id: "6",
    title: "Modern Family Home",
    description: "Complete window covering solution for this contemporary family residence",
    location: "Paddington, Brisbane",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1615529162638-f8230e5c9ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    tags: ["Residential", "Roller Blinds", "Roman Blinds", "Curtains"],
    overview: "Mix of window treatments to suit different rooms and functions in a large family home with varied privacy and light control needs.",
    challenge: "The family needed different window covering solutions for various rooms - maximum privacy in bedrooms, light control in living areas, and moisture resistance in wet areas.",
    solution: "We provided a tailored solution for each room: blockout roller blinds in bedrooms, light-filtering roman blinds in living spaces, and water-resistant vertical blinds in bathrooms.",
    scope: "Supply and installation of multiple window covering types throughout a two-story, five-bedroom home.",
    products: ["Blockout Roller Blinds", "Light Filtering Roman Blinds", "Sheer Curtains", "PVC Vertical Blinds"],
    completion: "2023",
    relatedProjects: ["1", "3"]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Find the project by ID
  const project = projects.find(p => p.id === id);
  
  // If project doesn't exist, show error
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-32">
          <div className="container py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
              <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
              <Button 
                onClick={() => navigate('/projects')}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <BackToTop />
        <FloatingContact />
      </div>
    );
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.gallery.length - 1 : prevIndex - 1
    );
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Style Group Project: ${project.title}`,
        text: project.overview,
        url: window.location.href,
      })
      .catch(() => {
        toast({
          title: "Sharing failed",
          description: "Could not share this project",
          variant: "destructive",
        });
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Project link copied to clipboard",
      });
    }
  };
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <button 
                onClick={() => navigate('/projects')}
                className="flex items-center text-stylegroup-green hover:underline mr-auto"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to All Projects
              </button>
              <button 
                onClick={handleShare}
                className="flex items-center text-stylegroup-navy hover:text-stylegroup-green"
                aria-label="Share this project"
              >
                <Share2 className="h-4 w-4 mr-1" /> Share
              </button>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-medium text-stylegroup-green mb-3">{project.title}</h1>
            <p className="text-lg text-stylegroup-darkgray mb-8">{project.location}</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="relative aspect-[16/9] bg-stylegroup-lightgray rounded-lg overflow-hidden">
                  <img 
                    src={project.gallery[currentImageIndex]} 
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {project.gallery.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white text-stylegroup-darkgray hover:text-stylegroup-green"
                        aria-label="Previous image"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white text-stylegroup-darkgray hover:text-stylegroup-green"
                        aria-label="Next image"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {project.gallery.map((_, index) => (
                          <button 
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full ${
                              currentImageIndex === index ? 'bg-stylegroup-green' : 'bg-white/70 hover:bg-white'
                            }`}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-stylegroup-lightgray px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-6 mt-6">
                  <h2 className="text-xl font-medium text-stylegroup-green">Project Overview</h2>
                  <p className="text-stylegroup-darkgray">{project.overview}</p>
                  
                  <h2 className="text-xl font-medium text-stylegroup-green">The Challenge</h2>
                  <p className="text-stylegroup-darkgray">{project.challenge}</p>
                  
                  <h2 className="text-xl font-medium text-stylegroup-green">Our Solution</h2>
                  <p className="text-stylegroup-darkgray">{project.solution}</p>
                </div>
              </div>
              
              <div>
                <div className="bg-stylegroup-lightgray p-6 rounded-lg mb-6">
                  <h2 className="text-xl font-medium text-stylegroup-green mb-4">Project Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-stylegroup-darkgray">Location</h3>
                      <p>{project.location}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-stylegroup-darkgray">Completion</h3>
                      <p>{project.completion}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-stylegroup-darkgray">Scope of Work</h3>
                      <p>{project.scope}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-stylegroup-darkgray">Products Used</h3>
                      <ul className="list-disc list-inside space-y-1 text-stylegroup-darkgray">
                        {project.products.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleGetQuote}
                    className="w-full mt-6 bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                  >
                    Request a Similar Solution
                  </Button>
                </div>
                
                {project.relatedProjects && project.relatedProjects.length > 0 && (
                  <div>
                    <h2 className="text-xl font-medium text-stylegroup-green mb-4">Related Projects</h2>
                    <div className="space-y-4">
                      {project.relatedProjects.map((relatedId) => {
                        const relatedProject = projects.find(p => p.id === relatedId);
                        if (!relatedProject) return null;
                        
                        return (
                          <div 
                            key={relatedId}
                            className="flex gap-3 items-center bg-white p-3 rounded-lg border border-stylegroup-lightgray hover:border-stylegroup-green cursor-pointer transition-colors"
                            onClick={() => navigate(`/projects/${relatedId}`)}
                          >
                            <div className="w-16 h-16 rounded overflow-hidden shrink-0">
                              <img 
                                src={relatedProject.image} 
                                alt={relatedProject.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{relatedProject.title}</h3>
                              <p className="text-sm text-stylegroup-darkgray truncate">{relatedProject.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="border-t border-stylegroup-lightgray pt-8 mt-8">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <p className="text-stylegroup-darkgray mb-2">Inspired by this project?</p>
                  <h3 className="text-lg font-medium">Let's create your perfect window solution</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    onClick={handleGetQuote}
                    className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                  >
                    Request a Quote
                  </Button>
                  <Button 
                    onClick={() => navigate('/projects')}
                    variant="outline"
                    className="border-stylegroup-navy text-stylegroup-navy hover:bg-stylegroup-navy/10"
                  >
                    Explore More Projects
                  </Button>
                </div>
              </div>
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

export default ProjectDetail;
