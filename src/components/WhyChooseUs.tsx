
import { 
  BadgeCheck, 
  Ruler, 
  ThumbsUp, 
  Clock, 
  Home, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: <BadgeCheck className="h-10 w-10 text-stylegroup-gold" />,
    title: "Quality Products",
    description: "Premium materials and craftsmanship in all our window furnishings"
  },
  {
    icon: <Ruler className="h-10 w-10 text-stylegroup-gold" />,
    title: "Expert Measurement",
    description: "Precise consultations and measurements for perfect fit every time"
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-stylegroup-gold" />,
    title: "Professional Installation",
    description: "Skilled installers with years of experience ensuring quality finishing"
  },
  {
    icon: <Clock className="h-10 w-10 text-stylegroup-gold" />,
    title: "10-Year Warranty",
    description: "Confidence in our products with comprehensive warranty coverage"
  },
  {
    icon: <Home className="h-10 w-10 text-stylegroup-gold" />,
    title: "Local Brisbane Business",
    description: "Supporting the local community with products designed for Queensland"
  },
  {
    icon: <Shield className="h-10 w-10 text-stylegroup-gold" />,
    title: "Satisfaction Guarantee",
    description: "We're not happy until you're completely satisfied with our service"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-title heading-underline mx-auto">Why Choose Style Group</h2>
          <p className="mt-4 text-lg text-stylegroup-darkgray">
            For over 15 years, we've been Brisbane's trusted experts in premium window furnishings.
            Our commitment to quality and service sets us apart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-stylegroup-lightgray p-8 rounded-lg transition-all hover:shadow-md"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-stylegroup-navy">{feature.title}</h3>
              <p className="text-stylegroup-darkgray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
