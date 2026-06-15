import { motion, useReducedMotion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.55,
        ease: "easeOut",
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0E0E] text-[#A0A0A0] py-16 relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Combined Grid and Circle Pattern Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-25"
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

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A15B] rounded-full opacity-3 blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full opacity-3 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="flex flex-col items-center text-center"
        >
          {/* Call-to-Action */}
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] mb-6"
          >
            Let&apos;s Build Something Amazing Together!
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-[#A0A0A0] mb-8 max-w-2xl"
          >
            I&apos;m always open to discussing new opportunities, creative
            projects, and innovative ideas. Let&apos;s connect and create something
            extraordinary!
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={item}
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
                className="p-4 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] text-[#A0A0A0] hover:text-[#C5A15B] hover:border-[#C5A15B] transition-all duration-300 relative group"
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.1, y: -2 }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              >
                {link.icon}
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#C5A15B] text-[#0E0E0E] text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Email */}
          <motion.div
            variants={item}
            className="mb-6"
          >
            <a
              href="mailto:nwazotachibuike@gmail.com"
              className="text-[#C5A15B] hover:text-[#D4AF37] font-semibold text-lg transition-colors duration-300"
            >
              nwazotachibuike@gmail.com
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={item}
            className="text-sm text-[#A0A0A0] mb-6"
          >
            <p>© {currentYear} Nwazota Chibuike. All rights reserved.</p>
            <p className="mt-1">Built with React & Tailwind CSS</p>
          </motion.div>

          {/* Back-to-Top Button */}
          <motion.button
            variants={item}
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-6 py-3 bg-[#C5A15B] text-[#0E0E0E] font-semibold rounded-lg hover:bg-[#D4AF37] hover:shadow-2xl hover:shadow-[#C5A15B]/30 transform hover:-translate-y-1 transition-all duration-300 group"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowUp />
            </motion.div>
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent opacity-30 z-20"></div>
    </footer>
  );
};

export default Footer;
