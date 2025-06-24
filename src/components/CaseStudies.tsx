
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Modernization",
      client: "RetailFlow",
      description: "Complete DevOps transformation resulting in 80% faster deployments and 99.9% uptime.",
      technologies: ["AWS", "Kubernetes", "Jenkins", "Terraform"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      results: ["80% faster deployments", "99.9% uptime achieved", "50% cost reduction"]
    },
    {
      title: "Financial Services Cloud Migration",
      client: "SecureBank",
      description: "Secure cloud migration with compliance frameworks and automated security monitoring.",
      technologies: ["Azure", "Docker", "Ansible", "Prometheus"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      results: ["100% compliance maintained", "60% infrastructure cost savings", "Zero security incidents"]
    },
    {
      title: "Healthcare Data Pipeline",
      client: "MedTech Solutions",
      description: "HIPAA-compliant data processing pipeline with real-time analytics and monitoring.",
      technologies: ["GCP", "Apache Kafka", "MongoDB", "Grafana"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop",
      results: ["Real-time data processing", "HIPAA compliance achieved", "90% faster analytics"]
    },
    {
      title: "Startup Scaling Infrastructure",
      client: "GrowthCorp",
      description: "Auto-scaling infrastructure supporting 10x user growth with minimal operational overhead.",
      technologies: ["AWS", "EKS", "GitLab CI", "Helm"],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=300&fit=crop",
      results: ["10x user growth supported", "Auto-scaling implemented", "95% deployment reliability"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we've helped organizations across industries achieve 
            their DevOps transformation goals and drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Case Study</Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">
                    Client: {study.client}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 group">
                  View Full Case Study
                  <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
