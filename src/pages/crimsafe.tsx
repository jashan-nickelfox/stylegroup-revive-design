
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, Award, Clock, Wrench } from "lucide-react";

const CrimsafePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/img-crimsafe-banner.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Australia's Strongest Mesh Security Screens</h1>
              <p className="text-lg md:text-xl">Crimsafe: Now available at Style Group</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-6">Protect what is most precious to you</h2>
          <p className="text-lg leading-relaxed text-center mb-8">
            As we celebrate our 18th year, we're thrilled to introduce the next chapter of our journey: an official partnership with Crimsafe®.
          </p>
          <p className="text-lg leading-relaxed text-center">
            At Style Group, our family-driven ethos means we don't just offer products, but an assurance of quality and care. With over 60 years of combined experience in the home finishing industry, our directors have always believed in sourcing and offering the best. And Crimsafe® is a testament to that promise.
          </p>
        </section>

        {/* Product Overview */}
        <section className="bg-stylegroup-lightgray py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-4">Crafted for Strength and Style</h3>
            <p className="text-lg leading-relaxed mb-4">
              Crafted meticulously with superior stainless-steel mesh, each Crimsafe® screen is more than just a security solution. Secured with a patented clamp system and firmly anchored in a robust frame, these screens not only provide unmatched security against potential intruders but also resilience against the unpredictability of nature, be it cyclones or bush-fires. And not to forget, they're a stellar guard against those pesky pests.
            </p>
            <p className="text-lg leading-relaxed">
              Whether it's the majestic allure of Crimsafe® Windows and Doors you seek, or the steadfast protection of Crimsafe® screens, Style Group is poised to deliver. With our legacy in providing top-notch home finishes, marrying security with sophistication has never been this seamless.
            </p>
          </div>
        </section>

        {/* Protection Levels */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Four Levels of Protection for Your Home or Business</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Regular', description: 'Essential protection for your home and family' },
              { title: 'Classic', description: 'The new benchmark in security screens' },
              { title: 'Ultimate', description: 'Take your home security to the next level' },
              { title: 'iQ', description: 'Australia\'s first smart digital mesh security screen' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">Crimsafe® {item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-stylegroup-lightgray py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-center mb-8">Crimsafe Product Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'Strength', description: 'Crimsafe has been tested to be FIVE TIMES stronger than the Australian Standard.' },
                { icon: Lock, title: 'Fastening Method', description: ''Screw-Clamped' Mesh – creates a barrier that cannot be kicked in.' },
                { icon: Award, title: 'Warranty', description: '12 Years of protection covered under your Crimsafe extended warranty.' },
                { icon: Wrench, title: 'Clamping System', description: 'Exclusive Screw-Clamp™ technology ensures a barrier that cannot be kicked in.' },
                { icon: Eye, title: 'Locking Options', description: 'Can be mechanical or electronic (allowing access by Keypad, Bluetooth or Keyfob)' },
                { icon: Clock, title: 'Stainless Mesh', description: 'Crimsafe Tensile-Tuff® stainless steel mesh is 26.5% thicker than typical stainless steel mesh.' },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <feature.icon className="h-6 w-6 text-stylegroup-green mr-3" />
                    <h4 className="text-lg font-bold">{feature.title}</h4>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Enhance Your Home Security?</h3>
          <p className="text-lg mb-6">
            Discover the Style Group difference, now fortified with Crimsafe® excellence. Your peace of mind, safety, and home elegance are our priorities.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-stylegroup-green text-white px-6 py-3 rounded hover:bg-stylegroup-green/90 transition-colors"
          >
            Arrange your FREE Measure & Quote
          </Link>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </div>
  );
};

export default CrimsafePage;
