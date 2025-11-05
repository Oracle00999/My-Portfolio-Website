import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "ALX Frontend Program",
      company: "ALX Africa",
      type: "Training Program",
      location: "Remote",
      period: "2024 - 2025",
      description: [
        "Completed intensive frontend development program focusing on modern web technologies",
        "Gained hands-on experience with modern React tools and libraries, including Zustand, TanStack Query, Axios, and Formikl",
        "Built multiple projects including portfolio websites, web applications, and interactive UIs",
        "Learned best practices in responsive design, accessibility, and performance optimization",
        "Collaborated with peers on team projects using Git and GitHub",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Git",
        "Responsive Design",
      ],
      logo: "🎓",
      link: "https://intranet.alxswe.com/certificates/fHXCP6z2BN",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "TechCrush",
      type: "Training Program",
      location: "Remote",
      period: "2025",
      description: [
        "Built and deployed backend APIs using Express.js and MongoDB as part of the TechCrush Backend Development Program",
        "Designed and implemented RESTful endpoints for handling authentication, CRUD operations, and data validation",
        "Worked with JSON-based APIs, middleware, and environment configurations for scalable backend solutions",
        "Collaborated with other developers on GitHub to manage version control and review pull requests",
        "Gained hands-on experience in database design, query optimization, and API documentation",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Git",
        "GitHub",
      ],
      logo: "🖥️",
      // link: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-[#0E0E0E] relative overflow-hidden"
    >
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-[#C5A15B] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            My journey through various roles and projects that have shaped my
            skills and passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C5A15B] via-[#D4AF37] to-[#C5A15B] opacity-30 transform -translate-x-1/2 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={item}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } mb-12 md:mb-16`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#C5A15B] rounded-full border-4 border-[#0E0E0E] transform -translate-x-1/2 z-10 hidden md:block"></div>

              {/* Content Card */}
              <div
                className={`ml-0 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-6 shadow-2xl hover:shadow-2xl hover:shadow-[#C5A15B]/10 transition-all duration-300 hover:border-[#C5A15B]/30 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C5A15B] to-[#D4AF37] rounded-lg flex items-center justify-center text-xl">
                        {experience.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#FFFFFF] group-hover:text-[#C5A15B] transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-[#C5A15B] font-semibold">
                          <span>{experience.company}</span>
                          <span className="text-sm bg-[#C5A15B]/10 px-2 py-1 rounded-full">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {experience.link && (
                      <motion.a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A0A0A0] hover:text-[#C5A15B] transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[#A0A0A0]">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={14} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMapPin size={14} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start space-x-2 text-[#A0A0A0]"
                      >
                        <span className="text-[#C5A15B] mt-1.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#0E0E0E] border border-[#2A2A2A] text-[#A0A0A0] text-xs font-medium rounded-full hover:border-[#C5A15B] hover:text-[#C5A15B] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date for Mobile */}
              <div className="ml-12 mt-2 md:hidden">
                <div className="flex items-center space-x-1 text-sm text-[#C5A15B] font-semibold">
                  <FiCalendar size={14} />
                  <span>{experience.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-[#A0A0A0] mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#C5A15B] text-[#0E0E0E] font-bold rounded-lg hover:bg-[#D4AF37] hover:shadow-2xl hover:shadow-[#C5A15B]/30 transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiBriefcase className="mr-2" />
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
