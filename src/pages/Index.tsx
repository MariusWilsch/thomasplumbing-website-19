
import React from 'react';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';
import { AboutSection } from '@/features/about/components';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
    </div>
  );
};

export default Index;
