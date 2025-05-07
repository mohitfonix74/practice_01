import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  const initial = 0;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-2xl p-5 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-black mb-6">Counter App</h1>
        <div className="mb-6">
          <p className="text-xl font-semibold text-gray-700">Value is: <span className="text-indigo-600">{value}</span></p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setValue(value + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4  py-2 rounded-3 transition"
          >
            +
          </button>
          <button
            onClick={() => setValue(value - 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-3 transition"
          >
            -
          </button>
          <button
            onClick={() => setValue(initial)}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4  py-2 rounded-3 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
