
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactInformation = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h2 className="text-3xl font-bold mb-10">Contact Information</h2>
      
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <MapPin className="text-blue-500 h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Visit Our Company at</h3>
            <p className="text-gray-600">Address: 4578 Marmora Road, Glasgow</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Phone className="text-blue-500 h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Have a Questions? Call us</h3>
            <p className="text-gray-600">(719) 445-2808; (719) 445-2809</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Clock className="text-blue-500 h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Working Time</h3>
            <p className="text-gray-600">Our support available to help you 24 hours a day, seven days a week.</p>
            <div className="text-gray-600 mt-2 space-y-1">
              <p>Monday-Friday: 08:00-18:00</p>
              <p>Saturday: 08:00-16:00</p>
              <p>Sunday: Close</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Mail className="text-blue-500 h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Contact with Us</h3>
            <p className="text-gray-600">
              E-mail: <a href="mailto:info@demolink.org" className="text-blue-500 hover:underline">info@demolink.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
