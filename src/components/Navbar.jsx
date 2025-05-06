import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="#" className="text-white font-bold text-xl">Navbar</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/props" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Props-page</Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Dropdown
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 min-w-max py-2 rounded-md shadow-lg z-10">
                {[
                  ["Employees", "/employee_list"],
                  ["Form", "/form"],
                  ["Fonix", "/fonix"],
                  ["Counter", "/counter"],
                  ["Responsive", "/responsive"],
                  ["Todo", "/todo"],
                  ["Grid", "/grid"],
                  ["Javascript", "/js"],
                  ["React", "/reactpractice"],
                  ["Api-Form", "/apiform"],
                  ["Profile", "/profile"],
                  ["React-Responsive", "/reactres"]
                ].map(([text, path]) => (
                  <Link
                    key={text}
                    to={path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Search (Desktop Only) */}
          <div className="hidden md:flex ml-4 items-center">
            <input
              type="search"
              placeholder="Search"
              className="px-3 py-1 rounded-l-md border border-gray-600 bg-gray-700 text-white focus:outline-none"
            />
            <button className="px-4 py-1 bg-green-600 text-white rounded-r-md hover:bg-green-700 focus:outline-none">
              Search
            </button>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          <Link to="/" className="block text-white px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/props" className="block text-gray-300 px-3 py-2 rounded-md text-base font-medium">Props-page</Link>
          {[
            ["Employees", "/employee_list"],
            ["Form", "/form"],
            ["Fonix", "/fonix"],
            ["Counter", "/counter"],
            ["Responsive", "/responsive"],
            ["Todo", "/todo"],
            ["Grid", "/grid"],
            ["Javascript", "/js"],
            ["React", "/reactpractice"],
            ["Api-Form", "/apiform"],
            ["Profile", "/profile"],
            ["React-Responsive", "/reactres"]
          ].map(([text, path]) => (
            <Link
              key={text}
              to={path}
              className="block text-gray-300 px-3 py-2 rounded-md text-base hover:bg-gray-700"
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
