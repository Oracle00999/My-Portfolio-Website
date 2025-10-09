import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("About");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
    closeMenu();
  };

  const navLinks = [
    { id: 1, name: "About", href: "#about", icon: "fas fa-user" },
    { id: 2, name: "Projects", href: "#projects", icon: "fas fa-code" },
    { id: 3, name: "Contact", href: "#contact", icon: "fas fa-envelope" },
  ];

  return (
    <nav className="bg-[#0a192f] text-[#ccd6f6] shadow-lg fixed w-full z-50 border-b border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] bg-clip-text text-transparent hover:from-[#ff8c61] hover:to-[#ffa07a] transition-all duration-300"
          >
            <span className="font-mono ">{`> ANTHONY`}</span>
          </a>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#8892b0] hover:text-[#ff6b35] hover:bg-[#112240] focus:outline-none transition duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 ${
                  activeLink === link.name
                    ? "text-[#ff6b35] border-[#ff6b35] bg-[#112240]"
                    : "text-[#ccd6f6] border-transparent hover:text-[#ff6b35] hover:border-[#ff6b35]"
                }`}
              >
                <i className={`${link.icon} mr-2`}></i>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[#112240] border-t border-[#233554]"
          >
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                    activeLink === link.name
                      ? "text-[#ff6b35] bg-[#0a192f] border-l-4 border-[#ff6b35]"
                      : "text-[#ccd6f6] hover:text-[#ff6b35] hover:bg-[#0a192f]"
                  }`}
                >
                  <i className={`${link.icon} mr-3`}></i>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
