import { motion, useReducedMotion } from "framer-motion";
import { FiLayers, FiLayout, FiServer } from "react-icons/fi";
import porfolioimg from "../assets/img.png";

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const skills = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  const strengths = [
    {
      title: "Frontend",
      description:
        "Responsive, accessible interfaces built with React and thoughtful interaction design.",
      icon: FiLayout,
    },
    {
      title: "Backend",
      description:
        "Reliable APIs, authentication flows, databases, and scalable server-side logic.",
      icon: FiServer,
    },
    {
      title: "Engineering Approach",
      description:
        "Clean code, practical problem-solving, collaboration, and continuous improvement.",
      icon: FiLayers,
    },
  ];

  const textReveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const glowingTextReveal = {
    hidden: {
      ...textReveal.hidden,
      textShadow: "0 0 0 rgba(197, 161, 91, 0)",
      filter: "drop-shadow(0 0 0 rgba(197, 161, 91, 0))",
    },
    visible: {
      ...textReveal.visible,
      textShadow: shouldReduceMotion
        ? "0 0 0 rgba(197, 161, 91, 0)"
        : [
            "0 0 0 rgba(197, 161, 91, 0)",
            "0 0 18px rgba(197, 161, 91, 0.95)",
            "0 0 4px rgba(197, 161, 91, 0.18)",
          ],
      filter: shouldReduceMotion
        ? "drop-shadow(0 0 0 rgba(197, 161, 91, 0))"
        : [
            "drop-shadow(0 0 0 rgba(197, 161, 91, 0))",
            "drop-shadow(0 0 10px rgba(197, 161, 91, 0.7))",
            "drop-shadow(0 0 2px rgba(197, 161, 91, 0.12))",
          ],
    },
  };

  const textViewport = {
    once: false,
    amount: 0.25,
    margin: "-8% 0px -8% 0px",
  };

  const revealTransition = {
    duration: shouldReduceMotion ? 0.2 : 0.55,
    ease: "easeOut",
    textShadow: {
      duration: shouldReduceMotion ? 0.2 : 1.4,
      times: [0, 0.35, 1],
      ease: "easeOut",
    },
    filter: {
      duration: shouldReduceMotion ? 0.2 : 1.4,
      times: [0, 0.35, 1],
      ease: "easeOut",
    },
  };

  // SVG Icons for the floating elements
  const TechIcons = {
    html: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        ></path>
        <path
          fill="#F16529"
          d="M64 116.8l36.378-10.086 8.559-95.878H64z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        ></path>
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        ></path>
      </svg>
    ),
    css: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path
          fill="#1572B6"
          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
        ></path>
        <path
          fill="#33A9DC"
          d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
        ></path>
        <path
          fill="#fff"
          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
        ></path>
        <path
          fill="#fff"
          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
        ></path>
      </svg>
    ),
    js: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
        <path
          fill="#323330"
          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
        ></path>
      </svg>
    ),
    node: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path
          fill="#83CD29"
          d="M106.4 70.6c-2.3 0-4.9-.8-7.3-2.5L90.5 62c-.6-.4-1.5-.3-2 .3-.4.6-.3 1.5.3 2l8.6 6.1c3 2.1 6.5 2.2 9.9.3 3.4-1.9 5.3-5.3 5.3-9.4V49.4c0-4.1-1.9-7.5-5.3-9.4-3.4-1.9-6.9-1.8-9.9.3l-8.6 6.1c-.6.4-1.5.3-2-.3-.4-.6-.3-1.5.3-2l8.6-6.1c2.4-1.7 5-2.5 7.3-2.5 2.6 0 5.1.9 7.1 2.7 2 1.8 3.1 4.3 3.1 7.2v11.3c0 2.9-1.1 5.4-3.1 7.2-2 1.8-4.5 2.7-7.1 2.7zM67.6 81.8c-.8 0-1.5-.7-1.5-1.5V47.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v32.6c0 .8-.7 1.5-1.5 1.5z"
        ></path>
        <path
          fill="#83CD29"
          d="M90.1 81.8c-.8 0-1.5-.7-1.5-1.5V47.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v32.6c0 .8-.7 1.5-1.5 1.5zM64 124.7C33.1 124.7 8 99.6 8 68.7V27.3c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5v41.3c0 22.7 18.4 41.1 41.1 41.1s41.1-18.4 41.1-41.1V27.3c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5v41.3c-.1 31-25.2 56.1-56.2 56.1z"
        ></path>
      </svg>
    ),
  };

  return (
    <section id="about" className="py-15 bg-[#0E0E0E] relative overflow-hidden">
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

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <motion.h2
              variants={glowingTextReveal}
              initial="hidden"
              whileInView="visible"
              viewport={textViewport}
              transition={revealTransition}
              className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-6"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={glowingTextReveal}
              initial="hidden"
              whileInView="visible"
              viewport={textViewport}
              transition={revealTransition}
              className="mt-4 text-lg text-[#A0A0A0] leading-relaxed"
            >
              Hi, I&apos;m Chibuike — a full-stack developer with a computer
              science background. I build responsive web applications from
              polished interfaces to dependable APIs, with a focus on useful
              products, clean code, and strong user experience.
            </motion.p>

            <motion.div
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={textViewport}
              transition={revealTransition}
              className="mt-8 grid gap-4 sm:grid-cols-3"
            >
              {strengths.map((strength, index) => {
                const Icon = strength.icon;

                return (
                  <motion.article
                    key={strength.title}
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 18,
                      boxShadow: "0 0 0 rgba(197, 161, 91, 0)",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      boxShadow: shouldReduceMotion
                        ? "0 0 0 rgba(197, 161, 91, 0)"
                        : [
                            "0 0 0 rgba(197, 161, 91, 0)",
                            "0 0 20px rgba(197, 161, 91, 0.25)",
                            "0 0 4px rgba(197, 161, 91, 0.06)",
                          ],
                    }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.2 : 0.65,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={
                      shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }
                    }
                    className="rounded-2xl border border-white/10 bg-[#171717]/90 p-5 text-left transition-colors duration-300 hover:border-[#C5A15B]/50"
                  >
                    <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#C5A15B]/10 text-[#C5A15B]">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-white">
                      {strength.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#A0A0A0]">
                      {strength.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>

            {/* Certification Link */}
            <motion.div
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={textViewport}
              transition={revealTransition}
              className="mt-8"
            >
              <a
                href="https://intranet.alxswe.com/certificates/fHXCP6z2BN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-[#C5A15B] text-[#0E0E0E] font-semibold rounded-lg hover:bg-[#D4AF37] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>View My ALX FE Certification</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Skills Section */}
            <div className="mt-12">
              <motion.h3
                variants={glowingTextReveal}
                initial="hidden"
                whileInView="visible"
                viewport={textViewport}
                transition={revealTransition}
                className="text-2xl font-semibold text-[#FFFFFF] mb-6"
              >
                Core Stack
              </motion.h3>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 20,
                      boxShadow: "0 0 0 rgba(197, 161, 91, 0)",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      boxShadow: shouldReduceMotion
                        ? "0 0 0 rgba(197, 161, 91, 0)"
                        : [
                            "0 0 0 rgba(197, 161, 91, 0)",
                            "0 0 18px rgba(197, 161, 91, 0.45)",
                            "0 0 4px rgba(197, 161, 91, 0.08)",
                          ],
                    }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.2 : 0.75,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }
                    }
                    className="flex items-center gap-2 px-4 py-3 bg-[#1C1C1C] border border-[#2A2A2A] text-[#A0A0A0] rounded-full text-sm font-medium hover:border-[#C5A15B] hover:text-[#C5A15B] transition-all duration-300 shadow-md"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5"
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="items-center justify-center hidden md:flex"
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="relative flex items-center justify-center overflow-hidden rounded-full shadow-2xl w-80 h-80">
                {/* Profile Image */}
                <div className="relative z-10 w-76 h-76 rounded-full overflow-hidden border-4 border-[#C5A15B] shadow-xl">
                  <img
                    src={porfolioimg}
                    alt="Anthony's Portfolio"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Floating Elements with proper SVGs */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg border border-[#2A2A2A]"
              >
                {TechIcons.html}
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg border border-[#2A2A2A]"
              >
                {TechIcons.js}
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-12 w-16 h-16 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg border border-[#2A2A2A]"
              >
                {TechIcons.css}
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
                className="absolute top-1/4 -left-12 w-14 h-14 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-lg border border-[#2A2A2A]"
              >
                {TechIcons.node}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
