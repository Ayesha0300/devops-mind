
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Modernization",
      client: "RetailFlow Solutions",
      category: "Cloud Migration",
      description: "Complete DevOps transformation for a major e-commerce platform, resulting in 80% faster deployments and 99.9% uptime.",
      challenge: "Legacy infrastructure causing frequent outages and slow deployment cycles affecting customer experience and revenue.",
      solution: "Implemented microservices architecture on Kubernetes with automated CI/CD pipelines and comprehensive monitoring.",
      results: [
        "80% reduction in deployment time",
        "99.9% uptime achieved",
        "50% decrease in infrastructure costs",
        "90% reduction in critical incidents"
      ],
      technologies: ["AWS", "Kubernetes", "Jenkins", "Terraform", "Prometheus"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      duration: "6 months",
      team: "8 engineers"
    },
    {
      title: "Financial Services Cloud Migration",
      client: "SecureBank Corporation",
      category: "Security & Compliance",
      description: "Secure cloud migration for a financial institution with strict regulatory requirements and zero-downtime mandate.",
      challenge: "Migrating sensitive financial data to cloud while maintaining PCI DSS compliance and ensuring zero downtime.",
      solution: "Phased migration approach with enhanced security controls, automated compliance monitoring, and disaster recovery.",
      results: [
        "100% compliance maintained",
        "Zero security incidents",
        "60% reduction in operational costs",
        "Improved disaster recovery capabilities"
      ],
      technologies: ["Azure", "Docker", "Ansible", "HashiCorp Vault", "Splunk"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      duration: "8 months",
      team: "12 engineers"
    },
    {
      title: "Healthcare Data Pipeline",
      client: "MedTech Innovations",
      category: "Data Engineering",
      description: "HIPAA-compliant real-time data processing pipeline for healthcare analytics and patient monitoring systems.",
      challenge: "Processing large volumes of patient data in real-time while ensuring HIPAA compliance and data security.",
      solution: "Built scalable data pipeline with automated compliance checks, real-time processing, and secure data storage.",
      results: [
        "Real-time data processing achieved",
        "HIPAA compliance certified",
        "90% faster analytics generation",
        "Improved patient care outcomes"
      ],
      technologies: ["GCP", "Apache Kafka", "MongoDB", "Grafana", "Dataflow"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      duration: "5 months",
      team: "6 engineers"
    },
    {
      title: "Startup Scaling Infrastructure",
      client: "GrowthCorp Technologies",
      category: "Auto-scaling",
      description: "Auto-scaling infrastructure supporting 10x user growth with minimal operational overhead for a fast-growing startup.",
      challenge: "Rapidly scaling infrastructure to handle explosive user growth while maintaining performance and controlling costs.",
      solution: "Implemented auto-scaling architecture with load balancing, container orchestration, and cost optimization.",
      results: [
        "10x user growth supported",
        "Auto-scaling implemented",
        "95% deployment reliability",
        "40% cost optimization achieved"
      ],
      technologies: ["AWS", "EKS", "GitLab CI", "Helm", "CloudWatch"],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      duration: "4 months",
      team: "5 engineers"
    },
    {
      title: "Manufacturing IoT Platform",
      client: "IndustrialTech Systems",
      category: "IoT & Edge Computing",
      description: "Edge computing platform for real-time manufacturing analytics and predictive maintenance systems.",
      challenge: "Processing sensor data from thousands of manufacturing devices in real-time for predictive maintenance.",
      solution: "Edge computing architecture with real-time analytics, machine learning models, and centralized monitoring.",
      results: [
        "Real-time analytics implemented",
        "30% reduction in equipment downtime",
        "Predictive maintenance enabled",
        "ROI achieved within 6 months"
      ],
      technologies: ["Azure IoT", "Edge Computing", "Machine Learning", "Time Series DB"],
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
      duration: "7 months",
      team: "10 engineers"
    },
    {
      title: "Global Media Streaming Platform",
      client: "StreamMax Entertainment",
      category: "Global Infrastructure",
      description: "Global content delivery network and streaming infrastructure supporting millions of concurrent users.",
      challenge: "Delivering high-quality video content to millions of global users with minimal latency and maximum availability.",
      solution: "Multi-region CDN deployment with auto-scaling, content optimization, and global load balancing.",
      results: [
        "Global reach achieved",
        "99.99% availability maintained",
        "50% improvement in streaming quality",
        "Support for 10M+ concurrent users"
      ],
      technologies: ["AWS", "CloudFront", "Lambda", "DynamoDB", "ElastiCache"],
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
      duration: "9 months",
      team: "15 engineers"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our successful DevOps transformations and see how we've helped 
              organizations across industries achieve their technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{study.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-4">
                        Client: {study.client}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Duration:</span>
                        <span className="text-gray-600 ml-2">{study.duration}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Team:</span>
                        <span className="text-gray-600 ml-2">{study.team}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                      View Detailed Case Study
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your organization with proven DevOps practices and cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
