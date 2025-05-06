import React, { useState, useEffect } from 'react';
import Carddaisy from '../components/Carddaisy';
import CardSkeleton from '../components/Cardskelton';

const Reactres = () => {
  const [loading, setLoading] = useState(true);

  // Simulate API Delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const cardsToRender = loading
    ? Array.from({ length: 8 }, (_, i) => <CardSkeleton key={i} />)
    : Array.from({ length: 8 }, (_, i) => <Carddaisy key={i} />);

  return (
    <div className="bg-gray-900 min-h-screen px-4 sm:px-6 lg:px-16 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-12 pt-4 pb-4 tracking-tight">
        Cards with Animations & Lazy Load
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardsToRender}
      </div>
    </div>
  );
};

export default Reactres;
