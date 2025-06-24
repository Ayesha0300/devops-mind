
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Target, Lightbulb, CheckCircle } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Ayesha Bashir",
      role: "Lead DevOps Engineer",
      bio: "Certified Agentic & Robotic AI Engineer with expertise in cloud-native systems and automation.",
      image: "/lovable-uploads/d3029605-a658-40ef-a969-d79820e4c96a.png",
      skills: ["Python", "Kubernetes", "AWS", "Terraform"]
    },
    {
      name: "Sarah Johnson",
      role: "Cloud Architect",
      bio: "10+ years experience designing scalable cloud infrastructure for enterprise clients.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      skills: ["Azure", "GCP", "Docker", "Jenkins"]
    },
    {
      name: "Michael Chen",
      role: "Security Engineer",
      bio: "Cybersecurity specialist focused on DevSecOps and compliance frameworks.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["Security", "Compliance", "Monitoring", "Automation"]
    }
  ];

  const milestones = [
    { year: "2014", event: "Company Founded", description: "Started as a small DevOps consultancy" },
    { year: "2017", event: "100 Projects Milestone", description: "Completed our 100th successful project" },
    { year: "2020", event: "Cloud Excellence Award", description: "Recognized for outstanding cloud migrations" },
    { year: "2022", event: "AI Integration", description: "Pioneered AI-powered DevOps automation" },
    { year: "2024", event: "500+ Projects", description: "Celebrating over 500 successful deployments" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              About DevOps
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a team of passionate DevOps engineers, cloud architects, and automation specialists 
              dedicated to transforming how organizations build, deploy, and manage their applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with cutting-edge DevOps practices that accelerate innovation, 
                improve reliability, and drive business growth.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <Lightbulb className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading DevOps consultancy that bridges the gap between development and operations 
                through intelligent automation and best practices.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellence, innovation, transparency, and client success drive everything we do. 
                We believe in building long-term partnerships based on trust and results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in DevOps, 
              cloud technologies, and enterprise software development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade of innovation, growth, and successful partnerships in the DevOps space.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
