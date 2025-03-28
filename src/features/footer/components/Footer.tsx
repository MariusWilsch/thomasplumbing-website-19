
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Phone, Clock, MapPin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Online Quote */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">ONLINE QUOTE</h3>
            <p className="mb-6">
              Free online quotes for windows, doors, conservatories and aluminium bi-fold doors.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              START YOUR QUOTE
            </Button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">SERVICES</h3>
            <ul className="space-y-3">
              {[
                'Plumbing Work',
                'Electric Works',
                'Housework',
                'Equipment Installation',
                'Door Repair',
                'Wiring Installation'
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Call: (719) 445-2808</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Mon-Fri: 10 AM - 7 PM; Sat-Sun: 10 AM - 3 PM</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>4578 Marmora Road, Glasgow</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@demolink.org" className="hover:text-blue-500 transition-colors">
                  info@demolink.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 my-8" />
        
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 FixTeam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
