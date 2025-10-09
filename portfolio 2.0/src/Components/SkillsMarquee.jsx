import React from "react";
import { motion } from "framer-motion";

const SkillsMarqueeWithIcons = () => {
  const skillsWithIcons = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Python", icon: "🐍" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Git", icon: "📚" },
    { name: "GitHub", icon: "🐙" },
    { name: "REST APIs", icon: "🌐" },
    { name: "HTML5", icon: "📄" },
    { name: "CSS3", icon: "🎨" },
  ];

  return (
    <div className="w-full py-6 bg-[#112240] border-y border-[#233554] overflow-hidden">
      <div className="relative">
        {/* First row - sliding left */}
        <motion.div
          className="flex whitespace-nowrap mb-2"
          animate={{
            x: [0, -window.innerWidth],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...skillsWithIcons, ...skillsWithIcons].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-3 px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] font-medium text-sm hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all duration-300 hover:scale-105 flex-shrink-0"
            >
              <span className="mr-2 text-base">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsMarqueeWithIcons;
