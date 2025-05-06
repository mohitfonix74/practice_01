import React from 'react';

const Cardskeleton = () => {
  return (
    <div className="w-full sm:w-80 md:w-96 mx-auto animate-pulse">
      <div className="h-48 bg-gray-700 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-600 rounded w-5/6 mb-4"></div>
      <div className="h-8 bg-gray-700 rounded w-1/2"></div>
    </div>
  );
};

export default Cardskeleton;
