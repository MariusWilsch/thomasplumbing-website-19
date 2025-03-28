
import React from 'react';
import { MissionSection } from './MissionSection';
import { GoalsSection } from './GoalsSection';
import { ContactForm } from './ContactForm';
import { PageBanner } from './PageBanner';

const AboutSection = () => {
  return (
    <div className="flex flex-col min-h-0">
      <PageBanner title="ABOUT US" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Mission */}
          <div className="lg:col-span-1">
            <MissionSection />
          </div>
          
          {/* Middle column - Goals */}
          <div className="lg:col-span-1">
            <GoalsSection />
          </div>
          
          {/* Right column - Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
        
        {/* Badges/Quality section */}
        <div className="flex justify-center mt-16 gap-6">
          <img 
            src="/lovable-uploads/748b9e68-94bd-41e3-b9a8-81ae5b50afa7.png" 
            alt="Quality and Premium badges" 
            className="h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
