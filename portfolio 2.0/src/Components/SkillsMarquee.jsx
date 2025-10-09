import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillsMarqueeWithIcons = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const marqueeRef = useRef(null);
  const isInView = useInView(marqueeRef, { once: false, amount: 0.3 }); // triggers when 30% in view

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const baseDuration = screenWidth < 768 ? 18 : 25;
  const travelDistance = screenWidth * 1.2;

  return (
    <div
      ref={marqueeRef}
      className="w-full py-8 bg-[#112240] border-y border-[#233554] overflow-hidden relative"
    >
      {isInView && (
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -travelDistance, 0],
          }}
          transition={{
            x: {
              duration: baseDuration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {skillsWithIcons.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center mx-3 px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] font-medium text-sm hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all duration-300 flex-shrink-0"
            >
              <motion.span
                animate={{ scale: [1, 1.15, 1], opacity: [1, 0.85, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                  delay: index * 0.1,
                }}
                className="mr-2 text-base"
              >
                {skill.icon}
              </motion.span>
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SkillsMarqueeWithIcons;
