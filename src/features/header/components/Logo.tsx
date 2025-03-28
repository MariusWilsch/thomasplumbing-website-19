
import React from 'react';
import { Wrench } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <Wrench className="h-6 w-6 text-blue-500" />
        <div className="h-6 w-6 -ml-3 text-blue-500 border-2 border-blue-500 rounded-full"></div>
      </div>
      <span className="text-2xl font-bold">
        <span className="text-blue-500">Fix</span>
        <span className="text-gray-800">Team</span>
      </span>
    </div>
  );
};

export default Logo;
