
import React from 'react';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
    </div>
  );
};

export default Index;
