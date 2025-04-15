
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const ServiceAreas = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };
  
  const serviceRegions = [
    {
      region: "Brisbane North",
      suburbs: ["Ascot", "Hamilton", "Clayfield", "Albion", "Hendra", "Nundah", "Chermside", "Kedron", "Stafford", "Aspley"]
    },
    {
      region: "Brisbane South",
      suburbs: ["Annerley", "Yeronga", "Moorooka", "Tennyson", "Yeerongpilly", "Fairfield", "Dutton Park", "Highgate Hill", "West End", "South Brisbane"]
    },
    {
      region: "Brisbane East",
      suburbs: ["Bulimba", "Hawthorne", "Balmoral", "Morningside", "Cannon Hill", "Murarrie", "Tingalpa", "Wynnum", "Manly", "Lota"]
    },
    {
      region: "Brisbane West",
      suburbs: ["Paddington", "Milton", "Auchenflower", "Toowong", "Taringa", "Indooroopilly", "St Lucia", "Fig Tree Pocket", "Kenmore", "Chapel Hill"]
    },
    {
      region: "Brisbane CBD",
      suburbs: ["Brisbane City", "Spring Hill", "Fortitude Valley", "New Farm", "Teneriffe", "Newstead", "Bowen Hills", "Herston", "Kelvin Grove", "Red Hill"]
    },
    {
      region: "Greater Brisbane",
      suburbs: ["Ipswich", "Logan", "Redland Bay", "North Lakes", "Caboolture", "Strathpine", "Redcliffe", "Samford", "The Gap", "Bellbowrie"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Our Service Areas</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Style Group provides window furnishing services throughout Brisbane and surrounding areas.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceRegions.map((region, index) => (
                    <div key={index} className="bg-stylegroup-lightgray/30 p-6 rounded-lg">
                      <h2 className="text-xl font-medium text-stylegroup-green mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2" /> {region.region}
                      </h2>
                      <ul className="columns-2 text-stylegroup-darkgray">
                        {region.suburbs.map((suburb, subIndex) => (
                          <li key={subIndex} className="mb-2">{suburb}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-stylegroup-green text-white p-8 rounded-lg">
                  <h2 className="text-2xl font-medium mb-4">Don't See Your Location?</h2>
                  <p className="mb-6">
                    We service many more areas than listed here. Contact us to confirm we cover your specific location.
                  </p>
                  <Button 
                    onClick={() => navigate('/contact')}
                    className="bg-white text-stylegroup-green hover:bg-stylegroup-lightgray"
                  >
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="sticky top-32">
                  <div className="bg-stylegroup-lightgray p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-medium text-stylegroup-green mb-4">Our Process</h3>
                    <ol className="space-y-4">
                      <li className="flex">
                        <span className="bg-stylegroup-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                        <p className="text-stylegroup-darkgray">Contact us to schedule a free consultation</p>
                      </li>
                      <li className="flex">
                        <span className="bg-stylegroup-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                        <p className="text-stylegroup-darkgray">Our expert visits your home for measurements</p>
                      </li>
                      <li className="flex">
                        <span className="bg-stylegroup-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                        <p className="text-stylegroup-darkgray">Receive your detailed, no-obligation quote</p>
                      </li>
                      <li className="flex">
                        <span className="bg-stylegroup-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                        <p className="text-stylegroup-darkgray">We order and manufacture your custom products</p>
                      </li>
                      <li className="flex">
                        <span className="bg-stylegroup-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                        <p className="text-stylegroup-darkgray">Professional installation by our experienced team</p>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      onClick={handleGetQuote}
                      className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
                    >
                      Request a Free Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-stylegroup-lightgray">
          <div className="container text-center">
            <h2 className="text-3xl font-medium text-stylegroup-green mb-6">Brisbane's Trusted Window Furnishing Experts</h2>
            <p className="text-stylegroup-darkgray max-w-3xl mx-auto mb-8">
              With over 15 years of experience serving the Brisbane region, we understand the unique climate and architectural styles of South East Queensland homes and businesses.
            </p>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113187.42833430632!2d152.9387356248925!3d-27.471779731551082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1618434859244!5m2!1sen!2sau" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Style Group service areas map"
              ></iframe>
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

export default ServiceAreas;
