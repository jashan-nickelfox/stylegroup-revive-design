
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">About Style Group</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Brisbane's premier provider of quality window furnishings, serving residential and commercial clients since 2005.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-medium text-stylegroup-green mb-6">Our Story</h2>
                <p className="text-stylegroup-darkgray mb-6">
                  Style Group was founded with a simple mission: to provide Queensland homes and businesses with premium window furnishings that perfectly balance functionality, durability, and aesthetic appeal.
                </p>
                <p className="text-stylegroup-darkgray mb-6">
                  What began as a small family business has grown into one of Brisbane's most trusted names in window treatments, serving thousands of satisfied customers across South East Queensland.
                </p>
                <p className="text-stylegroup-darkgray">
                  Our dedication to quality products, exceptional service, and competitive pricing has earned us a reputation for excellence in the industry. We're proud to be locally owned and operated, with deep roots in the Brisbane community.
                </p>
              </div>
              <div className="bg-stylegroup-lightgray/30 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                  alt="Modern home with Style Group window treatments" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title text-center heading-underline mx-auto">Our Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Quality</h3>
                <p className="text-stylegroup-darkgray">We never compromise on the materials or craftsmanship of our products. Every window furnishing we offer is built to last and designed to perform.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Service</h3>
                <p className="text-stylegroup-darkgray">From the first consultation to the final installation, we're committed to providing a seamless, stress-free experience for every customer.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-stylegroup-green mb-4">Innovation</h3>
                <p className="text-stylegroup-darkgray">We continuously seek out the latest trends, technologies, and materials to ensure our clients have access to the most innovative window furnishing solutions.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-stylegroup-green text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-medium mb-6">Ready to Work with Us?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80">
              Experience the Style Group difference for yourself. Contact us today for a free consultation and quote.
            </p>
            <Button 
              onClick={handleGetQuote} 
              size="lg" 
              className="bg-white text-stylegroup-green hover:bg-stylegroup-lightgray"
            >
              Request a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
