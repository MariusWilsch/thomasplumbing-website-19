
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type ServiceItem = {
  id: number;
  category: 'plumbing' | 'electrical' | 'repair' | 'painting';
  imagePath: string;
  alt: string;
};

const ServicePortfolio = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      category: 'plumbing',
      imagePath: '/lovable-uploads/7d37ec42-ec48-4b5d-bf09-249ad452f057.png',
      alt: 'Plumber installing pipes'
    },
    {
      id: 2,
      category: 'plumbing',
      imagePath: '/lovable-uploads/7d37ec42-ec48-4b5d-bf09-249ad452f057.png',
      alt: 'Plumber fixing sink connection'
    },
    {
      id: 3,
      category: 'electrical',
      imagePath: '/lovable-uploads/7d37ec42-ec48-4b5d-bf09-249ad452f057.png',
      alt: 'Electrician working with multimeter'
    },
    {
      id: 4,
      category: 'repair',
      imagePath: '/lovable-uploads/7d37ec42-ec48-4b5d-bf09-249ad452f057.png',
      alt: 'Technician repairing appliance'
    },
    {
      id: 5,
      category: 'electrical',
      imagePath: '/lovable-uploads/7d37ec42-ec48-4b5d-bf09-249ad452f057.png',
      alt: 'Installing electrical outlet'
    },
    {
      id: 6,
      category: 'repair',
      imagePath: '/lovable-uploads/7d37ec42-ec48-4b5d-bf09-249ad452f057.png',
      alt: 'Appliance repair service'
    },
    {
      id: 7,
      category: 'plumbing',
      imagePath: '/lovable-uploads/7d37ec42-ec48-4b5d-bf09-249ad452f057.png',
      alt: 'Toilet installation'
    },
    {
      id: 8,
      category: 'painting',
      imagePath: '/lovable-uploads/7d37ec42-ec48-4b5d-bf09-249ad452f057.png',
      alt: 'Interior painting service'
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            We offer a comprehensive range of home maintenance services from plumbing and electrical work to repairs and painting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden group cursor-pointer">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={service.imagePath} 
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Separator className="mt-20" />
    </section>
  );
};

export default ServicePortfolio;
