import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-slate-100 text-gray-800 px-10 pt-20"
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text animate-bounce"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-center max-w-2xl mb-10 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I’m always excited to connect with like-minded individuals! Whether
          it’s about collaborating on projects, sharing ideas, or just chatting,
          feel free to reach out through the form below or connect with me on
          social media.
        </motion.p>

        {/* Animated Contact Form */}
        <motion.form
          className="w-full max-w-lg bg-white rounded-lg shadow-md p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div className="mb-5" whileFocus={{ scale: 1.05 }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>
          <motion.div className="mb-5" whileFocus={{ scale: 1.05 }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>
          <motion.div className="mb-5" whileFocus={{ scale: 1.05 }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Media Links with Animation */}
        <motion.div
          className="mt-12 mb-8 flex space-x-6"
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
      </div>
    </>
  );
};

export default Contact;
