
import React from 'react';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';
import { AboutSection } from '@/features/about/components';
import { ServicesBanner, TeamFeatures } from '@/features/services';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesBanner />
      <TeamFeatures />
    </div>
  );
};

export default Index;
