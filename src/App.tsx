
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

// Import project pages
import ProjectsList from "./pages/ProjectsList";
import ProjectDetail from "./components/ProjectDetail";

// Import other page placeholders
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ServiceAreas from "./pages/ServiceAreas";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import FAQs from "./pages/FAQs";
import CrimsafePage from "./pages/crimsafe";

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
          <Route path="/crimsafe" element={<CrimsafePage />} />
          
          {/* Main product category routes */}
          <Route path="/blinds" element={<Blinds />} />
          <Route path="/shutters" element={<Shutters />} />
          <Route path="/awnings" element={<Awnings />} />
          <Route path="/curtains" element={<Curtains />} />
          <Route path="/motorization" element={<Motorization />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          
          {/* Specific product routes - temporarily using NotFound until specific pages are created */}
          <Route path="/curtains/sheer" element={<SheerCurtains />} />
          <Route path="/blinds/roller" element={<NotFound />} />
          <Route path="/blinds/venetian" element={<NotFound />} />
          <Route path="/blinds/vertical" element={<NotFound />} />
          <Route path="/blinds/roman" element={<NotFound />} />
          <Route path="/shutters/plantation" element={<NotFound />} />
          <Route path="/shutters/timber" element={<NotFound />} />
          <Route path="/shutters/exterior" element={<NotFound />} />
          <Route path="/awnings/folding-arm" element={<NotFound />} />
          <Route path="/awnings/straight-drop" element={<NotFound />} />
          <Route path="/awnings/pivot-arm" element={<NotFound />} />
          <Route path="/curtains/blockout" element={<NotFound />} />
          <Route path="/curtains/s-fold" element={<NotFound />} />
          
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
