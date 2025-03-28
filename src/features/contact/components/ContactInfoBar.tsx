
import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const ContactInfoBar = () => {
  return (
    <div className="bg-blue-500 text-white py-8 rounded-lg relative mx-auto w-4/5 max-w-6xl z-10 -mb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="bg-white rounded-full p-4 flex items-center justify-center">
              <Phone className="text-blue-500 h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Phone:</h4>
              <p className="text-white">(719) 445-2808; (719) 445-2809</p>
            </div>
          </div>
          
          {/* Address */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="bg-white rounded-full p-4 flex items-center justify-center">
              <MapPin className="text-blue-500 h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Address:</h4>
              <p className="text-white">4578 Marmora Road, Glasgow</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="bg-white rounded-full p-4 flex items-center justify-center">
              <Mail className="text-blue-500 h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-medium">E-mail:</h4>
              <p className="text-white">
                <a href="mailto:info@demolink.org" className="hover:underline">
                  info@demolink.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBar;
