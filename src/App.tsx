
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SheerCurtains from "./pages/curtains/SheerCurtains";
import NotFound from "./pages/NotFound";

// Import product pages
import Blinds from "./pages/products/Blinds";
import Curtains from "./pages/products/Curtains";
import Shutters from "./pages/products/Shutters";
import Awnings from "./pages/products/Awnings";
import Motorization from "./pages/products/Motorization";
import Commercial from "./pages/products/Commercial";
import Products from "./pages/Products";

// Import project pages
import ProjectsList from "./pages/ProjectsList";
import ProjectDetail from "./components/ProjectDetail";

// Import other page placeholders
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ServiceAreas from "./pages/ServiceAreas";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import FAQs from "./pages/FAQs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main pages */}
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          
          {/* Main product category routes */}
          <Route path="/blinds" element={<Blinds />} />
          <Route path="/shutters" element={<Shutters />} />
          <Route path="/awnings" element={<Awnings />} />
          <Route path="/curtains" element={<Curtains />} />
          <Route path="/motorization" element={<Motorization />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/flooring" element={<NotFound />} />
          <Route path="/aluminium-screens" element={<NotFound />} />
          <Route path="/security-barriers" element={<NotFound />} />
          
          {/* Blinds subcategories */}
          <Route path="/blinds/roller" element={<NotFound />} />
          <Route path="/blinds/honeycomb" element={<NotFound />} />
          <Route path="/blinds/panel-glide" element={<NotFound />} />
          <Route path="/blinds/vertical" element={<NotFound />} />
          <Route path="/blinds/venetian" element={<NotFound />} />
          <Route path="/blinds/roman" element={<NotFound />} />
          <Route path="/blinds/sheer-vision" element={<NotFound />} />
          <Route path="/blinds/gallery" element={<NotFound />} />
          
          {/* Shutters subcategories */}
          <Route path="/shutters/composite" element={<NotFound />} />
          <Route path="/shutters/synthetic" element={<NotFound />} />
          <Route path="/shutters/plantation" element={<NotFound />} />
          <Route path="/shutters/aluminium" element={<NotFound />} />
          <Route path="/shutters/gallery" element={<NotFound />} />
          
          {/* Awnings subcategories */}
          <Route path="/awnings/roller-style" element={<NotFound />} />
          <Route path="/awnings/folding-arm" element={<NotFound />} />
          <Route path="/awnings/ziptrak" element={<NotFound />} />
          <Route path="/awnings/gallery" element={<NotFound />} />
          
          {/* Curtains subcategories */}
          <Route path="/curtains/sheer" element={<SheerCurtains />} />
          <Route path="/curtains/blockout" element={<NotFound />} />
          <Route path="/curtains/s-fold" element={<NotFound />} />
          
          {/* Flooring subcategories */}
          <Route path="/flooring/hybrid" element={<NotFound />} />
          <Route path="/flooring/bamboo" element={<NotFound />} />
          <Route path="/flooring/laminate" element={<NotFound />} />
          <Route path="/flooring/timber" element={<NotFound />} />
          <Route path="/flooring/gallery" element={<NotFound />} />
          <Route path="/flooring/care" element={<NotFound />} />
          
          {/* Aluminium Screens subcategories */}
          <Route path="/aluminium-screens/gallery" element={<NotFound />} />
          <Route path="/aluminium-screens/shutters" element={<NotFound />} />
          
          {/* Security Barriers subcategories */}
          <Route path="/security-barriers/crimsafe" element={<NotFound />} />
          <Route path="/security-barriers/pleated-screens" element={<NotFound />} />
          <Route path="/security-barriers/retractable-flyscreens" element={<NotFound />} />
          
          {/* Information pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
