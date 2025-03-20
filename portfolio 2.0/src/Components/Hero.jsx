import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Hi, I’m Nwazota Chibuike
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Front-End Developer | Building Beautiful Web Experiences
          </p>
          <p className="mt-4 text-gray-300">
            I specialize in creating responsive, user-friendly, and visually
            stunning web applications. With a passion for clean code and
            innovative design, I bring ideas to life using modern technologies
            like React, Tailwind CSS etc.
          </p>
          <p className="mt-4 text-gray-300">
            Whether it's crafting seamless user interfaces or optimizing
            performance, I’m dedicated to delivering high-quality solutions that
            make an impact.
          </p>
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              View My Work
            </a>
            <a
              href="https://docs.google.com/document/d/1JqUMGbif6FttKSvL1BeFhYn9wt0feWEi-Gx1UVZI0NE/edit?usp=sharing"
              target="_blank"
              className="px-6 py-3 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
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
          {/* Replace this with your preferred visual element */}
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
