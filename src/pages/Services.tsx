
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cloud, Shield, Database, Zap, Code, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Design, deploy, and manage scalable cloud infrastructure across AWS, Azure, and GCP platforms.",
      features: ["Multi-cloud architecture", "Auto-scaling solutions", "Cost optimization", "Disaster recovery"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "CI/CD Pipelines",
      description: "Implement automated continuous integration and deployment pipelines for faster, more reliable releases.",
      features: ["Automated testing", "Release automation", "Quality gates", "Rollback strategies"],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Integrate security practices into your DevOps workflow with comprehensive compliance frameworks.",
      features: ["DevSecOps implementation", "Compliance automation", "Security scanning", "Audit trails"],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through machine-readable definition files.",
      features: ["Terraform automation", "CloudFormation templates", "Version control", "Environment consistency"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimize database performance, implement automated backups, and ensure high availability.",
      features: ["Performance tuning", "Automated backups", "High availability", "Migration services"],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Users,
      title: "DevOps Consulting",
      description: "Strategic guidance and best practices to transform your development and operations culture.",
      features: ["Process optimization", "Team training", "Tool selection", "Culture transformation"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive DevOps solutions designed to accelerate your development lifecycle, 
              improve security, and optimize operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful DevOps transformation 
              and deliver measurable results for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Analyze current infrastructure and identify improvement opportunities" },
              { step: "02", title: "Strategy", description: "Develop a customized DevOps roadmap aligned with your business goals" },
              { step: "03", title: "Implementation", description: "Execute the plan with minimal disruption to your operations" },
              { step: "04", title: "Optimization", description: "Continuously monitor, measure, and optimize performance" }
            ].map((process, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your DevOps challenges and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
