
import React from 'react';
import { Header } from '@/features/header';
import { PromiseSection } from '@/features/about';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PromiseSection />
    </div>
  );
};

export default About;
