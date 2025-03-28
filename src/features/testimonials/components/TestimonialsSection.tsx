
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Kaira Salrus",
    role: "Designer",
    image: "/lovable-uploads/b3e9445c-1e08-4c54-85c8-1498eb8d1196.png",
    quote: "Many thanks to Fixteam experts! These guys worked very delicate and fast. There were no worries at all - neither delays, nor shortcomings! I'll definitely use their services again. Great job!"
  },
  {
    id: 2,
    name: "Emma Stoun",
    role: "Designer",
    image: "/lovable-uploads/b3e9445c-1e08-4c54-85c8-1498eb8d1196.png",
    quote: "Fixteam is indeed a team of experts! Their Customer Service representative helped to select the correct service and the team came so quick! They are great and I'm totally pleased with their work!"
  },
  {
    id: 3,
    name: "Peter Parker",
    role: "Designer",
    image: "/lovable-uploads/b3e9445c-1e08-4c54-85c8-1498eb8d1196.png",
    quote: "I'm very glad that I've finally chosen Fixteam. They followed all my instruction and recommendations and at the same time did their job very quickly! Very nice and friendly personnel and accurate work."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">WHAT PEOPLE THINK</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">ABOUT US</h3>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map(testimonial => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center p-6">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-blue-500 mb-4">{testimonial.role}</p>
                    
                    <p className="text-gray-600 text-center max-w-2xl">
                      {testimonial.quote}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
