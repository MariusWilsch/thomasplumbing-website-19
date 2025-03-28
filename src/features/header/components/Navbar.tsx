
import React from 'react';
import { Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'SINGLE SERVICE', href: '/service' },
  { name: 'CONTACTS', href: '/contacts' },
];

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="w-full bg-blue-500 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-6 py-2 transition-colors duration-200 font-medium
                ${location.pathname === item.href ? 'text-white font-bold' : 'text-white/90 hover:text-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="text-white px-4" aria-label="Search">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
