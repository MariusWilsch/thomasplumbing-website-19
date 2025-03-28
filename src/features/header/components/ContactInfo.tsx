
import React from 'react';
import { Clock, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="flex items-center gap-6 text-sm">
      <div className="flex items-center gap-2">
        <Clock className="text-blue-500 h-4 w-4" />
        <div>
          <div>Mon – Fri: 10AM - 7PM:</div>
          <div>Sat - Sun: 10AM - 3PM</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="text-blue-500 h-4 w-4" />
        <div>
          <div>Call Us:</div>
          <div className="font-bold">(719) 445-2808</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
