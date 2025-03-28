
import React from 'react';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';
import { PromiseSection } from '@/features/promise/components';
import { ServicesBanner, TeamFeatures } from '@/features/services';
import { StatsCounter } from '@/features/stats';
import { ServicePortfolio } from '@/features/portfolio';
import { TestimonialsSection } from '@/features/testimonials';
import { ContactInfoBar } from '@/features/contact';
import { Footer } from '@/features/footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <PromiseSection />
      <ServicesBanner />
      <TeamFeatures />
      <StatsCounter />
      <ServicePortfolio />
      <TestimonialsSection />
      <ContactInfoBar />
      <Footer />
    </div>
  );
};

export default Index;
