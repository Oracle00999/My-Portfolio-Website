import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const roles = [
  "A Frontend Developer",
  "A Backend Developer",
  "A Full-Stack Developer",
  "A Problem Solver",
  "A Tech Enthusiast",
  "A Lifelong Learner",
  "A Team Player",
  "A Creative Thinker",
  "A Passionate Coder",
  "An Innovator",
  "A Detail-Oriented Developer",
  "A User-Centric Designer",
  "A Performance Optimizer",
  "A Security Advocate",
];

const TypingEffect = () => {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0); // which role
  const [subIndex, setSubIndex] = useState(0); // which character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    if (index === roles.length) {
      setIndex(0); // loop back
      return undefined;
    }

    if (subIndex === roles[index].length + 1 && !deleting) {
      // pause before deleting
      const pauseTimeout = setTimeout(() => setDeleting(true), 1000);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return undefined;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, shouldReduceMotion]);

  return (
    <motion.span
      key={roles[index]}
      className="mt-3 block text-xl sm:text-2xl lg:text-3xl font-semibold text-[#C5A15B]"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.3 }}
    >
      {shouldReduceMotion ? roles[2] : roles[index].substring(0, subIndex)}
      {!shouldReduceMotion && (
        <span className="animate-pulse text-[#C5A15B]">|</span>
      )}
    </motion.span>
  );
};

export default TypingEffect;
