
import React from 'react';

export const GoalsSection = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-blue-500 mb-4">OUR GOALS</h2>
      <div className="mb-6">
        <img 
          src="https://images.unsplash.com/photo-1574103188526-4fabd2623d12" 
          alt="Plumber working on sink" 
          className="w-full h-64 object-cover object-center rounded-lg"
        />
      </div>
      <p className="text-gray-700">
        The main goal is to provide our clients with the most complete list of services.
        We aim to expand our team as there are more and more spheres of maintenance.
        We want to make sure that every customer gets high-quality service and 
        complete satisfaction with our work.
      </p>
    </div>
  );
};
