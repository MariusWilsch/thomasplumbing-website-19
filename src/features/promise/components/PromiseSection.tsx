
import React from 'react';
import { Clock, Users } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const PromiseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Company info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              WE PROMISE RELIABLE REPAIR<br />AND GUARANTEE
            </h2>
            <p className="text-gray-600 mb-10">
              We are a company providing a wide range of maintenance and many other services needed to
              make your life comfortable and happy. Our high-class experts fix any malfunction and install any
              equipment in your house.
            </p>

            <div className="space-y-8">
              {/* Always Available */}
              <div className="flex items-start gap-6">
                <div className="bg-blue-500 rounded-full p-4 flex-shrink-0">
                  <Clock className="text-white h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Always Available</h3>
                  <p className="text-gray-600">
                    We accept requests and phone calls 24/7 so you could resolve any problem
                    whenever you need.
                  </p>
                </div>
              </div>

              {/* Qualified Agents */}
              <div className="flex items-start gap-6">
                <div className="bg-blue-500 rounded-full p-4 flex-shrink-0">
                  <Users className="text-white h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Qualified Agents</h3>
                  <p className="text-gray-600">
                    All our team members are high-qualified, educated and skilled agents. All of them
                    are being trained according to the latest technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Accordion */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <Accordion type="single" collapsible defaultValue="mission" className="w-full">
              {/* Our Company Mission */}
              <AccordionItem value="mission">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100">
                  <span className="font-bold">OUR COMPANY MISSION</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="py-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Working for people</h3>
                    <p className="text-gray-600">
                      We work to ensure people's comfort at their home, and to provide the
                      best and the fastest help at fair prices. We stand for quality, safety
                      and credibility, so you could be sure about our work. We have been
                      working for years to improve our skills, to expand spheres of our work.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Our Company Goals */}
              <AccordionItem value="goals">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-100">
                  <span className="font-bold">OUR COMPANY GOALS</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <div className="py-4">
                    <p className="text-gray-600">
                      Our main goal is to provide high-quality services to our customers and ensure
                      their complete satisfaction with our work. We strive to be the most reliable and 
                      trusted service provider in the industry.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Honest and Responsible */}
              <AccordionItem value="honest">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-100">
                  <span className="font-bold">HONEST AND RESPONSIBLE</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <div className="py-4">
                    <p className="text-gray-600">
                      We believe in honesty and responsibility in all our dealings. Our technicians are 
                      transparent about the work needed and the costs involved. We take full responsibility 
                      for our work and stand behind our guarantees.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
