
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Terms of Service</h1>
            
            <div className="prose max-w-none">
              <p>Last Updated: April 15, 2025</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement between you and Style Group regarding your use of our website and services.
              </p>
              
              <h2>2. Services</h2>
              <p>
                Style Group provides window furnishing products and services for residential and commercial clients. Our services include consultation, measuring, supplying, and installing various window treatments including blinds, shutters, awnings, and curtains.
              </p>
              
              <h2>3. Quotes and Pricing</h2>
              <p>
                All quotes provided are valid for 30 days from the date of issue unless otherwise specified. Prices are subject to change without notice. We reserve the right to vary any quoted price if there is a change in specifications or requirements.
              </p>
              
              <h2>4. Payment Terms</h2>
              <p>
                A 50% deposit is required to confirm orders, with the balance due upon successful installation. We accept various payment methods including credit cards, direct bank transfers, and cash. All goods remain the property of Style Group until paid for in full.
              </p>
              
              <h2>5. Installation and Delivery</h2>
              <p>
                Estimated lead times will be provided but may vary due to product availability, manufacturing timeframes, and installation schedules. We will make every reasonable effort to meet communicated timeframes but cannot guarantee specific dates unless confirmed in writing.
              </p>
              
              <h2>6. Warranties</h2>
              <p>
                Our products come with warranties as specified at the time of purchase. Installation is warranted for 12 months from the date of completion. Warranty claims must be submitted in writing and are subject to inspection by our representatives.
              </p>
              
              <h2>7. Website Use</h2>
              <p>
                The content on our website is for general information purposes only. While we strive to provide accurate information, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of the information provided.
              </p>
              
              <h2>8. Intellectual Property</h2>
              <p>
                All content on our website, including text, images, logos, graphics, and design, is the property of Style Group and is protected by Australian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works of any materials on our website without our express written permission.
              </p>
              
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Style Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or in connection with your use of our website or services.
              </p>
              
              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Style Group, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of our website or services, or your violation of these Terms.
              </p>
              
              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Queensland, Australia, without regard to its conflict of law provisions.
              </p>
              
              <h2>12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website or services constitutes your acceptance of the modified Terms.
              </p>
              
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Style Group<br />
                123 Main St<br />
                Brisbane, QLD 4000<br />
                Email: info@stylegroup.com.au<br />
                Phone: 07 3324 0900
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default TermsOfService;
