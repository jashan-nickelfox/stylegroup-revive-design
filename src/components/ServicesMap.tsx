
import { useState } from "react";

const areas = [
  {
    id: "north",
    name: "North Brisbane",
    suburbs: ["Aspley", "Chermside", "Kedron", "Stafford", "Sandgate", "Northgate"]
  },
  {
    id: "south",
    name: "South Brisbane",
    suburbs: ["Mount Gravatt", "Holland Park", "Sunnybank", "Yeronga", "Moorooka"]
  },
  {
    id: "east",
    name: "East Brisbane",
    suburbs: ["Wynnum", "Manly", "Carindale", "Belmont", "Murarrie", "Tingalpa"]
  },
  {
    id: "west",
    name: "West Brisbane",
    suburbs: ["Indooroopilly", "Kenmore", "Chapel Hill", "Toowong", "Paddington"]
  },
  {
    id: "central",
    name: "Brisbane CBD & Inner Suburbs",
    suburbs: ["Brisbane City", "Fortitude Valley", "New Farm", "South Brisbane", "West End"]
  },
];

const ServicesMap = () => {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title heading-underline mx-auto">Our Service Areas</h2>
          <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
            We proudly serve Brisbane and surrounding areas with expert window furnishing installation and service
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-[500px] bg-stylegroup-lightgray rounded-lg overflow-hidden">
              <iframe 
                title="Style Group Service Areas Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113510.35866938564!2d152.9264806361849!3d-27.46977137403679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1681881546569!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif mb-6">Areas We Service</h3>
            <p className="mb-6 text-stylegroup-darkgray">
              Our experienced team services all areas of Brisbane and surrounding regions. Click on an area to see the suburbs we cover.
            </p>
            
            <div className="space-y-4">
              {areas.map((area) => (
                <div key={area.id} className="border border-stylegroup-lightgray rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
                    className={`w-full p-4 text-left flex justify-between items-center transition-colors ${
                      activeArea === area.id ? 'bg-stylegroup-navy text-white' : 'bg-white text-stylegroup-navy hover:bg-stylegroup-lightgray'
                    }`}
                  >
                    <span className="font-medium">{area.name}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform ${activeArea === area.id ? 'rotate-180' : ''}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {activeArea === area.id && (
                    <div className="p-4 bg-stylegroup-lightgray">
                      <div className="flex flex-wrap gap-2">
                        {area.suburbs.map((suburb, index) => (
                          <span 
                            key={index}
                            className="bg-white px-3 py-1 rounded-full text-sm"
                          >
                            {suburb}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-sm italic">
                        Not listed? Contact us as we service many more areas!
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMap;
