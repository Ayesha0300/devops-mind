
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your 
            <span className="text-blue-200"> DevOps Journey?</span>
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed">
            Join hundreds of organizations that have accelerated their development cycles, 
            improved security, and reduced operational costs with our expert DevOps solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-blue-400/30">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="text-blue-200">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-blue-200">hello@devops.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
