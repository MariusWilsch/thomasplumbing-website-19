
import React from 'react';
import { Hero } from '@/features/hero';
import { PromiseSection } from '@/features/promise/components';
import { ServicesBanner, TeamFeatures } from '@/features/services';
import { StatsCounter } from '@/features/stats';
import { ServicePortfolio } from '@/features/portfolio';
import { TestimonialsSection } from '@/features/testimonials';
import { AboutSection } from '@/features/about';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-2">
      <Hero />
      <PromiseSection />
      <ServicesBanner />
      <TeamFeatures />
      <StatsCounter />
      <ServicePortfolio />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
};

export default Index;
