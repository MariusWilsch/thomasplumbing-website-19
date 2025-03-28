
import React from 'react';
import { Users, Award, FileCheck, ShieldCheck, Briefcase, Medal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="text-blue-500 mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const TeamFeatures = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10" />,
      title: "ENTIRE HOME MAINTENANCE TEAM",
      description: "Forget about all your small and big house problems! Our experts will fix everything for you!"
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "BEST OFFERS",
      description: "Our company offers a flexible discount system and a lot of special offers being beneficial for our clients."
    },
    {
      icon: <FileCheck className="h-10 w-10" />,
      title: "NATIONAL STANDARDS, LOCAL OWNERS",
      description: "We totally meet technical requirements, specifications and all kind of binding standards."
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "WORRY-FREE EXPERIENCE",
      description: "You'll appreciate our hassle-free service and high quality of work we do for our clients."
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "PROFESSIONAL APPROACH",
      description: "All our experts are certified and well-educated to provide you professional help."
    },
    {
      icon: <Medal className="h-10 w-10" />,
      title: "QUALIFIED AGENTS",
      description: "Our agents have vast experience in house maintenance. They have good skills and professional certificates."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WE ARE THE TEAM THAT YOU NEED</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            We Provide: help with any domestic problem. You can choose the service from our list, or if you
            need any other maintenance help, we will gladly do even non-standard work!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamFeatures;
