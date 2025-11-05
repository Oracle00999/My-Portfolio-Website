import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  // Controls and viewport detection
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="w-full py-6 bg-[#1C1C1C] border-y border-[#2A2A2A] overflow-hidden"
    >
      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {/* Double the skills for a seamless infinite scroll */}
          {[...skillsWithIcons, ...skillsWithIcons].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-3 px-4 py-2 bg-[#0E0E0E] border border-[#2A2A2A] rounded-lg text-[#A0A0A0] font-medium text-sm hover:text-[#C5A15B] hover:border-[#C5A15B] transition-all duration-300 hover:scale-105 flex-shrink-0"
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
