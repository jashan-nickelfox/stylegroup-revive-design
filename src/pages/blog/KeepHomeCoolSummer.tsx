
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

const KeepHomeCoolSummer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <article className="container py-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-stylegroup-green hover:underline mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Keep Home Cool Summer"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center mb-6 text-sm text-stylegroup-darkgray space-x-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                April 10, 2023
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Sarah Williams
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                Tips
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-stylegroup-green mb-6">
              5 Ways to Keep Your Home Cool This Summer with Window Furnishings
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-stylegroup-darkgray mb-6">
                Beat the Brisbane heat with these effective window treatments designed to keep your home cool and comfortable during the hot summer months.
              </p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">1. Install Blockout Blinds or Curtains</h2>
              <p>Blockout window treatments prevent heat from entering through your windows. They're particularly effective on west-facing windows that receive intense afternoon sun.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">2. Choose Light-Colored Window Treatments</h2>
              <p>Light colors reflect heat rather than absorbing it. White or light-colored blinds, shutters, and curtains can significantly reduce heat gain.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">3. Consider External Awnings</h2>
              <p>External awnings block sun before it reaches your windows, making them one of the most effective cooling solutions available.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">4. Use Honeycomb Blinds for Insulation</h2>
              <p>The cellular design of honeycomb blinds creates an insulating air barrier that helps keep cool air in and hot air out.</p>
              
              <h2 className="text-2xl font-semibold text-stylegroup-green mt-8 mb-4">5. Install Plantation Shutters</h2>
              <p>Plantation shutters allow you to control airflow while blocking direct sunlight. Their adjustable louvers give you precise control over light and heat.</p>
              
              <div className="bg-stylegroup-lightgray p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Stay Cool This Summer</h3>
                <p className="mb-4">Let Style Group help you choose the best window treatments to keep your home cool and energy-efficient.</p>
                <Link to="/contact">
                  <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default KeepHomeCoolSummer;
