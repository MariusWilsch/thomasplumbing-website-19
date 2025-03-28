
import React from 'react';
import { Clock, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-end gap-4 text-sm">
      <div className="flex items-center gap-2">
        <Clock className="text-blue-500 h-5 w-5" />
        <div>
          <div>Mon – Fri: 10AM - 7PM:</div>
          <div>Sat - Sun: 10AM - 3PM</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="text-blue-500 h-5 w-5" />
        <div>
          <div>Call Us:</div>
          <div className="font-bold">(719) 445-2808</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
