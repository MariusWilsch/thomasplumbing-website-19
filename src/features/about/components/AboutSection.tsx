
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <div className="min-h-screen">
      {/* Banner with title */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">ABOUT US</h1>
            <div className="text-sm text-gray-500 mt-2 md:mt-0">
              Home &gt; About us
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission Section */}
            <div className="col-span-1">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/83d7219c-c505-4fef-ae9b-d42ca54447ed.png" 
                  alt="Plumber giving thumbs up" 
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
              <h2 className="text-blue-500 text-xl font-bold mb-3">OUR MISSION</h2>
              <p className="text-gray-700">
                We work to ensure people's comfort at their home, and to provide the best and the fastest help at fair prices. We stand for quality, safety and credibility.
              </p>

              {/* Quality badges */}
              <div className="flex gap-4 mt-8 justify-center">
                <div className="w-24 h-24 opacity-80">
                  <img src="https://placehold.co/100x100?text=Premium" alt="Premium Service Badge" className="w-full h-full" />
                </div>
                <div className="w-24 h-24 opacity-80">
                  <img src="https://placehold.co/100x100?text=Quality" alt="Quality Service Badge" className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Goals Section */}
            <div className="col-span-1">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                  alt="Plumber working under sink" 
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
              <h2 className="text-blue-500 text-xl font-bold mb-3">OUR GOALS</h2>
              <p className="text-gray-700">
                The main goal is to provide our clients with the most complete list of services. We aim to expand our team as there are more and more spheres of maintenance.
              </p>
            </div>

            {/* Contact Form */}
            <div className="col-span-1 bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">HAVE ANY PROBLEMS?</h2>
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
                <textarea
                  placeholder="Comment"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-32"
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4"
                >
                  MAKE AN APPOINTMENT
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
