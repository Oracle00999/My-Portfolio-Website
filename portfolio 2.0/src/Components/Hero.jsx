import React from "react";
import { motion } from "framer-motion";
// import profileImage from "../assets/tobeupdated.webp";
import profileImage from "../assets/profile.jpg";

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
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              View RESUME
            </a>
            {/* <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              View RESUME
            </a> */}
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
          <img
            src={profileImage} // Replace with your image or illustration
            alt="Nwazota Anthony"
            className="w-60 h-60 md:w-64 md:h-64 lg:w-100 lg:h-100 rounded-full object-cover border-8 border-white shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
