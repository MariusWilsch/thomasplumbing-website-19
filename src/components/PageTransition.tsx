
import React from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className={cn(
        "w-full animate-fadeIn"
      )}
    >
      {children}
    </div>
  );
};

export default PageTransition;
