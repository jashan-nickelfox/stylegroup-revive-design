
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Services", url: "/services" },
        { name: "Gallery", url: "/projects" },
        { name: "About Us", url: "/about" },
        { name: "Blog", url: "/blog" },
        { name: "FAQs", url: "/faqs" },
        { name: "Contact", url: "/contact" },
        { name: "Service Areas", url: "/service-areas" },
      ]
    },
    {
      title: "Product Categories",
      links: [
        { name: "Blinds", url: "/blinds" },
        { name: "Shutters", url: "/shutters" },
        { name: "Awnings", url: "/awnings" },
        { name: "Curtains", url: "/curtains" },
        { name: "Motorization", url: "/motorization" },
        { name: "Commercial", url: "/commercial" },
      ]
    },
    {
      title: "Blind Types",
      links: [
        { name: "Roller Blinds", url: "/blinds/roller" },
        { name: "Venetian Blinds", url: "/blinds/venetian" },
        { name: "Vertical Blinds", url: "/blinds/vertical" },
        { name: "Roman Blinds", url: "/blinds/roman" },
      ]
    },
    {
      title: "Shutter Types",
      links: [
        { name: "Plantation Shutters", url: "/shutters/plantation" },
        { name: "Timber Shutters", url: "/shutters/timber" },
        { name: "Exterior Shutters", url: "/shutters/exterior" },
      ]
    },
    {
      title: "Awning Types",
      links: [
        { name: "Folding Arm Awnings", url: "/awnings/folding-arm" },
        { name: "Straight Drop Awnings", url: "/awnings/straight-drop" },
        { name: "Pivot Arm Awnings", url: "/awnings/pivot-arm" },
      ]
    },
    {
      title: "Curtain Types",
      links: [
        { name: "Sheer Curtains", url: "/curtains/sheer" },
        { name: "Blockout Curtains", url: "/curtains/blockout" },
        { name: "S-Fold Curtains", url: "/curtains/s-fold" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Sitemap</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-stylegroup-lightgray/30 p-6 rounded-lg">
                  <h2 className="text-xl font-medium text-stylegroup-green mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.url}
                          className="flex items-center text-stylegroup-darkgray hover:text-stylegroup-green"
                        >
                          <ArrowRight className="h-3 w-3 mr-2 text-stylegroup-green" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Sitemap;
