
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Clock, User, Search, ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'DevOps', 'Cloud', 'Security', 'AI & Automation', 'Best Practices'];

  const blogPosts = [
    {
      title: "The Future of DevOps: AI-Powered Automation",
      excerpt: "Explore how artificial intelligence is revolutionizing DevOps practices, from predictive scaling to intelligent incident response, and what it means for your organization's future.",
      author: "Ayesha Bashir",
      date: "December 20, 2024",
      readTime: "5 min read",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop",
      featured: true
    },
    {
      title: "Kubernetes Security Best Practices for 2025",
      excerpt: "Essential security strategies to protect your Kubernetes clusters and containerized applications in an evolving threat landscape.",
      author: "DevOps Security Team",
      date: "December 18, 2024",
      readTime: "8 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Cloud Cost Optimization: A Complete Guide",
      excerpt: "Learn proven strategies to reduce cloud costs by up to 40% while maintaining performance and scalability for your applications.",
      author: "Cloud Architecture Team",
      date: "December 15, 2024",
      readTime: "6 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "GitOps vs DevOps: Understanding the Evolution",
      excerpt: "Dive deep into GitOps principles and understand how it builds upon traditional DevOps practices to enable more reliable deployments.",
      author: "Platform Engineering Team",
      date: "December 12, 2024",
      readTime: "7 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Implementing Zero-Trust Architecture in DevOps",
      excerpt: "A comprehensive guide to implementing zero-trust security principles in your DevOps pipeline and infrastructure.",
      author: "Security Engineering Team",
      date: "December 10, 2024",
      readTime: "9 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Infrastructure as Code: Terraform vs CloudFormation",
      excerpt: "Compare the leading IaC tools and learn which one is best suited for your organization's cloud infrastructure needs.",
      author: "Infrastructure Team",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Monitoring and Observability in Microservices",
      excerpt: "Essential strategies for implementing comprehensive monitoring and observability in distributed microservices architectures.",
      author: "SRE Team",
      date: "December 5, 2024",
      readTime: "8 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "CI/CD Pipeline Security: Protecting Your Supply Chain",
      excerpt: "Learn how to secure your CI/CD pipelines against supply chain attacks and implement security scanning at every stage.",
      author: "DevSecOps Team",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Multi-Cloud Strategy: Benefits and Challenges",
      excerpt: "Explore the advantages and complexities of multi-cloud deployments and learn best practices for implementation.",
      author: "Cloud Strategy Team",
      date: "December 1, 2024",
      readTime: "7 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=300&fit=crop",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              DevOps Insights & Articles
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest trends, best practices, and insights 
              from the world of DevOps, cloud technologies, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-white">Featured</Badge>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
                  <div>
                    <Badge className="mb-4">{featuredPost.category}</Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 pb-6 border-b">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-900">{post.category}</Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="text-gray-500">
                      {post.date}
                    </div>
                  </div>

                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 group">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Stay Updated with DevOps Insights
            </h2>
            <p className="text-xl text-gray-600">
              Subscribe to our newsletter and get the latest DevOps articles, 
              tutorials, and best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
