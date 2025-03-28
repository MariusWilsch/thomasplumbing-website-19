
import React from 'react';
import { ContactForm } from '@/features/contact';
import { ContactInformation } from '@/features/contact';

const Contacts = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
