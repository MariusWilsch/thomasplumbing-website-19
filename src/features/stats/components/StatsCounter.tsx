
import React from 'react';
import { Home, Users, FileCheck, Clock } from 'lucide-react';

type StatItemProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const StatItem = ({ icon, value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-white mb-2">
        {icon}
      </div>
      <div className="text-blue-400 font-bold text-4xl md:text-5xl mb-1">{value}</div>
      <div className="text-white text-sm tracking-wider uppercase">{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    {
      icon: <Home className="h-8 w-8" />,
      value: "1529",
      label: "Repaired Houses"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "4012",
      label: "Happy Clients"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      value: "42",
      label: "Qualified Staff"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "20",
      label: "Years of Experience"
    }
  ];

  return (
    <section className="bg-gray-900 py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
