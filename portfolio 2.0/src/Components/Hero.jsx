import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import TypingEffect from "./Typingeffect";
import portfolioImg from "../assets/img.png";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 20 });
  const backgroundX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const backgroundY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const portraitX = useTransform(smoothX, [-1, 1], [10, -10]);
  const portraitY = useTransform(smoothY, [-1, 1], [10, -10]);

  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.15,
        staggerChildren: shouldReduceMotion ? 0.04 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.55,
        ease: "easeOut",
      },
    },
  };

  const handlePointerMove = (event) => {
    if (
      shouldReduceMotion ||
      !window.matchMedia("(min-width: 768px) and (pointer: fine)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="min-h-screen bg-[#0E0E0E] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-0 relative overflow-hidden"
    >
      {/* Combined Grid and Circle Pattern Background */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-3"
        style={
          shouldReduceMotion ? undefined : { x: backgroundX, y: backgroundY }
        }
      >
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
      </motion.div>

      <div className="relative z-10 grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left Column: Text Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-snug break-words text-[#FFFFFF] pt-12"
          >
            Hi, I&apos;m Nwazota Chibuike
          </motion.h1>
          <motion.div variants={itemVariants}>
            <TypingEffect />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-[#FFFFFF] font-medium"
          >
            Full-Stack Developer building thoughtful products from interface to
            API.
          </motion.p>
          <motion.div variants={itemVariants}>
            <p className="mt-4 text-[#A0A0A0] leading-relaxed">
              I build responsive web applications from polished React interfaces
              to reliable Node.js APIs. My focus is creating fast, practical
              products that solve real problems and feel great to use.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center gap-4 mt-8 sm:flex-row md:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-[#C5A15B] text-[#0E0E0E] font-semibold rounded-lg hover:bg-[#D4AF37] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              View My Work
            </a>
            <a
              href="https://docs.google.com/document/d/1ZUgJedPNtaUVT0E0s_Y271LnR2n1RM3YoDdVjAJiOmo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#C5A15B] text-[#C5A15B] font-semibold rounded-lg hover:bg-[#C5A15B] hover:text-[#0E0E0E] transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              View RESUME
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8 space-x-6 md:justify-start"
          >
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
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Element */}
        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 35,
            scale: shouldReduceMotion ? 1 : 0.96,
          }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease: "easeOut",
          }}
          className="items-center justify-center hidden md:flex"
        >
          <motion.div
            className="relative"
            style={
              shouldReduceMotion ? undefined : { x: portraitX, y: portraitY }
            }
          >
            {/* Main Circle */}
            <div className="relative flex items-center justify-center overflow-hidden rounded-full shadow-2xl w-82 h-82">
              {/* Profile Image */}
              <div className="relative z-10 w-76 h-76 rounded-full overflow-hidden border-4 border-[#C5A15B] shadow-xl">
                <img
                  src={portfolioImg}
                  alt="Anthony's Portfolio"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg border border-[#2A2A2A]"
            >
              <i className="fab fa-react text-[#C5A15B] text-xl"></i>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg border border-[#2A2A2A]"
            >
              <i className="fab fa-js-square text-[#C5A15B] text-2xl"></i>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
