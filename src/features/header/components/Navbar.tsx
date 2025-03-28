
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'CONTACTS', href: '/contacts' },
];

const Navbar = () => {
  const location = useLocation();
  
  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If we're on the homepage, scroll to the services section
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      window.location.href = '/#services-section';
    }
  };
  
  return (
    <nav className="w-full bg-blue-500 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto flex items-center py-3 px-4">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={item.name === 'SERVICES' ? handleServicesClick : undefined}
              className={`px-6 py-2 transition-colors duration-200 font-medium
                ${location.pathname === item.href ? 'text-white font-bold' : 'text-white/90 hover:text-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
