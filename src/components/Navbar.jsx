import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="#" className="text-white font-bold text-xl">Navbar</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/props" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Props-page</Link>

              {/* Dropdown using Tailwind */}
              <div className="relative group">
                <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Dropdown
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-gray-800 min-w-max py-2 rounded-md shadow-lg z-10">
                  <Link to="/employee_list" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Employees</Link>
                  <Link to="/form" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Form</Link>
                  <Link to="/fonix" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Fonix</Link>
                  <Link to="/counter" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Counter</Link>
                  <Link to="/responsive" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Responsive</Link>
                  <Link to="/todo" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Todo</Link>
                  <Link to="/grid" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Grid</Link>
                  <Link to="/js" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Javascript</Link>
                  <Link to="/reactpractice" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">React</Link>
                  <Link to="/apiform" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Api-Form</Link>

                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <input
                type="search"
                placeholder="Search"
                className="px-3 py-1 rounded-l-md border border-gray-600 bg-gray-700 text-white focus:outline-none"
              />
              <button className="px-4 py-1 bg-green-600 text-white rounded-r-md hover:bg-green-700 focus:outline-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;