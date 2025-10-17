import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCopy,
  FiCheck,
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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nwazotachibuike@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-[#ccd6f6] px-4 sm:px-6 lg:px-10 relative overflow-hidden py-8"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#ff6b35] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#ff8c61] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#112240] rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-[#233554] rounded-full opacity-40"></div>
      </div>

      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      {/* Section Divider */}
      <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] mb-8 rounded-full"></div>

      {/* Contact Card */}
      <motion.div
        className="bg-[#112240]/80 backdrop-blur-lg border border-[#233554] p-8 sm:p-10 rounded-2xl shadow-2xl max-w-2xl w-full text-center relative z-10 mx-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Intro Text */}
        <motion.p
          className="mb-8 text-[#8892b0] text-lg leading-relaxed"
          variants={item}
        >
          I'm always excited to connect with like-minded individuals! Whether
          it's about collaborating on projects, sharing ideas, or just chatting,
          feel free to reach out through my social media or email.
        </motion.p>

        {/* Email Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          variants={item}
        >
          <div className="flex items-center bg-[#0a192f] px-4 py-3 rounded-lg border border-[#233554]">
            <FiMail className="text-[#ff6b35] mr-3" size={20} />
            <span className="text-[#ccd6f6] font-medium">
              nwazotachibuike@gmail.com
            </span>
          </div>

          <motion.button
            onClick={handleCopy}
            className="px-6 py-3 bg-[#ff6b35] text-[#0a192f] font-semibold rounded-lg hover:bg-[#ff8c61] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
            {copied ? "Copied!" : "Copy Email"}
          </motion.button>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div className="mb-8" variants={item}>
          <motion.a
            href="mailto:nwazotachibuike@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] text-[#0a192f] font-bold rounded-lg hover:shadow-2xl hover:shadow-[#ff6b35]/30 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="flex justify-center gap-6" variants={item}>
          {[
            {
              href: "https://github.com/Oracle00999",
              icon: <FiGithub size={24} />,
              label: "GitHub Profile",
              color: "hover:text-[#ff6b35]",
            },
            {
              href: "https://www.linkedin.com/in/nwazotaanthony/",
              icon: <FiLinkedin size={24} />,
              label: "LinkedIn Profile",
              color: "hover:text-[#ff6b35]",
            },
            {
              href: "https://x.com/i_amtony_",
              icon: <FiTwitter size={24} />,
              label: "Twitter Profile",
              color: "hover:text-[#ff6b35]",
            },
            {
              href: "mailto:nwazotachibuike@gmail.com",
              icon: <FiMail size={24} />,
              label: "Email",
              color: "hover:text-[#ff6b35]",
            },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-[#0a192f] border border-[#233554] text-[#8892b0] ${link.color} transition-all duration-300 flex items-center justify-center w-14 h-14`}
              aria-label={link.label}
              whileHover={{
                scale: 1.15,
                backgroundColor: "#ff6b35",
                color: "#0a192f",
                borderColor: "#ff6b35",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          className="mt-8 pt-6 border-t border-[#233554]"
          variants={item}
        >
          <p className="text-[#8892b0] text-sm">
            Currently available for freelance work and full-time opportunities
          </p>
          <p className="text-[#ff6b35] font-medium mt-2">
            Let's build something amazing together!
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 left-10 text-[#8892b0] opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <FiMail size={32} />
      </motion.div>

      <motion.div
        className="absolute top-10 right-10 text-[#8892b0] opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <FiGithub size={32} />
      </motion.div>
    </div>
  );
};

export default Contact;
