import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Cloud, Shield, Database, Zap, Users } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions built with modern technologies and best practices.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions on AWS, Azure, and Google Cloud platforms.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Comprehensive security audits and compliance management solutions.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Efficient data pipelines and analytics solutions for informed decisions.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation",
      description: "Streamlined processes through intelligent automation and CI/CD pipelines.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting",
      description: "Expert guidance to optimize your technology strategy and operations.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our DevOps Services
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Empowering your business with cutting-edge DevOps solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
