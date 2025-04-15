
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p>Last Updated: April 15, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                Style Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways:</p>
              
              <h3>2.1 Personal Data</h3>
              <p>
                When you interact with our website or services, we may collect personal information such as:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Information provided when requesting quotes or services</li>
              </ul>
              
              <h3>2.2 Derivative Data</h3>
              <p>
                Our servers automatically collect information when you access our website, such as your IP address, browser type, operating system, referring URLs, device information, and pages visited.
              </p>
              
              <h3>2.3 Financial Data</h3>
              <p>
                We may collect financial information related to payment processing. However, we do not store complete credit card information on our servers.
              </p>
              
              <h2>3. How We Use Your Information</h2>
              <p>We may use the information we collect about you to:</p>
              <ul>
                <li>Provide, operate, and maintain our services</li>
                <li>Process and fulfill quote requests and orders</li>
                <li>Send administrative information</li>
                <li>Respond to inquiries and offer support</li>
                <li>Improve our website and services</li>
                <li>Send marketing and promotional communications</li>
                <li>Monitor and analyze usage trends</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
              
              <h2>4. Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations:</p>
              
              <h3>4.1 Business Transfers</h3>
              <p>
                If we or our subsidiaries are involved in a merger, acquisition, or sale of all or a portion of assets, your information may be transferred as part of that transaction.
              </p>
              
              <h3>4.2 Third-Party Service Providers</h3>
              <p>
                We may share your information with third-party vendors, consultants, and other service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>
              
              <h3>4.3 Legal Requirements</h3>
              <p>
                We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.
              </p>
              
              <h2>5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable measures to secure your information, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the absolute security of your data.
              </p>
              
              <h2>6. Cookie Policy</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
              </p>
              
              <h2>7. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction or deletion of your personal information</li>
                <li>The right to object to or restrict processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
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
      <FloatingContact />
    </div>
  );
};

export default PrivacyPolicy;
