
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesBanner = () => {
  return (
    <section className="bg-blue-500 py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-wide">
              WE TAKE CARE OF YOUR COMFORT
            </h2>
            <p className="text-blue-50 text-lg">
              A HUGE NUMBER OF SERVICES AND WORKS DONE BY HIGH-CLASS
              EXPERTS USING THE LATEST TECHNOLOGIES.
            </p>
            <p className="text-blue-50">
              We Guarantee: quality of work and speed of fulfilment. We always stand for doing our job fast
              and at the highest level as understand people value their time and money. No worries about
              delays or unfinished work – it's our warranty policy!
            </p>
            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-blue-500 hover:bg-blue-50 border-white flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                <span>CALL US: (719) 445-2808</span>
              </Button>
            </div>
          </div>
          
          {/* Right side placeholder */}
          <div className="flex justify-center items-center">
            <div className="bg-blue-400 h-80 w-full max-w-md rounded-lg flex items-center justify-center">
              <span className="text-white text-opacity-70 text-lg">Service Technician Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
