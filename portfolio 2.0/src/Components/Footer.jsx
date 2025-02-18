import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Call-to-Action */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            Let’s Build Something Amazing Together!
          </motion.h2>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-6 mb-6"
          >
            <a
              href="https://github.com/Oracle00999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nwazotaanthony/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://x.com/TekhTony"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="mailto:nwazotachibuike@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              <i className="fas fa-envelope text-2xl" aria-hidden="true"></i>
            </a>
          </motion.div>
          {/* Copyright Notice */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-gray-500 mb-4"
          >
            © {new Date().getFullYear()} Anthony. All rights reserved.
          </motion.p>
          {/* Back-to-Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToTop}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
