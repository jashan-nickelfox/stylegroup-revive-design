
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import product pages
import Blinds from "./pages/products/Blinds";
import Curtains from "./pages/products/Curtains";
import Shutters from "./pages/products/Shutters";
import Awnings from "./pages/products/Awnings";
import Commercial from "./pages/products/Commercial";

// Import specific product pages
import RollerBlinds from "./pages/products/RollerBlinds";
import RomanBlinds from "./pages/products/RomanBlinds";
import VenetianBlinds from "./pages/products/VenetianBlinds";
import VerticalBlinds from "./pages/products/VerticalBlinds";
import PanelGlidesBlinds from "./pages/products/PanelGlidesBlinds";
import HoneycombBlinds from "./pages/products/HoneycombBlinds";

// Import shutter pages
import AluminiumShuttersGallery from "./pages/products/AluminiumShuttersGallery";
import AluminiumScreens from "./pages/products/AluminiumScreens";
import PlantationShutters from "./pages/products/PlantationShutters";
import TimberShutters from "./pages/products/TimberShutters";
import PvcShutters from "./pages/products/PvcShutters";
import ExteriorShutters from "./pages/products/ExteriorShutters";

// Import curtain pages
import SheerCurtains from "./pages/curtains/SheerCurtains";

// Import awning pages
import FoldingArmAwnings from "./pages/products/FoldingArmAwnings";
import StraightDropAwnings from "./pages/products/StraightDropAwnings";
import PivotArmAwnings from "./pages/products/PivotArmAwnings";
import FixedCanopies from "./pages/products/FixedCanopies";

// Import project pages
import ProjectsList from "./pages/ProjectsList";
import ProjectDetail from "./components/ProjectDetail";

// Import blog pages
import HowToChoosePerfectBlinds from "./pages/blog/HowToChoosePerfectBlinds";
import PlantationShuttersGuide from "./pages/blog/PlantationShuttersGuide";
import KeepHomeCoolSummer from "./pages/blog/KeepHomeCoolSummer";
import ManualBlindsComparison from "./pages/blog/ManualBlindsComparison";
import LatestCurtainTrends from "./pages/blog/LatestCurtainTrends";
import ChallengingWindows from "./pages/blog/ChallengingWindows";

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

// Admin imports
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import HeroManagement from "./pages/admin/HeroManagement";
import FooterManagement from "./pages/admin/FooterManagment";
import ProductManagement from "./pages/admin/ProductManagement";
import InquiryManagement from "./pages/admin/InquiryManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AdminAuthProvider>
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
            
            {/* Blog article routes */}
            <Route path="/blog/how-to-choose-perfect-blinds" element={<HowToChoosePerfectBlinds />} />
            <Route path="/blog/plantation-shutters-ultimate-guide" element={<PlantationShuttersGuide />} />
            <Route path="/blog/keep-home-cool-summer-window-furnishings" element={<KeepHomeCoolSummer />} />
            <Route path="/blog/manual-blinds-comparison" element={<ManualBlindsComparison />} />
            <Route path="/blog/latest-curtain-trends" element={<LatestCurtainTrends />} />
            <Route path="/blog/window-treatments-challenging-windows" element={<ChallengingWindows />} />
            
            {/* Main product category routes */}
            <Route path="/blinds" element={<Blinds />} />
            <Route path="/shutters" element={<Shutters />} />
            <Route path="/awnings" element={<Awnings />} />
            <Route path="/curtains" element={<Curtains />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            
            {/* Specific blinds product routes */}
            <Route path="/blinds/roller" element={<RollerBlinds />} />
            <Route path="/blinds/roman" element={<RomanBlinds />} />
            <Route path="/blinds/venetian" element={<VenetianBlinds />} />
            <Route path="/blinds/vertical" element={<VerticalBlinds />} />
            <Route path="/blinds/panel-glides" element={<PanelGlidesBlinds />} />
            <Route path="/blinds/honeycomb" element={<HoneycombBlinds />} />
            
            {/* Shutters routes */}
            <Route path="/shutters/aluminium-gallery" element={<AluminiumShuttersGallery />} />
            <Route path="/shutters/aluminium-screens" element={<AluminiumScreens />} />
            <Route path="/shutters/plantation" element={<PlantationShutters />} />
            <Route path="/shutters/timber" element={<TimberShutters />} />
            <Route path="/shutters/pvc" element={<PvcShutters />} />
            <Route path="/shutters/exterior" element={<ExteriorShutters />} />
            
            {/* Curtains routes */}
            <Route path="/curtains/sheer" element={<SheerCurtains />} />
            <Route path="/curtains/blockout" element={<NotFound />} />
            <Route path="/curtains/s-fold" element={<NotFound />} />
            
            {/* Awnings routes */}
            <Route path="/awnings/folding-arm" element={<FoldingArmAwnings />} />
            <Route path="/awnings/straight-drop" element={<StraightDropAwnings />} />
            <Route path="/awnings/pivot-arm" element={<PivotArmAwnings />} />
            <Route path="/awnings/fixed-canopies" element={<FixedCanopies />} />
            
            {/* Information pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/hero" element={<HeroManagement />} />
            <Route path="/admin/products" element={<ProductManagement />} />
            <Route path="/admin/services" element={<ProductManagement />} />
            <Route path="/admin/footer" element={<FooterManagement />} />
            <Route path="/admin/inquiries" element={<InquiryManagement />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AdminAuthProvider>
  </QueryClientProvider>
);

export default App;
