
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SheerCurtains from "./pages/curtains/SheerCurtains";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curtains/sheer" element={<SheerCurtains />} />
          
          {/* Placeholder routes for all navigation destinations */}
          <Route path="/blinds" element={<NotFound />} />
          <Route path="/blinds/roller" element={<NotFound />} />
          <Route path="/blinds/venetian" element={<NotFound />} />
          <Route path="/blinds/vertical" element={<NotFound />} />
          <Route path="/blinds/roman" element={<NotFound />} />
          
          <Route path="/shutters" element={<NotFound />} />
          <Route path="/shutters/plantation" element={<NotFound />} />
          <Route path="/shutters/timber" element={<NotFound />} />
          <Route path="/shutters/exterior" element={<NotFound />} />
          
          <Route path="/awnings" element={<NotFound />} />
          <Route path="/awnings/folding-arm" element={<NotFound />} />
          <Route path="/awnings/straight-drop" element={<NotFound />} />
          <Route path="/awnings/pivot-arm" element={<NotFound />} />
          
          <Route path="/curtains" element={<NotFound />} />
          <Route path="/curtains/blockout" element={<NotFound />} />
          <Route path="/curtains/s-fold" element={<NotFound />} />
          
          <Route path="/projects" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/faqs" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/quote" element={<NotFound />} />
          <Route path="/products" element={<NotFound />} />
          <Route path="/motorization" element={<NotFound />} />
          <Route path="/commercial" element={<NotFound />} />
          <Route path="/privacy-policy" element={<NotFound />} />
          <Route path="/terms-of-service" element={<NotFound />} />
          <Route path="/sitemap" element={<NotFound />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
