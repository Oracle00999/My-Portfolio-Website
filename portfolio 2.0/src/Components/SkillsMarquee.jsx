import { useEffect, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillsMarqueeWithIcons = () => {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
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

  useEffect(() => {
    if (shouldReduceMotion) {
      controls.set({ x: "0%" });
    } else if (inView && !isPaused) {
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
  }, [inView, isPaused, shouldReduceMotion, controls]);

  return (
    <div
      ref={ref}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-label="Technology skills. Animation pauses while focused or hovered."
      className="w-full py-6 bg-[#1C1C1C] border-y border-[#2A2A2A] overflow-hidden"
    >
      <div className="relative flex">
        <motion.div
          className={`flex whitespace-nowrap ${
            shouldReduceMotion ? "flex-wrap justify-center gap-3 px-4" : ""
          }`}
          animate={controls}
          initial={{ x: "0%" }}
        >
          {(shouldReduceMotion
            ? skillsWithIcons
            : [...skillsWithIcons, ...skillsWithIcons]
          ).map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`inline-flex items-center px-4 py-2 bg-[#0E0E0E] border border-[#2A2A2A] rounded-lg text-[#A0A0A0] font-medium text-sm hover:text-[#C5A15B] hover:border-[#C5A15B] transition-all duration-300 flex-shrink-0 ${
                shouldReduceMotion ? "" : "mx-3 hover:scale-105"
              }`}
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
