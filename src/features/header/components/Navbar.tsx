
import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'SINGLE SERVICE', href: '/service' },
  { name: 'CONTACTS', href: '/contacts' },
];

const Navbar = () => {
  return (
    <nav className="bg-blue-500 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-white px-6 py-4 hover:bg-blue-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="text-white px-4" aria-label="Search">
          <Search />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
