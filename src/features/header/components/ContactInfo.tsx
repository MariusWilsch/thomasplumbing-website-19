
import React from "react";
import { PhoneCall } from "lucide-react";
import { useIsMobile } from "../../../hooks/use-mobile";

export const ContactInfo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex items-center gap-2 ${isMobile ? "justify-center" : ""}`}>
      <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
        <PhoneCall className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-gray-600 text-sm">Call us now</p>
        <p className="font-bold text-blue-600">+1 (555) 123-4567</p>
      </div>
    </div>
  );
};
