
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'CONTACTS', href: '/contacts' },
];

const Navbar = () => {
  const location = useLocation();
  const [headerHeight, setHeaderHeight] = useState(0);
  
  // Calculate header height on component mount
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    // Handle home navigation normally
    if (item === 'HOME') return;
    
    // Handle route navigation for contacts
    if (item === 'CONTACTS') return;
    
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to home with hash
      window.location.href = '/' + (item === 'ABOUT' ? '#about-section' : '#services-section');
      return;
    }
    
    // If on homepage, scroll to the appropriate section
    const sectionId = item === 'ABOUT' ? 'about-section' : 'services-section';
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Get the position of the section relative to the document
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      
      // Scroll to the section with an offset for the header height
      window.scrollTo({
        top: sectionPosition - headerHeight - 20, // Adding 20px additional offset for spacing
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <nav className="w-full bg-blue-500 shadow-[0_2px_4px_rgba(0,0,0,0.08)] sticky top-0 z-20">
      <div className="container mx-auto flex items-center py-3 px-4">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleNavClick(e, item.name)}
              className={`px-6 py-2 transition-colors duration-200 font-medium
                ${
                  (location.pathname === "/" && item.name === "HOME") ||
                  (location.pathname === "/contacts" && item.name === "CONTACTS")
                    ? "text-white font-bold"
                    : "text-white/90 hover:text-white"
                }`}
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
