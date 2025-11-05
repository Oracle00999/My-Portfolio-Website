import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0.8);

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
    { id: 1, name: "Home", href: "#hero", icon: "fas fa-home" },
    { id: 2, name: "About", href: "#about", icon: "fas fa-user" },
    { id: 3, name: "Projects", href: "#projects", icon: "fas fa-code" },
    {
      id: 4,
      name: "Experience",
      href: "#experience",
      icon: "fas fa-briefcase",
    },
    { id: 5, name: "Contact", href: "#contact", icon: "fas fa-envelope" },
  ];

  // Scroll detection for navbar background and active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 10;
      setScrolled(isScrolled);

      // Calculate opacity based on scroll position
      // More scroll = more opaque (less transparent)
      const newOpacity = Math.min(0.95, 0.8 + (scrollY / 500) * 0.15);
      setScrollOpacity(newOpacity);

      const sections = navLinks.map((link) => {
        const section = document.querySelector(link.href);
        return {
          id: link.name,
          element: section,
          top: section ? section.getBoundingClientRect().top : 0,
          height: section ? section.offsetHeight : 0,
        };
      });

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (!currentSection) {
        const closestSection = sections.reduce(
          (closest, section) => {
            if (section.element) {
              const rect = section.element.getBoundingClientRect();
              const distance = Math.abs(rect.top);
              if (distance < Math.abs(closest.distance)) {
                return { id: section.id, distance };
              }
            }
            return closest;
          },
          { id: activeLink, distance: Infinity }
        );
        setActiveLink(closestSection.id);
      } else {
        setActiveLink(currentSection.id);
      }
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [activeLink, navLinks]);

  const smoothScroll = (href) => {
    if (href === "#hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    handleLinkClick(link.name);
    smoothScroll(link.href);
  };

  return (
    <nav
      className={`text-[#A0A0A0] shadow-lg fixed w-full z-50 border-b border-[#1C1C1C] transition-all duration-300`}
      style={{
        backgroundColor: `rgba(14, 14, 14, ${scrollOpacity})`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, { name: "Home", href: "#hero" })}
            className="text-xl font-bold text-[#FFFFFF] hover:text-[#C5A15B] transition-all duration-300 font-mono"
          >
            {`> ANTHONY`}
          </a>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-[#A0A0A0] hover:text-[#C5A15B] focus:outline-none transition duration-300 ${
                scrolled ? "hover:bg-[#1C1C1C]/50" : "hover:bg-[#1C1C1C]/30"
              }`}
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
                onClick={(e) => handleNavClick(e, link)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 ${
                  activeLink === link.name
                    ? "text-[#C5A15B] border-[#C5A15B] bg-[#1C1C1C]/50"
                    : "text-[#A0A0A0] border-transparent hover:text-[#C5A15B] hover:border-[#C5A15B] hover:bg-[#1C1C1C]/30"
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
            className="sm:hidden bg-[#1C1C1C]/95 backdrop-blur-md border-t border-[#1C1C1C]"
          >
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                    activeLink === link.name
                      ? "text-[#C5A15B] bg-[#0E0E0E]/50 border-l-4 border-[#C5A15B]"
                      : "text-[#A0A0A0] hover:text-[#C5A15B] hover:bg-[#0E0E0E]/30"
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
