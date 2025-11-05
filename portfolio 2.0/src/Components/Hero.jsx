import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "./Typingeffect";
import porfolioimg from "../assets/img.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0E0E0E] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-0 relative overflow-hidden"
    >
      {/* Combined Grid and Circle Pattern Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-29"
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-snug break-words text-[#FFFFFF] pt-12">
            Hi, I'm Nwazota Chibuike
          </h1>
          <TypingEffect />
          <p className="mt-6 text-lg text-[#FFFFFF] font-medium">
            Full-Stack Developer | Building End-to-End Web Solutions
          </p>
          <p className="mt-4 text-[#A0A0A0] leading-relaxed">
            I specialize in developing sleek, responsive, and user-friendly
            applications that work seamlessly across the front end and back end.
            With expertise in React, Tailwind CSS, Node.js, Express, and
            databases like MongoDB and SQL, I bring ideas to life with modern
            technologies.
          </p>
          <p className="mt-4 text-[#A0A0A0] leading-relaxed">
            Whether it's crafting engaging user interfaces or designing scalable
            backend systems, I'm dedicated to delivering high-quality solutions
            that truly make an impact.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#C5A15B] text-[#0E0E0E] font-semibold rounded-lg hover:bg-[#D4AF37] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              View My Work
            </a>
            <a
              href="https://docs.google.com/document/d/1FTkw2KXjrGFSSHUAF656DbaVbNrCFHSVbEiqOY8LMuQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#C5A15B] text-[#C5A15B] font-semibold rounded-lg hover:bg-[#C5A15B] hover:text-[#0E0E0E] transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              View RESUME
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex space-x-6 justify-center md:justify-start">
            {[
              {
                href: "https://github.com/Oracle00999",
                icon: "fab fa-github",
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/nwazotaanthony/",
                icon: "fab fa-linkedin",
                label: "LinkedIn",
              },
              {
                href: "https://x.com/i_amtony_",
                icon: "fab fa-twitter",
                label: "Twitter",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A0] hover:text-[#C5A15B] transform hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
              >
                <i className={`${social.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative">
            {/* Main Circle */}
            <div className="w-82 h-82 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
              {/* Profile Image */}
              <div className="relative z-10 w-76 h-76 rounded-full overflow-hidden border-4 border-[#C5A15B] shadow-xl">
                <img
                  src={porfolioimg}
                  alt="Anthony's Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg border border-[#2A2A2A]"
            >
              <i className="fab fa-react text-[#C5A15B] text-xl"></i>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg border border-[#2A2A2A]"
            >
              <i className="fab fa-js-square text-[#C5A15B] text-2xl"></i>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
