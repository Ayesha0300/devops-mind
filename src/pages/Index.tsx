
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Cloud, Shield, Database, Zap, Users, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import AboutTeaser from '@/components/AboutTeaser';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import BlogTeaser from '@/components/BlogTeaser';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ServicesOverview />
      <AboutTeaser />
      <Testimonials />
      <CaseStudies />
      <BlogTeaser />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
