
import React from 'react';
import Logo from './Logo';
import ContactInfo from './ContactInfo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Logo />
        <div className="border border-gray-200 rounded-lg px-6 py-3 bg-gray-50">
          <ContactInfo />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
