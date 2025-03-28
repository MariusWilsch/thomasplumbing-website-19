
import React from 'react';
import Logo from './Logo';
import ContactInfo from './ContactInfo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Logo />
        <ContactInfo />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
