
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleWatchDemo = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Empowering Your Business with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  {" "}Cutting-Edge DevOps
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in">
                Transform your development lifecycle with our expert DevOps solutions. 
                We streamline operations, enhance security, and accelerate delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white group"
                onClick={handleGetStarted}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 group"
                onClick={handleWatchDemo}
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 animate-fade-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/ed77ed91-52fd-4555-a94e-e8c1ba77567c.png" 
                alt="DevOps Innovation" 
                className="w-full max-w-lg mx-auto animate-scale-in"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-500/10 rounded-full animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
