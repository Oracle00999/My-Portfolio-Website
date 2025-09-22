import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "./Typingeffect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24" // Added top padding
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-snug break-words bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Hi, I'm Nwazota Chibuike
          </h1>
          <TypingEffect />
          <p className="mt-4 text-lg text-gray-300">
            Full-Stack Developer | Building End-to-End Web Solutions
          </p>
          <p className="mt-4 text-gray-300">
            I specialize in developing sleek, responsive, and user-friendly
            applications that work seamlessly across the front end and back end.
            With expertise in React, Tailwind CSS, Node.js, Express, and
            databases like MongoDB and SQL, I bring ideas to life with modern
            technologies.
          </p>
          <p className="mt-4 text-gray-300">
            Whether it's crafting engaging user interfaces or designing scalable
            backend systems, I'm dedicated to delivering high-quality solutions
            that truly make an impact.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 text-center"
            >
              View My Work
            </a>
            <a
              href="https://docs.google.com/document/d/1vZN6ffrsmkzELsP_GWMqNZDffsLhgE1BVhxEGWjRcTE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 text-center"
            >
              View RESUME
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <a
              href="https://github.com/Oracle00999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nwazotaanthony/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://x.com/TekhTony"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-32 w-32 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
