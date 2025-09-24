import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "A Backend Developer",
  "A Frontend Developer",
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
  const [index, setIndex] = useState(0); // which role
  const [subIndex, setSubIndex] = useState(0); // which character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === roles.length) {
      setIndex(0); // loop back
      return;
    }

    if (subIndex === roles[index].length + 1 && !deleting) {
      // pause before deleting
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <motion.span
      key={roles[index]}
      className="mt-3 block text-xl sm:text-2xl lg:text-3xl font-semibold bg-[#ff6b35]  bg-clip-text text-transparent"
    >
      {roles[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

export default TypingEffect;
