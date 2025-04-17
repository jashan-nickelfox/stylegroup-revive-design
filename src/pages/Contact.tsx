
import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BackToTop from "@/components/BackToTop";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar, Clock, ArrowRight, Loader2, Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Form validation schemas
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const bookingFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  preferredDate: z.string().refine(val => new Date(val) >= new Date(new Date().setHours(0,0,0,0)), {
    message: "Date must be today or in the future"
  }),
  preferredTime: z.string().min(1, "Please select a time"),
  productInterest: z.string().optional(),
  notes: z.string().optional()
});

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});

  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    productInterest: "",
    notes: ""
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Check if we should show booking form based on location state
    if (location.state && location.state.showBookingForm === true) {
      setShowBookingForm(true);
    }
  }, [location.state]);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
    // Clear the error for this field when the user starts typing
    if (contactErrors[name]) {
      setContactErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
    // Clear the error for this field when the user starts typing
    if (bookingErrors[name]) {
      setBookingErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string, name: string) => {
    setBookingForm(prev => ({ ...prev, [name]: value }));
    // Clear the error for this field when the user changes selection
    if (bookingErrors[name]) {
      setBookingErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateContactForm = () => {
    try {
      contactFormSchema.parse(contactForm);
      setContactErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0].toString()] = err.message;
          }
        });
        setContactErrors(errors);
      }
      return false;
    }
  };

  const validateBookingForm = () => {
    try {
      bookingFormSchema.parse(bookingForm);
      setBookingErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0].toString()] = err.message;
          }
        });
        setBookingErrors(errors);
      }
      return false;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateContactForm()) {
      toast({
        title: "Form Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }
    
    setContactLoading(true);
    
    try {
      // Store data in Supabase
      const { error } = await supabase.from('contact_messages').insert({
        first_name: contactForm.firstName,
        last_name: contactForm.lastName,
        email: contactForm.email,
        phone: contactForm.phone,
        subject: contactForm.subject,
        message: contactForm.message
      });
      
      if (error) throw error;
      
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
      
      // Reset form
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Submission Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setContactLoading(false);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateBookingForm()) {
      toast({
        title: "Form Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }
    
    setBookingLoading(true);
    
    try {
      // Store data in Supabase
      const { error } = await supabase.from('booking_requests').insert({
        first_name: bookingForm.firstName,
        last_name: bookingForm.lastName,
        email: bookingForm.email,
        phone: bookingForm.phone,
        address: bookingForm.address,
        preferred_date: bookingForm.preferredDate,
        preferred_time: bookingForm.preferredTime,
        product_interest: bookingForm.productInterest,
        additional_notes: bookingForm.notes
      });
      
      if (error) throw error;
      
      toast({
        title: "Booking Request Received",
        description: "One of our team members will contact you to confirm your appointment.",
      });
      
      // Reset form
      setBookingForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        preferredDate: "",
        preferredTime: "",
        productInterest: "",
        notes: ""
      });
      
    } catch (error: any) {
      console.error("Error submitting booking form:", error);
      toast({
        title: "Submission Error",
        description: error.message || "There was a problem booking your appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Contact Us</h1>
            <p className="text-stylegroup-darkgray text-lg mb-4">
              Get in touch with our team for a free consultation about your window furnishing needs.
            </p>
          </div>
        </section>
        
        <section className="container mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-stylegroup-green/10 h-10 w-10 rounded-full flex items-center justify-center ">
                    <Phone className="h-5 w-6 text-stylegroup-green" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-stylegroup-darkgray mb-1">Speak directly with our team</p>
                    <a href="tel:0733240900" className="text-stylegroup-green font-medium">
                      07 3324 0900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-stylegroup-green/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-6 text-stylegroup-green" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-stylegroup-darkgray mb-1">For quotes and general inquiries</p>
                    <a href="mailto:info@stylegroup.com.au" className="text-stylegroup-green font-medium">
                      info@stylegroup.com.au
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-stylegroup-green/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-6 text-stylegroup-green" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Our Showroom</h3>
                    <p className="text-stylegroup-darkgray mb-1">123 Main Street, Brisbane, QLD 4000</p>
                    <a 
                      href="https://maps.google.com/?q=123+Main+Street+Brisbane+QLD+4000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-stylegroup-green font-medium flex items-center"
                    >
                      Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-stylegroup-green/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-6 text-stylegroup-green" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <ul className="text-stylegroup-darkgray space-y-1">
                      <li>Monday - Friday: 8:30 AM - 5:00 PM</li>
                      <li>Saturday: 9:00 AM - 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a href="https://facebook.com/stylegroup" target="_blank" rel="noreferrer" className="bg-stylegroup-lightgray hover:bg-stylegroup-green hover:text-white p-2.5 rounded-full transition-colors" aria-label="Follow us on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://instagram.com/stylegroup" target="_blank" rel="noreferrer" className="bg-stylegroup-lightgray hover:bg-stylegroup-green hover:text-white p-2.5 rounded-full transition-colors" aria-label="Follow us on Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://linkedin.com/company/stylegroup" target="_blank" rel="noreferrer" className="bg-stylegroup-lightgray hover:bg-stylegroup-green hover:text-white p-2.5 rounded-full transition-colors" aria-label="Follow us on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex mb-6 border-b">
                <button 
                  className={`px-6 py-3 font-medium ${!showBookingForm ? 'text-stylegroup-green border-b-2 border-stylegroup-green' : 'text-stylegroup-darkgray'}`} 
                  onClick={() => setShowBookingForm(false)}
                >
                  Send a Message
                </button>
                <button 
                  className={`px-6 py-3 font-medium ${showBookingForm ? 'text-stylegroup-green border-b-2 border-stylegroup-green' : 'text-stylegroup-darkgray'}`} 
                  onClick={() => setShowBookingForm(true)}
                >
                  Book a Free Measure
                </button>
              </div>
              
              {!showBookingForm ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>Fill out this form and we'll get back to you as soon as possible.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName"
                            name="firstName"
                            value={contactForm.firstName}
                            onChange={handleContactChange}
                            placeholder="Your first name" 
                            required 
                            className={contactErrors.firstName ? "border-red-500" : ""}
                          />
                          {contactErrors.firstName && (
                            <p className="text-xs text-red-500">{contactErrors.firstName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName"
                            name="lastName"
                            value={contactForm.lastName}
                            onChange={handleContactChange}
                            placeholder="Your last name" 
                            required 
                            className={contactErrors.lastName ? "border-red-500" : ""}
                          />
                          {contactErrors.lastName && (
                            <p className="text-xs text-red-500">{contactErrors.lastName}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleContactChange}
                            type="email" 
                            placeholder="Your email address" 
                            required
                            className={contactErrors.email ? "border-red-500" : ""} 
                          />
                          {contactErrors.email && (
                            <p className="text-xs text-red-500">{contactErrors.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input 
                            id="phone"
                            name="phone"
                            value={contactForm.phone}
                            onChange={handleContactChange}
                            placeholder="Your phone number" 
                            className={contactErrors.phone ? "border-red-500" : ""}
                          />
                          {contactErrors.phone && (
                            <p className="text-xs text-red-500">{contactErrors.phone}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject"
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleContactChange}
                          placeholder="What is your message about?" 
                          required
                          className={contactErrors.subject ? "border-red-500" : ""} 
                        />
                        {contactErrors.subject && (
                          <p className="text-xs text-red-500">{contactErrors.subject}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={contactForm.message}
                          onChange={handleContactChange}
                          placeholder="Please provide details about your inquiry..."
                          className={`min-h-[120px] ${contactErrors.message ? "border-red-500" : ""}`}
                          required 
                        />
                        {contactErrors.message && (
                          <p className="text-xs text-red-500">{contactErrors.message}</p>
                        )}
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={contactLoading}
                        className="w-full bg-stylegroup-green hover:bg-stylegroup-green/90"
                      >
                        {contactLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Book a Free Measure & Quote</CardTitle>
                    <CardDescription>Schedule a time for our expert to visit your property.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bookingFirstName">First Name</Label>
                          <Input 
                            id="bookingFirstName"
                            name="firstName"
                            value={bookingForm.firstName}
                            onChange={handleBookingChange}
                            placeholder="Your first name" 
                            required
                            className={bookingErrors.firstName ? "border-red-500" : ""} 
                          />
                          {bookingErrors.firstName && (
                            <p className="text-xs text-red-500">{bookingErrors.firstName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bookingLastName">Last Name</Label>
                          <Input 
                            id="bookingLastName"
                            name="lastName"
                            value={bookingForm.lastName}
                            onChange={handleBookingChange}
                            placeholder="Your last name" 
                            required
                            className={bookingErrors.lastName ? "border-red-500" : ""} 
                          />
                          {bookingErrors.lastName && (
                            <p className="text-xs text-red-500">{bookingErrors.lastName}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bookingEmail">Email</Label>
                          <Input 
                            id="bookingEmail"
                            name="email"
                            value={bookingForm.email}
                            onChange={handleBookingChange}
                            type="email" 
                            placeholder="Your email address" 
                            required
                            className={bookingErrors.email ? "border-red-500" : ""} 
                          />
                          {bookingErrors.email && (
                            <p className="text-xs text-red-500">{bookingErrors.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bookingPhone">Phone</Label>
                          <Input 
                            id="bookingPhone"
                            name="phone"
                            value={bookingForm.phone}
                            onChange={handleBookingChange}
                            placeholder="Your phone number" 
                            required
                            className={bookingErrors.phone ? "border-red-500" : ""} 
                          />
                          {bookingErrors.phone && (
                            <p className="text-xs text-red-500">{bookingErrors.phone}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Property Address</Label>
                        <Input 
                          id="address"
                          name="address"
                          value={bookingForm.address}
                          onChange={handleBookingChange}
                          placeholder="Where should we conduct the measure?" 
                          required
                          className={bookingErrors.address ? "border-red-500" : ""} 
                        />
                        {bookingErrors.address && (
                          <p className="text-xs text-red-500">{bookingErrors.address}</p>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input 
                            id="preferredDate"
                            name="preferredDate"
                            value={bookingForm.preferredDate}
                            onChange={handleBookingChange}
                            type="date" 
                            min={new Date().toISOString().split('T')[0]} 
                            required
                            className={bookingErrors.preferredDate ? "border-red-500" : ""} 
                          />
                          {bookingErrors.preferredDate && (
                            <p className="text-xs text-red-500">{bookingErrors.preferredDate}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredTime">Preferred Time</Label>
                          <Select 
                            onValueChange={(value) => handleSelectChange(value, "preferredTime")}
                            value={bookingForm.preferredTime}
                          >
                            <SelectTrigger id="preferredTime" className={bookingErrors.preferredTime ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8:30AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                            </SelectContent>
                          </Select>
                          {bookingErrors.preferredTime && (
                            <p className="text-xs text-red-500">{bookingErrors.preferredTime}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="productInterest">Product Interest</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange(value, "productInterest")}
                          value={bookingForm.productInterest}
                        >
                          <SelectTrigger id="productInterest">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="blinds">Blinds</SelectItem>
                            <SelectItem value="shutters">Shutters</SelectItem>
                            <SelectItem value="awnings">Awnings</SelectItem>
                            <SelectItem value="curtains">Curtains</SelectItem>
                            <SelectItem value="motorization">Motorization</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="multiple">Multiple Products</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea 
                          id="notes"
                          name="notes"
                          value={bookingForm.notes}
                          onChange={handleBookingChange}
                          placeholder="Tell us more about your requirements..."
                          className="min-h-[80px]" 
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={bookingLoading}
                        className="w-full bg-stylegroup-green hover:bg-stylegroup-green/90"
                      >
                        {bookingLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Processing...
                          </>
                        ) : "Book Appointment"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
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
