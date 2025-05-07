import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Importing AuthContext

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Using context for login state and logout action
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout from context to clear login state
    navigate("/"); // Redirect to home page after logout
  };

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("isLoggedIn");
      if (auth === "true") {
        setIsMenuOpen(false); // Close menu on login
      }
    };

    checkAuth();
    window.addEventListener("storage", checkAuth); // Listen for storage changes to handle session update
    return () => window.removeEventListener("storage", checkAuth);
  }, [isLoggedIn]);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">CRM</Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>

            {isLoggedIn ? (
              <>
                <Link to="/props" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Props-page</Link>
                <div className="relative group">
                  <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    Dropdown
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute hidden group-hover:block bg-gray-800 min-w-max py-2 rounded-md shadow-lg z-20">
                    {[  
                      ["Form", "/form"],
                      ["Fonix", "/fonix"],
                      ["Counter", "/counter"],
                      ["Todo", "/todo"],
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
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to="/register" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          <Link to="/" className="block text-white px-3 py-2 rounded-md text-base font-medium">Home</Link>

          {isLoggedIn ? (
            <>
              <Link to="/props" className="block text-gray-300 px-3 py-2 rounded-md text-base font-medium">Props-page</Link>
              {[     
                ["Form", "/form"],
                ["Fonix", "/fonix"],
                ["Counter", "/counter"],
                ["Todo", "/todo"],
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
              <button
                onClick={handleLogout}
                className="block w-full text-left text-red-400 px-3 py-2 rounded-md text-base hover:bg-red-600 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-gray-300 px-3 py-2 rounded-md text-base hover:bg-gray-700">Login</Link>
              <Link to="/register" className="block text-gray-300 px-3 py-2 rounded-md text-base hover:bg-gray-700">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
