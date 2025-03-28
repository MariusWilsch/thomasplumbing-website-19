
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}

/**
 * A card component to display a feature with an icon, title and description
 */
const FeatureCard = ({ icon: Icon, title, description, highlighted = false }: FeatureCardProps) => {
  return (
    <div className={`p-8 text-center h-full border ${
      highlighted 
        ? 'bg-blue-500 text-white border-blue-600 shadow-md' 
        : 'bg-white border-gray-100 shadow-sm'
    }`}>
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-white p-5 inline-flex items-center justify-center shadow-sm">
          <Icon className={`h-10 w-10 ${highlighted ? 'text-blue-500' : 'text-blue-500'}`} />
        </div>
      </div>
      <h3 className="font-bold text-xl mb-4 tracking-wide">{title}</h3>
      <p className={`${highlighted ? 'text-blue-50' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
