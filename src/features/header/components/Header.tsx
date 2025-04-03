
import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { ContactInfo } from "./ContactInfo";
import { useIsMobile } from "../../../hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full bg-white shadow-md py-4 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-auto flex items-center justify-between">
            <Logo />
            {isMobile && (
              <Navbar />
            )}
          </div>
          {!isMobile && (
            <div className="flex items-center gap-6">
              <Navbar />
              <ContactInfo />
            </div>
          )}
          {isMobile && (
            <div className="w-full text-center">
              <ContactInfo />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
