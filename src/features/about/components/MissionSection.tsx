
import React from 'react';

export const MissionSection = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-blue-500 mb-4">OUR MISSION</h2>
      <div className="mb-6">
        <img 
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc" 
          alt="Plumber giving thumbs up" 
          className="w-full h-64 object-cover object-center rounded-lg"
        />
      </div>
      <p className="text-gray-700">
        We work to ensure people's comfort at their home, and to provide the best and the 
        fastest help at fair prices. We stand for quality, safety and credibility,
        so you could be sure about our work. We have been working for years to improve 
        our skills, to expand spheres of our work.
      </p>
    </div>
  );
};
