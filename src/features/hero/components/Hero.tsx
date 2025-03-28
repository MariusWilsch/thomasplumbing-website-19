
import React from 'react';
import { Award, Wrench, PiggyBank } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from './FeatureCard';

/**
 * Hero section component with headline, CTA buttons, and feature cards
 */
const Hero = () => {
  return (
    <section className="w-full">
      {/* Hero banner with image background */}
      <div className="relative h-[600px] bg-gray-800">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-black/50 z-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlend: "overlay"
          }}
        ></div>
        
        {/* Hero content */}
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold leading-tight mb-6 max-w-2xl">
            WE WILL GLADLY FIX EVERYTHING THAT BROKE
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            OUR MASTERS ARE READY TO LEAVE FOR YOU AT ANY TIME
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" className="bg-white text-gray-800 hover:bg-gray-200">
              MAKE AN APPOINTMENT
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              MORE ABOUT US
            </Button>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="container mx-auto px-6 -mt-20 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg">
          <FeatureCard
            icon={Award}
            title="QUALITY ASSURANCE"
            description="We always stand for doing our job fast and at the highest level as understand people value their time and money."
          />
          <FeatureCard
            icon={Wrench}
            title="20 YEARS OF EXPERIENCE"
            description="We are here to meet your every demand so you could have no worries about your home!"
          />
          <FeatureCard
            icon={PiggyBank}
            title="ECONOMICALLY"
            description="We offer a huge number of services and works done by high-class experts using the latest technologies."
            highlighted={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
