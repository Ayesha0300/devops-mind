
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Shield, Database, Zap, Code, Users, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions tailored to your business needs with automated deployment and monitoring.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security frameworks and compliance management to protect your digital assets and data.",
      color: "text-teal-600"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimized database solutions with automated backups, scaling, and performance monitoring.",
      color: "text-indigo-600"
    },
    {
      icon: Zap,
      title: "CI/CD Pipelines",
      description: "Streamlined continuous integration and deployment pipelines for faster, more reliable releases.",
      color: "text-yellow-600"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using modern IaC tools and best practices.",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "DevOps Consulting",
      description: "Expert guidance and strategic planning to optimize your development and operations workflows.",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive DevOps solutions to accelerate your digital transformation 
            and optimize your development lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-6">
                <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 group">
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
