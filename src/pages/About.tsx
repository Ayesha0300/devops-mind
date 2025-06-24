
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Target, Lightbulb, CheckCircle, Linkedin, Github, ExternalLink } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Ayesha Bashir",
      role: "Lead DevOps Engineer & AI Specialist",
      bio: "Certified Agentic & Robotic AI Engineer with expertise in cloud-native systems, automation, and modern web development. Passionate about bridging the gap between development and operations.",
      image: "/lovable-uploads/d3029605-a658-40ef-a969-d79820e4c96a.png",
      skills: ["Python", "Kubernetes", "AWS", "Terraform", "React", "TypeScript", "AI/ML"],
      linkedin: "https://www.linkedin.com/in/ayesha-bashir-60b83b2b1/",
      github: "https://github.com/Ayesha0300",
      portfolio: "https://v0-modern-portfolio-website-delta-umber.vercel.app/"
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
    { year: "2020", event: "Started Journey", description: "Began specializing in DevOps and cloud technologies" },
    { year: "2021", event: "AI Certification", description: "Became certified in Agentic & Robotic AI Engineering" },
    { year: "2022", event: "Cloud Excellence", description: "Achieved expertise in AWS, Azure, and multi-cloud deployments" },
    { year: "2023", event: "DevOps Mastery", description: "Specialized in Kubernetes, Terraform, and automation" },
    { year: "2024", event: "Full-Stack Innovation", description: "Integrated AI with modern web development and DevOps practices" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              About Ayesha Bashir
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate DevOps engineer, AI specialist, and full-stack developer dedicated to 
              transforming how organizations build, deploy, and manage their applications through 
              cutting-edge automation and intelligent solutions.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <Button asChild variant="outline">
                <a 
                  href="https://www.linkedin.com/in/ayesha-bashir-60b83b2b1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://github.com/Ayesha0300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button asChild>
                <a 
                  href="https://v0-modern-portfolio-website-delta-umber.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Portfolio</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">My Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with cutting-edge DevOps practices and AI-driven solutions 
                that accelerate innovation, improve reliability, and drive business growth.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <Lightbulb className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">My Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between development, operations, and artificial intelligence 
                through intelligent automation and innovative solutions.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">My Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellence, continuous learning, innovation, and creating impactful solutions 
                that make a difference in the tech industry.
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
              cloud technologies, AI, and enterprise software development.
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
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {member.linkedin && (
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
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
              My Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous learning, innovation, and growth in the DevOps and AI space.
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
