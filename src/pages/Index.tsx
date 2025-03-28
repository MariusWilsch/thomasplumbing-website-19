
import React from 'react';
import { Header } from '@/features/header';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to FixTeam</h1>
          <p className="text-gray-600">Your trusted partner for all your plumbing needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
