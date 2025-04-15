
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const areas = [
  {
    region: "Brisbane City",
    suburbs: ["Brisbane CBD", "South Brisbane", "West End", "New Farm", "Teneriffe", "Fortitude Valley", "Spring Hill", "Paddington", "Red Hill", "Kelvin Grove"]
  },
  {
    region: "Brisbane North",
    suburbs: ["Aspley", "Chermside", "Kedron", "Stafford", "Everton Park", "Albany Creek", "Sandgate", "Bracken Ridge", "Boondall", "Zillmere"]
  },
  {
    region: "Brisbane South",
    suburbs: ["Mount Gravatt", "Holland Park", "Sunnybank", "Carindale", "Coorparoo", "Camp Hill", "Moorooka", "Yeronga", "Annerley", "Tarragindi"]
  },
  {
    region: "Brisbane East",
    suburbs: ["Wynnum", "Manly", "Capalaba", "Cleveland", "Alexandra Hills", "Wellington Point", "Thorneside", "Birkdale", "Ormiston", "Victoria Point"]
  },
  {
    region: "Brisbane West",
    suburbs: ["Indooroopilly", "Toowong", "St Lucia", "Chapel Hill", "Kenmore", "Brookfield", "The Gap", "Bardon", "Ashgrove", "Fig Tree Pocket"]
  },
  {
    region: "Gold Coast",
    suburbs: ["Surfers Paradise", "Broadbeach", "Southport", "Main Beach", "Miami", "Burleigh Heads", "Palm Beach", "Currumbin", "Coolangatta", "Robina"]
  }
];

const ServiceAreas = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/', { state: { scrollToSection: 'quote' } });
  };

  const handleBookMeasure = () => {
    navigate('/contact', { state: { showBookingForm: true } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Our Service Areas</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Style Group is proud to provide window furnishing solutions throughout Brisbane and surrounding areas. Below are the primary locations we service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleGetQuote}
                className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white"
              >
                Request a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={handleBookMeasure}
                variant="outline"
                className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
              >
                Book Free Measure
              </Button>
            </div>
          </div>
        </section>

        <section className="container mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-medium text-stylegroup-green mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" /> {area.region}
                </h2>
                <ul className="space-y-1">
                  {area.suburbs.map((suburb, subIndex) => (
                    <li key={subIndex} className="flex items-center text-stylegroup-darkgray">
                      <span className="w-2 h-2 rounded-full bg-stylegroup-lightgreen mr-2"></span>
                      {suburb}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <section className="bg-stylegroup-lightgray py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center heading-underline mx-auto mb-6">Don't See Your Location?</h2>
              <p className="mb-8 text-stylegroup-darkgray">
                We service many other areas in and around Brisbane. If you don't see your suburb listed, please contact us to confirm service availability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white">
                    Contact Us
                  </Button>
                </Link>
                <Button 
                  onClick={handleBookMeasure}
                  variant="outline"
                  className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                >
                  Book Free Measure
                </Button>
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

export default ServiceAreas;
