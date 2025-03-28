
import React from 'react';
import { ContactForm, ContactInformation, MapPlaceholder } from '@/features/contact';

const Contacts = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <ContactInformation />
          <ContactForm />
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Location</h2>
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
