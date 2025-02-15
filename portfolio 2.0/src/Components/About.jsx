import React from "react";
import { motion } from "framer-motion";
// import profileImage from "../assets/tobeupdated.webp";
import profileImage from "../assets/profile.jpg";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
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
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Hi, I’m Chibuike, a passionate front-end developer with a
              background in computer science. I thrive on creating sleek,
              responsive, and user-friendly web applications that bring ideas to
              life. My journey has been shaped by hard work and resilience,
              especially during my time in the ALX Frontend Program, where I
              honed my skills in JavaScript, React, and modern web development
              practices. Completing the program was no walk in the park, but it
              taught me perseverance and the value of continuous learning.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              When I’m not immersed in coding, you’ll find me exploring my other
              passions: gaming, football, and indulging in delicious meals.
              These hobbies keep me balanced and energized, fueling my
              creativity for tackling complex coding challenges. I’m always
              eager to learn new technologies and push the boundaries of what’s
              possible in web development.
            </p>
            {/* Certification Link */}
            <div className="mt-6">
              <a
                href="https://intranet.alxswe.com/certificates/fHXCP6z2BN" // Replace with your actual certification link
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
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">My Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm"
                  >
                    {skill}
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
            <img
              src={profileImage} // Replace with your photo or illustration
              alt="Your Name"
              className="w-80 h-80 md:w-64 md:h-64 lg:w-100 lg:h-100 rounded-full object-cover border-8 border-white shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
