
import { useState } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const serviceAreas = [
  {
    id: "north",
    name: "North Brisbane",
    coords: { lat: -27.3, lng: 153.0 },
    color: "#005638",
    suburbs: ["Aspley", "Chermside", "Kedron", "Stafford", "Sandgate", "Northgate", "Albany Creek", "Everton Park"],
    serviceCenter: {
      name: "North Brisbane Service Center",
      address: "123 Gympie Road, Chermside QLD 4032",
      phone: "(07) 3712 0200",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM"
    }
  },
  {
    id: "south",
    name: "South Brisbane",
    coords: { lat: -27.6, lng: 153.1 },
    color: "#4C8C71",
    suburbs: ["Mount Gravatt", "Holland Park", "Sunnybank", "Yeronga", "Moorooka", "Carindale", "Camp Hill", "Coorparoo"],
    serviceCenter: {
      name: "South Brisbane Service Center",
      address: "456 Logan Road, Mount Gravatt QLD 4122",
      phone: "(07) 3712 0201",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM"
    }
  },
  {
    id: "east",
    name: "East Brisbane",
    coords: { lat: -27.5, lng: 153.2 },
    color: "#005638",
    suburbs: ["Wynnum", "Manly", "Carindale", "Belmont", "Murarrie", "Tingalpa", "Cleveland", "Alexandra Hills"],
    serviceCenter: {
      name: "East Brisbane Service Center",
      address: "789 Old Cleveland Road, Carindale QLD 4152",
      phone: "(07) 3712 0202",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM"
    }
  },
  {
    id: "west",
    name: "West Brisbane",
    coords: { lat: -27.5, lng: 152.9 },
    color: "#4C8C71",
    suburbs: ["Indooroopilly", "Kenmore", "Chapel Hill", "Toowong", "Paddington", "The Gap", "Bardon", "St Lucia"],
    serviceCenter: {
      name: "West Brisbane Service Center",
      address: "321 Moggill Road, Indooroopilly QLD 4068",
      phone: "(07) 3712 0203",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM"
    }
  },
  {
    id: "central",
    name: "Brisbane CBD & Inner Suburbs",
    coords: { lat: -27.47, lng: 153.02 },
    color: "#005638",
    suburbs: ["Brisbane City", "Fortitude Valley", "New Farm", "South Brisbane", "West End", "Spring Hill", "Paddington"],
    serviceCenter: {
      name: "Central Brisbane Service Center",
      address: "147 Queen Street, Brisbane City QLD 4000",
      phone: "(07) 3712 0200",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM"
    }
  },
];

const InteractiveServicesMap = () => {
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const selectedArea = serviceAreas.find(area => area.id === activeArea);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title heading-underline mx-auto">Our Service Areas</h2>
          <p className="mt-4 text-lg text-stylegroup-darkgray max-w-2xl mx-auto">
            Click on any region below to see our service locations and coverage areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="relative bg-stylegroup-lightgray rounded-lg overflow-hidden h-[500px]">
              {/* Embedded Google Map */}
              <iframe 
                title="Style Group Service Areas Map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113510.35866938564!2d152.9264806361849!3d-27.46977137403679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1681881546569!5m2!1sen!2sau${activeArea ? `&q=${selectedArea?.serviceCenter.address}` : ''}`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay with clickable regions */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {serviceAreas.map((area, index) => (
                    <g key={area.id}>
                      {/* Clickable region circles */}
                      <circle
                        cx={50 + (index % 3) * 120}
                        cy={80 + Math.floor(index / 3) * 100}
                        r="25"
                        fill={activeArea === area.id ? area.color : hoveredArea === area.id ? area.color + '80' : area.color + '60'}
                        className="pointer-events-auto cursor-pointer transition-all duration-300"
                        onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                      />
                      {/* Area labels */}
                      <text
                        x={50 + (index % 3) * 120}
                        y={120 + Math.floor(index / 3) * 100}
                        textAnchor="middle"
                        className="fill-stylegroup-green text-sm font-medium pointer-events-auto cursor-pointer"
                        onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
                      >
                        {area.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
          
          {/* Service Area Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif mb-6 text-stylegroup-green">Service Locations</h3>
            
            {selectedArea ? (
              <div className="bg-white border border-stylegroup-lightgray rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: selectedArea.color }}
                  />
                  <h4 className="text-xl font-medium text-stylegroup-green">
                    {selectedArea.name}
                  </h4>
                </div>
                
                {/* Service Center Info */}
                <div className="mb-6 p-4 bg-stylegroup-lightgray rounded-lg">
                  <h5 className="font-medium text-stylegroup-green mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {selectedArea.serviceCenter.name}
                  </h5>
                  <div className="space-y-2 text-sm text-stylegroup-darkgray">
                    <p className="flex items-start">
                      <Navigation className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                      {selectedArea.serviceCenter.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {selectedArea.serviceCenter.phone}
                    </p>
                    <p className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {selectedArea.serviceCenter.hours}
                    </p>
                  </div>
                </div>
                
                {/* Suburbs List */}
                <div>
                  <h5 className="font-medium text-stylegroup-green mb-3">Suburbs We Service:</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedArea.suburbs.map((suburb, index) => (
                      <span 
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm border border-stylegroup-lightgray"
                      >
                        {suburb}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-stylegroup-lightgray">
                  <p className="text-sm italic text-stylegroup-darkgray">
                    Don't see your suburb? We service many more areas - contact us to confirm!
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-stylegroup-lightgray rounded-lg">
                <MapPin className="h-12 w-12 text-stylegroup-green mx-auto mb-4" />
                <p className="text-stylegroup-darkgray">
                  Click on any region on the map to see detailed service information
                </p>
              </div>
            )}
            
            {/* Quick Links */}
            <div className="bg-stylegroup-lightgray rounded-lg p-6">
              <h5 className="font-medium text-stylegroup-green mb-4">Quick Actions</h5>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-white rounded border hover:bg-stylegroup-green/5 transition-colors">
                  <span className="font-medium text-stylegroup-green">Book Free Measure</span>
                  <p className="text-sm text-stylegroup-darkgray">Schedule an in-home consultation</p>
                </button>
                <button className="w-full text-left p-3 bg-white rounded border hover:bg-stylegroup-green/5 transition-colors">
                  <span className="font-medium text-stylegroup-green">Get Quote</span>
                  <p className="text-sm text-stylegroup-darkgray">Receive a custom quote for your project</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesMap;
