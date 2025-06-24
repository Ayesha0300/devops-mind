
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Target, Lightbulb } from 'lucide-react';

const AboutTeaser = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Building the Future of 
                <span className="text-blue-600"> Digital Operations</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over a decade of experience in DevOps and cloud technologies, 
                we've helped hundreds of organizations transform their development processes 
                and achieve operational excellence.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <Target className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <Lightbulb className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <img 
                src="/lovable-uploads/816ddf16-dc28-47ac-8638-81efcdfa9da1.png" 
                alt="Professional Team" 
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-200 rounded-full opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
