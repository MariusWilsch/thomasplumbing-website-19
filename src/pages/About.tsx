
import React from 'react';
import { Header } from '@/features/header';
import { AboutSection } from '@/features/about';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AboutSection />
    </div>
  );
};

export default About;
