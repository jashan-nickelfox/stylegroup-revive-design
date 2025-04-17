
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import ServicesMap from "@/components/ServicesMap";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  const location = useLocation();
  const pageLoaded = useRef(false);

  useEffect(() => {
    if (location.state?.scrollToSection && pageLoaded.current) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollToSection);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Short delay to ensure all content is loaded
    } else {
      pageLoaded.current = true;
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductCategories />
        <WhyChooseUs />
        <FeaturedProjects />
        <ServicesMap />
        <Testimonials />
        <QuoteForm />
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default Index;
