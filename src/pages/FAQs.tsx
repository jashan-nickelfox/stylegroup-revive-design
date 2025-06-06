
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const FAQs = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  
  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };
  
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqCategories = [
    {
      category: "Products",
      questions: [
        {
          id: 1,
          question: "What types of blinds do you offer?",
          answer: "We offer a comprehensive range of blinds including roller blinds, venetian blinds, vertical blinds, roman blinds, and honeycomb blinds. Each type comes in various materials, colors, and operating mechanisms to suit your specific needs."
        },
        {
          id: 2,
          question: "Are your shutters suitable for high-humidity areas like bathrooms?",
          answer: "Yes, we offer PVC and aluminum shutters that are perfect for high-humidity areas like bathrooms and kitchens. These materials are moisture-resistant and won't warp, fade, or deteriorate in damp conditions."
        },
        {
          id: 3,
          question: "Can curtains help with energy efficiency?",
          answer: "Absolutely! Our thermal curtains and blockout curtains can significantly improve energy efficiency by providing insulation against heat and cold. This can help reduce your energy bills by keeping your home cooler in summer and warmer in winter."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          id: 4,
          question: "How long does installation typically take?",
          answer: "Installation time varies depending on the scope of the project, but most residential installations can be completed within a day. Larger projects or commercial installations may take longer. We'll provide you with a specific timeframe during your consultation."
        },
        {
          id: 5,
          question: "Do you offer any warranties on your products and installation?",
          answer: "Yes, all our products come with manufacturer warranties ranging from 2-5 years depending on the product. Additionally, we offer a 12-month warranty on our installation services to ensure your complete satisfaction."
        },
        {
          id: 6,
          question: "What areas of Brisbane do you service?",
          answer: "We service all areas of Brisbane and the surrounding regions including the Gold Coast, Sunshine Coast, and Ipswich. Contact us to confirm we service your specific location."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          id: 7,
          question: "How much do blinds and curtains typically cost?",
          answer: "The cost of window furnishings varies significantly based on size, material, functionality, and design. That's why we offer free in-home consultations to provide accurate quotes tailored to your specific requirements."
        },
        {
          id: 8,
          question: "Do you require a deposit?",
          answer: "Yes, we typically require a 50% deposit to confirm your order and begin the manufacturing process. The balance is due upon successful installation and your satisfaction with the completed work."
        },
        {
          id: 9,
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including credit cards (Visa, Mastercard, American Express), direct bank transfers, and cash. We also offer financing options through our partners for larger projects."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Frequently Asked Questions</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Find answers to common questions about our products, services, and processes.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {faqCategories.map((category, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-medium text-stylegroup-green mb-6">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq) => (
                      <div 
                        key={faq.id} 
                        className="border rounded-lg overflow-hidden"
                      >
                        <button
                          className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                            openFaq === faq.id ? 'bg-stylegroup-lightgray/30' : 'bg-white'
                          }`}
                          onClick={() => toggleFaq(faq.id)}
                          aria-expanded={openFaq === faq.id}
                        >
                          <span className="font-medium">{faq.question}</span>
                          <ChevronDown className={`h-5 w-5 transition-transform ${
                            openFaq === faq.id ? 'transform rotate-180' : ''
                          }`} />
                        </button>
                        <div className={`overflow-hidden transition-all ${
                          openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="px-6 py-4 border-t">
                            <p className="text-stylegroup-darkgray">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto bg-stylegroup-green text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-medium mb-4">Can't Find Your Answer?</h2>
              <p className="mb-6">
                If you couldn't find the information you were looking for, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-stylegroup-green hover:bg-stylegroup-lightgray"
                >
                  Contact Us
                </Button>
                <Button 
                  onClick={handleGetQuote}
                  className="bg-stylegroup-lightgreen text-white hover:bg-stylegroup-lightgreen/90"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default FAQs;
