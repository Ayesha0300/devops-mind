
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, User } from 'lucide-react';

const BlogTeaser = () => {
  const blogPosts = [
    {
      title: "The Future of DevOps: AI-Powered Automation",
      excerpt: "Explore how artificial intelligence is revolutionizing DevOps practices and what it means for your organization.",
      author: "Ayesha Bashir",
      date: "Dec 20, 2024",
      readTime: "5 min read",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      title: "Kubernetes Security Best Practices for 2025",
      excerpt: "Essential security strategies to protect your Kubernetes clusters and containerized applications.",
      author: "DevOps Team",
      date: "Dec 18, 2024", 
      readTime: "8 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      title: "Cloud Cost Optimization: A Complete Guide",
      excerpt: "Learn proven strategies to reduce cloud costs while maintaining performance and scalability.",
      author: "Cloud Experts",
      date: "Dec 15, 2024",
      readTime: "6 min read", 
      category: "Cloud Strategy",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights 
            from the world of DevOps and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
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

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
