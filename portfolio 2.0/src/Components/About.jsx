import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
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
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Responsive Design",
      logo: "https://img.icons8.com/?size=512&id=22180&format=png",
    }, // placeholder icon
    {
      name: "Nodejs",
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
      name: "MySql",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ];

  return (
    <section id="about" className="py-26 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent animate-bounce">
              Full-Stack Developer
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Hi, I’m Chibuike, a passionate full-stack developer with a
              background in computer science. I thrive on building sleek,
              responsive, and user-friendly applications that work seamlessly
              from the front end to the back end. My journey has been shaped by
              hard work and resilience, especially during my time in the ALX
              Frontend Program and my continued growth in backend development
              with Node.js, Express, and databases like MongoDB and SQL. These
              experiences taught me perseverance, problem-solving, and the value
              of continuous learning.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              When I’m not immersed in coding, you’ll find me exploring my other
              passions: gaming, football, and indulging in delicious meals.
              These hobbies keep me balanced and energized, fueling my
              creativity for tackling complex software challenges. I’m always
              eager to learn new technologies and push the boundaries of what’s
              possible in web development.
            </p>

            {/* Certification Link */}
            <div className="mt-6">
              <a
                href="https://intranet.alxswe.com/certificates/fHXCP6z2BN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
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
            </div>

            {/* Skills Section */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm text-gray-800 rounded-full text-sm font-medium hover:bg-indigo-50 transition"
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
          </motion.div>

          {/* Right Column: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
