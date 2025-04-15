
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Loader2, Check } from "lucide-react";

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Check if we should show the booking form based on navigation state
  useEffect(() => {
    if (location.state?.showBookingForm) {
      setShowBookingForm(true);
      // Scroll to booking form
      setTimeout(() => {
        const bookingForm = document.getElementById('booking-form');
        if (bookingForm) {
          bookingForm.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location.state]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      toast({
        title: "Message Sent",
        description: "We'll be in touch with you soon!",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Contact Us</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Have a question about our products or services? Get in touch with our friendly team today.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-stylegroup-lightgray p-8 rounded-lg h-full">
                  {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-12">
                      <div className="bg-green-100 text-green-700 rounded-full p-4 mb-6">
                        <Check className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-medium mb-3">Thank You!</h3>
                      <p className="text-stylegroup-darkgray mb-6">
                        Your message has been successfully sent. One of our team members will contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h2 className="text-2xl font-medium text-stylegroup-green mb-6">Send Us a Message</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                            placeholder="Your phone number"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                            placeholder="Your email address"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                            placeholder="What's this regarding?"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                            placeholder="How can we help you?"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <Button 
                          type="submit" 
                          className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white w-full md:w-auto"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              
              <div>
                <div className="bg-stylegroup-green text-white p-8 rounded-lg h-full">
                  <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a href="tel:0733240900" className="text-white/80 hover:text-stylegroup-lightgreen">
                          07 3324 0900
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:info@stylegroup.com.au" className="text-white/80 hover:text-stylegroup-lightgreen">
                          info@stylegroup.com.au
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-white/80">
                          123 Main St<br />
                          Brisbane, QLD 4000
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Opening Hours</h3>
                        <p className="text-white/80">
                          Monday - Friday: 8:30 AM - 5:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="booking-form" className={`py-16 bg-stylegroup-lightgray ${showBookingForm ? '' : 'hidden'}`}>
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-medium text-stylegroup-green">Book a Free Measure & Quote</h2>
                <p className="text-stylegroup-darkgray mt-3">
                  Schedule a time for our expert to visit your property and provide a detailed, no-obligation quote.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="booking-name" className="block text-sm font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="booking-name"
                        name="booking-name"
                        required
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="booking-phone" className="block text-sm font-medium mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="booking-phone"
                        name="booking-phone"
                        required
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="booking-email" className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="booking-email"
                        name="booking-email"
                        required
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="booking-address" className="block text-sm font-medium mb-2">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="booking-address"
                        name="booking-address"
                        required
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="booking-suburb" className="block text-sm font-medium mb-2">
                        Suburb <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="booking-suburb"
                        name="booking-suburb"
                        required
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="booking-postcode" className="block text-sm font-medium mb-2">
                        Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="booking-postcode"
                        name="booking-postcode"
                        required
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="booking-products" className="block text-sm font-medium mb-2">
                        Products of Interest
                      </label>
                      <select
                        id="booking-products"
                        name="booking-products"
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      >
                        <option value="">Select product type</option>
                        <option value="blinds">Blinds</option>
                        <option value="shutters">Shutters</option>
                        <option value="awnings">Awnings</option>
                        <option value="curtains">Curtains</option>
                        <option value="motorization">Motorization</option>
                        <option value="commercial">Commercial Solutions</option>
                        <option value="multiple">Multiple Products</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="booking-notes" className="block text-sm font-medium mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="booking-notes"
                        name="booking-notes"
                        rows={4}
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      type="submit" 
                      className="bg-stylegroup-green hover:bg-stylegroup-green/90 text-white w-full md:w-auto"
                    >
                      Book Free Measure
                    </Button>
                    <p className="text-xs text-stylegroup-darkgray mt-4">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium text-stylegroup-green">Find Us</h2>
              <p className="text-stylegroup-darkgray mt-2">
                Visit our showroom to see our window furnishings in person
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113187.42833430632!2d152.9387356248925!3d-27.471779731551082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1618434859244!5m2!1sen!2sau" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Style Group location"
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

export default Contact;
