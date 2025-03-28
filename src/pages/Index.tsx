
import React from 'react';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';
import { AboutSection } from '@/features/about/components';
import { ServicesBanner, TeamFeatures } from '@/features/services';
import { StatsCounter } from '@/features/stats';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesBanner />
      <TeamFeatures />
      <StatsCounter />
    </div>
  );
};

export default Index;
