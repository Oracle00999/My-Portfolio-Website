import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 relative overflow-hidden">
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
            {[
              {
                href: "https://github.com/Oracle00999",
                icon: <FiGithub size={24} />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/nwazotaanthony/",
                icon: <FiLinkedin size={24} />,
                label: "LinkedIn",
              },
              {
                href: "https://x.com/TekhTony",
                icon: <FiTwitter size={24} />,
                label: "Twitter",
              },
              {
                href: "mailto:nwazotachibuike@gmail.com",
                icon: <FiMail size={24} />,
                label: "Email",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-full ring-1 ring-gray-600 text-gray-300 hover:text-indigo-400 hover:ring-indigo-400 transition duration-300"
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0px 0px 12px rgba(99,102,241,0.6)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
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
            className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/40 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp />
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
