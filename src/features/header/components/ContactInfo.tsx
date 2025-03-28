
import React from 'react';
import { Clock, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="flex items-start gap-6 text-sm">
      <div className="flex items-start gap-3 py-2">
        <Clock className="text-blue-500 h-5 w-5 flex-shrink-0 mt-1" />
        <div>
          <div className="text-gray-800 font-semibold">Mon – Fri: 10AM - 7PM</div>
          <div className="text-gray-800 font-semibold">Sat - Sun: 10AM - 3PM</div>
        </div>
      </div>
      <div className="flex items-start gap-3 py-2">
        <Phone className="text-blue-500 h-5 w-5 flex-shrink-0 mt-1" />
        <div>
          <div className="text-gray-800 font-bold text-lg">(719) 445-2808</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
