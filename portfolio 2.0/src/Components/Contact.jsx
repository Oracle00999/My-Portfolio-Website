import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
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
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      {/* Section Divider */}
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mb-8 rounded-full"></div>

      {/* Contact Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p
          className="mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I’m always excited to connect with like-minded individuals! Whether
          it’s about collaborating on projects, sharing ideas, or just chatting,
          feel free to reach out through my social media or email.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="mailto:nwazotachibuike@gmail.com"
          className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-200 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Me an Email
        </motion.a>

        {/* Social Media Links with Animation */}
        <motion.div
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              href: "mailto:nwazotachibuike@gmail.com",
              icon: <FiMail size={28} />,
              bg: "bg-indigo-500 hover:bg-indigo-600",
            },
            {
              href: "https://github.com/Oracle00999",
              icon: <FiGithub size={28} />,
              bg: "bg-gray-800 hover:bg-gray-900",
            },
            {
              href: "https://www.linkedin.com/in/nwazotaanthony/",
              icon: <FiLinkedin size={28} />,
              bg: "bg-blue-700 hover:bg-blue-800",
            },
            {
              href: "https://x.com/TekhTony",
              icon: <FiTwitter size={28} />,
              bg: "bg-blue-500 hover:bg-blue-600",
            },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 ${link.bg} text-white rounded-full shadow-md transition duration-200`}
              aria-label="Social Link"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
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
