
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The DevOps transformation they delivered exceeded our expectations. Our deployment times decreased by 75% and system reliability improved dramatically.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and results-driven. They helped us migrate to the cloud seamlessly while maintaining zero downtime.",
      author: "Michael Chen",
      role: "Engineering Director",
      company: "CloudScale Inc",
      rating: 5
    },
    {
      quote: "Their security-first approach to DevOps gave us the confidence to scale rapidly while maintaining compliance standards.",
      author: "Emily Rodriguez",
      role: "Head of Operations",
      company: "SecureData Corp",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say 
            about our DevOps solutions and services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
