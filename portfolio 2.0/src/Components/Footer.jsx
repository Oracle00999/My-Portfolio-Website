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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a192f] text-[#ccd6f6] py-16 relative overflow-hidden border-t border-[#112240]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff8c61] rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Call-to-Action */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] bg-clip-text text-transparent mb-6"
          >
            Let's Build Something Amazing Together!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-[#8892b0] mb-8 max-w-2xl"
          >
            I'm always open to discussing new opportunities, creative projects,
            and innovative ideas. Let's connect and create something
            extraordinary!
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-6 mb-8"
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
                href: "https://x.com/i_amtony_",
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
                className="p-4 rounded-full bg-[#112240] border border-[#233554] text-[#8892b0] hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all duration-300 relative group"
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#ff6b35] text-[#0a192f] text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <a
              href="mailto:nwazotachibuike@gmail.com"
              className="text-[#ff6b35] hover:text-[#ff8c61] font-semibold text-lg transition-colors duration-300"
            >
              nwazotachibuike@gmail.com
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-[#8892b0] mb-6"
          >
            <p>© {currentYear} Nwazota Chibuike. All rights reserved.</p>
            <p className="mt-1">Built with React & Tailwind CSS</p>
          </motion.div>

          {/* Back-to-Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] text-[#0a192f] font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#ff6b35]/30 transform hover:-translate-y-1 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowUp />
            </motion.div>
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;
