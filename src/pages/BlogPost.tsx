
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts = {
    'building-intelligent-applications-openai-agents-sdk': {
      title: "Building Intelligent Applications with OpenAI Agents SDK",
      content: `
        <h2>Introduction</h2>
        <p>The OpenAI Agents SDK represents a significant leap forward in building autonomous AI applications. This comprehensive guide will walk you through everything you need to know to leverage this powerful toolkit effectively.</p>
        
        <h2>What are AI Agents?</h2>
        <p>AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional chatbots or simple AI models, agents can:</p>
        <ul>
          <li>Plan and execute multi-step tasks</li>
          <li>Interact with external APIs and services</li>
          <li>Maintain context across long conversations</li>
          <li>Learn and adapt from interactions</li>
        </ul>

        <h2>Getting Started with OpenAI Agents SDK</h2>
        <p>The OpenAI Agents SDK provides a framework for building, deploying, and managing AI agents at scale. Here's how to get started:</p>
        
        <h3>Installation</h3>
        <pre><code>npm install @openai/agents-sdk</code></pre>
        
        <h3>Basic Agent Setup</h3>
        <pre><code>import { Agent } from '@openai/agents-sdk';

const myAgent = new Agent({
  name: 'CustomerSupportAgent',
  description: 'Handles customer inquiries and support requests',
  tools: ['email', 'database', 'scheduling'],
  model: 'gpt-4-turbo'
});</code></pre>

        <h2>Key Features and Capabilities</h2>
        <p>The SDK offers several powerful features:</p>
        
        <h3>1. Tool Integration</h3>
        <p>Agents can seamlessly integrate with external tools and APIs, allowing them to perform real-world actions beyond text generation.</p>
        
        <h3>2. Memory Management</h3>
        <p>Built-in memory systems help agents maintain context across sessions and learn from past interactions.</p>
        
        <h3>3. Multi-Agent Orchestration</h3>
        <p>Coordinate multiple agents to work together on complex tasks, each with specialized roles and capabilities.</p>

        <h2>Real-World Use Cases</h2>
        <p>Here are some practical applications where AI agents excel:</p>
        
        <h3>Customer Service Automation</h3>
        <p>Deploy agents that can handle customer inquiries, process returns, and escalate complex issues to human representatives when needed.</p>
        
        <h3>Content Management</h3>
        <p>Create agents that can research, write, edit, and publish content across multiple platforms while maintaining brand consistency.</p>
        
        <h3>Data Analysis and Reporting</h3>
        <p>Build agents that can analyze large datasets, generate insights, and create automated reports for stakeholders.</p>

        <h2>Best Practices</h2>
        <p>To maximize the effectiveness of your AI agents:</p>
        <ul>
          <li>Define clear objectives and success metrics</li>
          <li>Implement proper error handling and fallback mechanisms</li>
          <li>Regularly monitor and evaluate agent performance</li>
          <li>Provide adequate training data and examples</li>
          <li>Maintain human oversight for critical decisions</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The OpenAI Agents SDK opens up exciting possibilities for building truly intelligent applications. By following the principles and practices outlined in this article, you can create agents that deliver real value to your users and organization.</p>
        
        <p>As the technology continues to evolve, we can expect even more sophisticated capabilities and easier integration paths. The future of AI agents is bright, and now is the perfect time to start experimenting with this powerful technology.</p>
      `,
      author: "Ayesha Bashir",
      date: "December 25, 2024",
      readTime: "7 min read",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    'future-devops-ai-automation': {
      title: "The Future of DevOps: AI-Powered Automation",
      content: `
        <h2>The Evolution of DevOps</h2>
        <p>DevOps has transformed how we build, deploy, and maintain software systems. Now, artificial intelligence is set to revolutionize DevOps practices once again.</p>
        
        <h2>AI in Continuous Integration/Continuous Deployment</h2>
        <p>AI is making CI/CD pipelines smarter and more efficient...</p>
        
        <h2>Predictive Analytics for Infrastructure</h2>
        <p>Machine learning models can predict infrastructure failures before they occur...</p>
      `,
      author: "Ayesha Bashir",
      date: "December 20, 2024",
      readTime: "5 min read",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    }
    // Add more blog posts as needed
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="border-gray-300 dark:border-gray-600">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
            
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-li:text-gray-700 dark:prose-li:text-gray-300
                prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-code:bg-gray-100 dark:prose-code:bg-gray-800
                prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
                prose-pre:text-gray-900 dark:prose-pre:text-gray-100"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Continue Reading
            </h2>
            <Link to="/blog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
