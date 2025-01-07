import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white shadow-lg fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          {/* Logo/Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white text-xl font-extrabold animate-spin">
                A
              </span>
            </div>
            <Link
              to="/"
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400 hover:from-purple-400 hover:to-blue-300 transition-all duration-300 hover:animate-bounce"
            >
              ANTHONY
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "About Me", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-white text-indigo-600 shadow-lg"
                    : "text-white hover:underline hover:text-indigo-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded shadow-md hover:bg-indigo-100 hover:shadow-lg transition-all duration-200"
            >
              Resume
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 shadow-lg transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="space-y-4 px-6 py-4">
            {[
              { name: "Home", path: "/" },
              { name: "About Me", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`block text-lg px-4 py-2 rounded-md ${
                  isActive(link.path)
                    ? "bg-white text-indigo-600 shadow-md"
                    : "text-white hover:bg-indigo-600 hover:text-indigo-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-center bg-white text-indigo-600 font-semibold rounded hover:bg-indigo-100 transition-all duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20 bg-slate-200"></div>
    </>
  );
}

export default Navbar;
