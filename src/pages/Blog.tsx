import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Clock, User, Tag } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Perfect Blinds for Your Brisbane Home",
      excerpt: "Finding the right blinds involves considering light control, privacy needs, and your home's style. This guide walks you through the options.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Blinds",
      author: "Emily Johnson",
      date: "June 15, 2023",
      slug: "how-to-choose-perfect-blinds"
    },
    {
      id: 2,
      title: "Plantation Shutters: The Ultimate Guide",
      excerpt: "Plantation shutters offer timeless elegance and practical benefits. Discover everything you need to know about these popular window treatments.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Shutters",
      author: "Michael Smith",
      date: "May 22, 2023",
      slug: "plantation-shutters-ultimate-guide"
    },
    {
      id: 3,
      title: "5 Ways to Keep Your Home Cool This Summer with Window Furnishings",
      excerpt: "Beat the Brisbane heat with these effective window treatments designed to keep your home cool and comfortable during summer.",
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Tips",
      author: "Sarah Williams",
      date: "April 10, 2023",
      slug: "keep-home-cool-summer-window-furnishings"
    },
    {
      id: 4,
      title: "Manual Blinds: Which Is Right for You?",
      excerpt: "Explore the pros and cons of different manual blind options to determine which best suits your home and lifestyle needs.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Blinds",
      author: "David Brown",
      date: "March 5, 2023",
      slug: "manual-blinds-comparison"
    },
    {
      id: 5,
      title: "The Latest Curtain Trends for 2023",
      excerpt: "Stay on top of the latest curtain styles, fabrics, and colors that are trending this year for modern Australian homes.",
      image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Curtains",
      author: "Jessica Lee",
      date: "February 18, 2023",
      slug: "latest-curtain-trends"
    },
    {
      id: 6,
      title: "Window Treatments for Challenging Windows",
      excerpt: "Solutions for unusually shaped, oversized, or hard-to-reach windows that require specialized window furnishings.",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      category: "Solutions",
      author: "Robert Taylor",
      date: "January 29, 2023",
      slug: "window-treatments-challenging-windows"
    },
  ];
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container py-12 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-center mb-4">Style Group Blog</h1>
            <p className="text-stylegroup-darkgray text-lg mb-8">
              Insights, tips, and inspiration for window furnishings in Brisbane and beyond.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search blog posts..."
                      className="w-full px-4 py-3 pr-12 border border-stylegroup-midgray rounded-md focus:ring-2 focus:ring-stylegroup-green focus:outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stylegroup-darkgray h-5 w-5" />
                  </div>
                </div>
                
                <div className="space-y-8">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                      <article key={post.id} className="bg-stylegroup-lightgray/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                          <div className="aspect-square md:aspect-auto overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                          </div>
                          <div className="md:col-span-2 p-6">
                            <div className="flex items-center mb-4 text-xs text-stylegroup-darkgray space-x-4">
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {post.date}
                              </span>
                              <span className="flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                {post.author}
                              </span>
                              <span className="flex items-center">
                                <Tag className="h-3 w-3 mr-1" />
                                {post.category}
                              </span>
                            </div>
                            <h2 className="text-xl font-medium text-stylegroup-green mb-3 hover:text-stylegroup-green/80 transition-colors">
                              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className="text-stylegroup-darkgray mb-4">{post.excerpt}</p>
                            <Link 
                              to={`/blog/${post.slug}`}
                              className="inline-flex items-center text-stylegroup-green font-medium hover:underline"
                            >
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium text-stylegroup-darkgray mb-2">No results found</h3>
                      <p className="text-stylegroup-darkgray mb-4">Try different keywords or browse our categories</p>
                      <Button 
                        onClick={() => setSearchQuery("")}
                        variant="outline"
                        className="border-stylegroup-green text-stylegroup-green hover:bg-stylegroup-green/10"
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="bg-stylegroup-lightgray p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-medium text-stylegroup-green mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button 
                          className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-white text-left"
                          onClick={() => setSearchQuery(category)}
                        >
                          <span>{category}</span>
                          <ArrowRight className="h-4 w-4 text-stylegroup-green" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-stylegroup-green text-white p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Need Expert Advice?</h3>
                  <p className="mb-6 text-white/80">
                    Our team is ready to help you choose the perfect window furnishings for your home or business.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-stylegroup-green hover:bg-stylegroup-lightgray">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Blog;
