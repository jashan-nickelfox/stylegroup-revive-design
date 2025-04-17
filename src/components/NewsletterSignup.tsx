
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Check, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check for valid email format
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        throw new Error("Please enter a valid email address");
      }

      // Store in Supabase
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email });

      if (error) {
        if (error.code === '23505') {
          // Unique violation - email already exists
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        setSubmitted(true);
        toast({
          title: "Thank You!",
          description: "You've been successfully added to our newsletter.",
        });

        // Reset after 3 seconds
        setTimeout(() => {
          setEmail("");
          setSubmitted(false);
        }, 3000);
      }
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Subscription Error",
        description: error.message || "There was a problem subscribing to the newsletter.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-stylegroup-green text-white py-12 md:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/10 p-3 rounded-full mb-6">
            <Mail className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Stay Updated with Style Group</h2>
          <p className="text-white/80 mb-8 text-lg">
            Join our newsletter for the latest window furnishing trends, special offers, and expert design tips.
          </p>

          {submitted ? (
            <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
              <div className="bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">Thank You for Subscribing!</h3>
              <p className="text-white/80">
                You're now on the list! Watch your inbox for exclusive promotions and updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white border-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stylegroup-green"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-stylegroup-lightgreen hover:bg-stylegroup-lightgreen/90 text-stylegroup-green font-medium whitespace-nowrap"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : "Subscribe"}
              </Button>
            </form>
          )}
          
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
