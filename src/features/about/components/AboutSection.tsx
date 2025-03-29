
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">ABOUT US</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Our Mission Column */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/09f27741-afdf-452b-852b-3cbc86557765.png" 
                alt="Plumber giving thumbs up" 
                className="w-full h-64 object-cover rounded-md shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">OUR MISSION</h3>
            <p className="text-gray-700">
              We work to ensure people's comfort at their home, and to provide the best and 
              the fastest help at fair prices. We stand for quality, safety and credibility.
            </p>
            <div className="mt-8 flex justify-center">
              <img 
                src="/lovable-uploads/09f27741-afdf-452b-852b-3cbc86557765.png" 
                alt="Premium quality badge" 
                className="h-24 w-24 mr-4"
              />
              <img 
                src="/lovable-uploads/09f27741-afdf-452b-852b-3cbc86557765.png" 
                alt="Quality badge" 
                className="h-24 w-24"
              />
            </div>
          </div>

          {/* Our Goals Column */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/09f27741-afdf-452b-852b-3cbc86557765.png" 
                alt="Plumber fixing under sink" 
                className="w-full h-64 object-cover rounded-md shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">OUR GOALS</h3>
            <p className="text-gray-700">
              The main goal is to provide our clients with the most complete list of services.
              We aim to expand our team as there are more and more spheres of maintenance.
            </p>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">HAVE ANY PROBLEMS?</h3>
            <p className="text-gray-600 mb-6">Our experts will solve them in no time.</p>
            
            <form className="space-y-4">
              <Input 
                type="text" 
                placeholder="Name" 
                className="w-full"
              />
              <Input 
                type="tel" 
                placeholder="Phone" 
                className="w-full"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="w-full"
              />
              <Textarea 
                placeholder="Comment" 
                className="w-full min-h-[100px]"
              />
              <Button 
                type="button" 
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                MAKE AN APPOINTMENT
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
