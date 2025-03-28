
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          
          <div className="flex items-center text-sm mt-2 md:mt-0">
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-600">About us</span>
          </div>
        </div>
      </div>
    </div>
  );
};
