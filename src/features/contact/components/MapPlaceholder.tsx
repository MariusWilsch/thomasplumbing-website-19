
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MapPlaceholder = () => {
  return (
    <Card className="w-full h-[400px] bg-gray-100 flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-sm">
      <CardContent className="flex flex-col items-center justify-center h-full w-full p-6 text-center">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <MapPin className="h-10 w-10 text-blue-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">Find Us on the Map</h3>
        <p className="text-gray-600 mb-6 max-w-md">
          Our location is easy to find. We're conveniently located at 4578 Marmora Road, Glasgow.
        </p>
        <div className="text-sm text-gray-500">
          Google Maps integration will be added here
        </div>
      </CardContent>
    </Card>
  );
};

export default MapPlaceholder;
