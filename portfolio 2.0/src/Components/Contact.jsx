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
      className="min-h-screen flex flex-col items-center justify-center bg-[#0E0E0E] text-[#A0A0A0] px-4 sm:px-6 lg:px-10 relative overflow-hidden py-8"
    >
      {/* Combined Grid and Circle Pattern Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#1C1C1C 1px, transparent 1px),
              linear-gradient(90deg, #1C1C1C 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            backgroundPosition: "center center",
          }}
        />

        {/* Circle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, #1C1C1C 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #1C1C1C 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #1C1C1C 0%, transparent 50%)
            `,
            backgroundSize: "400px 400px, 300px 300px, 500px 500px",
            backgroundPosition: "10% 10%, 90% 90%, 50% 50%",
          }}
        />

        {/* Gradient Vignette */}
        <div className="absolute inset-0 bg-radial-gradient(at center, transparent 0%, #0E0E0E 70%)" />
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#C5A15B] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#1C1C1C] rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-[#2A2A2A] rounded-full opacity-40"></div>
      </div>

      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6 text-[#FFFFFF] pt-3 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      {/* Section Divider */}
      <div className="w-20 h-1 bg-[#C5A15B] mb-8 rounded-full relative z-10"></div>

      {/* Contact Card */}
      <motion.div
        className="bg-[#1C1C1C]/80 backdrop-blur-lg border border-[#2A2A2A] p-8 sm:p-10 rounded-2xl shadow-2xl max-w-2xl w-full text-center relative z-10 mx-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Intro Text */}
        <motion.p
          className="mb-8 text-[#A0A0A0] text-lg leading-relaxed"
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
          <div className="flex items-center bg-[#0E0E0E] px-4 py-3 rounded-lg border border-[#2A2A2A]">
            <FiMail className="text-[#C5A15B] mr-3" size={20} />
            <span className="text-[#FFFFFF] font-medium">
              nwazotachibuike@gmail.com
            </span>
          </div>

          <motion.button
            onClick={handleCopy}
            className="px-6 py-3 bg-[#C5A15B] text-[#0E0E0E] font-semibold rounded-lg hover:bg-[#D4AF37] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
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
            className="inline-block px-8 py-4 bg-[#C5A15B] text-[#0E0E0E] font-bold rounded-lg hover:bg-[#D4AF37] hover:shadow-2xl hover:shadow-[#C5A15B]/30 transform hover:-translate-y-1 transition-all duration-300 text-lg"
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
            },
            {
              href: "https://www.linkedin.com/in/nwazotaanthony/",
              icon: <FiLinkedin size={24} />,
              label: "LinkedIn Profile",
            },
            {
              href: "https://x.com/i_amtony_",
              icon: <FiTwitter size={24} />,
              label: "Twitter Profile",
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
              className="p-4 rounded-full bg-[#0E0E0E] border border-[#2A2A2A] text-[#A0A0A0] hover:text-[#C5A15B] transition-all duration-300 flex items-center justify-center w-14 h-14"
              aria-label={link.label}
              whileHover={{
                scale: 1.15,
                backgroundColor: "#C5A15B",
                color: "#0E0E0E",
                borderColor: "#C5A15B",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          className="mt-8 pt-6 border-t border-[#2A2A2A]"
          variants={item}
        >
          <p className="text-[#A0A0A0] text-sm">
            Currently available for freelance work and full-time opportunities
          </p>
          <p className="text-[#C5A15B] font-medium mt-2">
            Let's build something amazing together!
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 left-10 text-[#A0A0A0] opacity-30 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <FiMail size={32} />
      </motion.div>

      <motion.div
        className="absolute top-10 right-10 text-[#A0A0A0] opacity-30 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <FiGithub size={32} />
      </motion.div>
    </div>
  );
};

export default Contact;
