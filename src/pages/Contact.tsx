
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BackToTop from "@/components/BackToTop";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    // Check if we should show booking form based on location state
    if (location.state && location.state.showBookingForm === true) {
      setShowBookingForm(true);
    }
  }, [location.state]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received",
      description: "One of our team members will contact you to confirm your appointment.",
    });
  };

  const toggleForm = () => {
    setShowBookingForm(!showBookingForm);
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
                          <Input id="firstName" placeholder="Your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Your last name" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Your email address" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="Your phone number" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is your message about?" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please provide details about your inquiry..."
                          className="min-h-[120px]"
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-stylegroup-green hover:bg-stylegroup-green/90">
                        Send Message
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
                          <Input id="bookingFirstName" placeholder="Your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bookingLastName">Last Name</Label>
                          <Input id="bookingLastName" placeholder="Your last name" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bookingEmail">Email</Label>
                          <Input id="bookingEmail" type="email" placeholder="Your email address" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bookingPhone">Phone</Label>
                          <Input id="bookingPhone" placeholder="Your phone number" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Property Address</Label>
                        <Input id="address" placeholder="Where should we conduct the measure?" required />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input id="preferredDate" type="date" min={new Date().toISOString().split('T')[0]} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredTime">Preferred Time</Label>
                          <Select>
                            <SelectTrigger id="preferredTime">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8:30AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="productInterest">Product Interest</Label>
                        <Select>
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
                          placeholder="Tell us more about your requirements..."
                          className="min-h-[80px]" 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-stylegroup-green hover:bg-stylegroup-green/90">
                        Book Appointment
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
