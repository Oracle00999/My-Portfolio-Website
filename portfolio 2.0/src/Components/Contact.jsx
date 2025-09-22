import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCopy,
} from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("nwazotachibuike@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-50 text-gray-800 px-4 sm:px-6 lg:px-10 relative overflow-hidden py-8" // Added responsive padding
    >
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Animated Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text" // Removed animate-bounce for better UX
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      {/* Section Divider */}
      <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 sm:mb-8 rounded-full"></div>

      {/* Contact Card */}
      <motion.div
        className="bg-white/70 backdrop-blur-lg border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl w-full text-center relative z-10 mx-4" // Added horizontal margin for mobile
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Intro Text */}
        <motion.p
          className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base"
          variants={item}
        >
          I'm always excited to connect with like-minded individuals! Whether
          it's about collaborating on projects, sharing ideas, or just chatting,
          feel free to reach out through my social media or email.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-3 mb-6 sm:mb-8"
          variants={item}
        >
          <a
            href="mailto:nwazotachibuike@gmail.com"
            className="px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-400/40 transition duration-200 inline-block w-full sm:w-auto text-sm sm:text-base" // Responsive sizing
          >
            Send Me an Email
          </a>
          <button
            onClick={handleCopy}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-400/40 transition duration-200 w-12 h-12 sm:w-auto sm:h-auto flex items-center justify-center" // Fixed size for mobile
            aria-label="Copy email address"
          >
            <FiCopy size={18} className="sm:w-5" />
          </button>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center space-x-4 sm:space-x-6"
          variants={item}
        >
          {[
            {
              href: "mailto:nwazotachibuike@gmail.com",
              icon: <FiMail size={20} className="sm:w-6" />,
              label: "Email",
            },
            {
              href: "https://github.com/Oracle00999",
              icon: <FiGithub size={20} className="sm:w-6" />,
              label: "GitHub Profile",
            },
            {
              href: "https://www.linkedin.com/in/nwazotaanthony/",
              icon: <FiLinkedin size={20} className="sm:w-6" />,
              label: "LinkedIn Profile",
            },
            {
              href: "https://x.com/TekhTony",
              icon: <FiTwitter size={20} className="sm:w-6" />,
              label: "Twitter Profile",
            },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full ring-1 ring-gray-300 text-gray-700 hover:text-indigo-500 hover:ring-indigo-400 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12" // Fixed sizes
              aria-label={link.label}
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 0px 15px rgba(99,102,241,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
