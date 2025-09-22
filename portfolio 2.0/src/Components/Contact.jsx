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
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-50 text-gray-800 px-10 relative overflow-hidden"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text animate-bounce"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      {/* Section Divider */}
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mb-8 rounded-full"></div>

      {/* Contact Card */}
      <motion.div
        className="bg-white/70 backdrop-blur-lg border border-gray-200 p-8 rounded-2xl shadow-lg max-w-2xl w-full text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Intro Text */}
        <motion.p className="mb-8 text-gray-600" variants={item}>
          I’m always excited to connect with like-minded individuals! Whether
          it’s about collaborating on projects, sharing ideas, or just chatting,
          feel free to reach out through my social media or email.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="flex items-center justify-center space-x-3 mb-8"
          variants={item}
        >
          <a
            href="mailto:nwazotachibuike@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-400/40 transition duration-200 inline-block"
          >
            Send Me an Email
          </a>
          <button
            onClick={handleCopy}
            className="p-3 rounded-lg border border-gray-300 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-400/40 transition duration-200"
            aria-label="Copy email address"
          >
            <FiCopy size={20} />
          </button>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="flex justify-center space-x-6" variants={item}>
          {[
            {
              href: "mailto:nwazotachibuike@gmail.com",
              icon: <FiMail size={24} />,
              label: "Email",
            },
            {
              href: "https://github.com/Oracle00999",
              icon: <FiGithub size={24} />,
              label: "GitHub Profile",
            },
            {
              href: "https://www.linkedin.com/in/nwazotaanthony/",
              icon: <FiLinkedin size={24} />,
              label: "LinkedIn Profile",
            },
            {
              href: "https://x.com/TekhTony",
              icon: <FiTwitter size={24} />,
              label: "Twitter Profile",
            },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full ring-1 ring-gray-300 text-gray-700 hover:text-indigo-500 hover:ring-indigo-400 transition duration-200"
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
