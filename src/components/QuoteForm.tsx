import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Store data in Supabase
      const { error } = await supabase.from("quote_requests").insert({
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        product_interest: formData.project,
        message: formData.message,
      });

      if (error) {
        throw error;
      }

      setSubmitted(true);

      toast({
        title: "Request Submitted",
        description: "We'll be in touch with you soon!",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          project: "",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description:
          error.message ||
          "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-stylegroup-lightgray">
      <div className="container">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="bg-stylegroup-green text-white p-8 lg:p-12 lg:col-span-2">
              <h2 className="font-serif text-3xl mb-6">Request a Free Quote</h2>
              <p className="mb-8 text-white/80">
                Get started with a free, no-obligation quote for your window
                furnishing project. We'll help you find the perfect solution for
                your home or business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Check className="h-5 w-5 text-stylegroup-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Free Measure & Quote
                    </h3>
                    <p className="text-white/80 text-sm">
                      We'll visit your property to take precise measurements at
                      no cost
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Check className="h-5 w-5 text-stylegroup-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Expert Advice</h3>
                    <p className="text-white/80 text-sm">
                      Get personalized recommendations from our window treatment
                      specialists
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Check className="h-5 w-5 text-stylegroup-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">No Pressure</h3>
                    <p className="text-white/80 text-sm">
                      Detailed quote with clear pricing and no obligation to
                      proceed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-green-100 text-green-700 rounded-full p-4 mb-6">
                    <Check className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-medium mb-3">Thank You!</h3>
                  <p className="text-stylegroup-darkgray mb-6">
                    Your quote request has been successfully submitted. One of
                    our team members will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
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
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
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
                      <label
                        htmlFor="project"
                        className="block text-sm font-medium mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none bg-white"
                      >
                        <option value="">Select project type</option>
                        <option value="blinds">Blinds</option>
                        <option value="shutters">Shutters</option>
                        <option value="awnings">Awnings</option>
                        <option value="curtains">Curtains</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2.5 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
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
                          Processing...
                        </>
                      ) : (
                        "Submit Quote Request"
                      )}
                    </Button>
                    <p className="text-xs text-stylegroup-darkgray mt-4">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
