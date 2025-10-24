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
    // {
    //   id: 1,
    //   title: "Full-Stack Developer",
    //   company: "Freelance",
    //   type: "Freelance",
    //   location: "Remote",
    //   period: "2023 - Present",
    //   description: [
    //     "Developed and deployed full-stack web applications for various clients using React, Node.js, and MongoDB",
    //     "Built responsive user interfaces with modern CSS frameworks like Tailwind CSS and Styled Components",
    //     "Implemented RESTful APIs and integrated third-party services including payment gateways and authentication systems",
    //     "Collaborated with clients to understand requirements and deliver scalable solutions",
    //   ],
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "MongoDB",
    //     "Express",
    //     "Tailwind CSS",
    //     "Git",
    //   ],
    //   logo: "💼",
    //   link: "#",
    // },

    // {
    //   id: 2,
    //   title: "Frontend Developer Intern",
    //   company: "Tech Startup Inc.",
    //   type: "Internship",
    //   location: "Lagos, Nigeria",
    //   period: "2022 - 2023",
    //   description: [
    //     "Worked on building responsive user interfaces for web applications using React.js",
    //     "Collaborated with UX designers to implement pixel-perfect designs",
    //     "Participated in agile development processes and code reviews",
    //     "Optimized application performance and improved loading times by 30%",
    //   ],
    //   technologies: ["React", "JavaScript", "CSS3", "Git", "Figma"],
    //   logo: "🚀",
    //   link: "#",
    // },
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
      link: "#",
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
      className="py-20 bg-[#0a192f] relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            backgroundPosition: "center center",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#8892b0] max-w-2xl mx-auto">
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
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff6b35] via-[#ff8c61] to-[#ff6b35] opacity-30 transform -translate-x-1/2 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={item}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } mb-12 md:mb-16`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#ff6b35] rounded-full border-4 border-[#0a192f] transform -translate-x-1/2 z-10 hidden md:block"></div>

              {/* Content Card */}
              <div
                className={`ml-0 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-[#112240] border border-[#233554] rounded-2xl p-6 shadow-2xl hover:shadow-2xl hover:shadow-[#ff6b35]/10 transition-all duration-300 hover:border-[#ff6b35]/30 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#ff8c61] rounded-lg flex items-center justify-center text-xl">
                        {experience.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#ff6b35] transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-[#ff6b35] font-semibold">
                          <span>{experience.company}</span>
                          <span className="text-sm bg-[#ff6b35]/10 px-2 py-1 rounded-full">
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
                        className="text-[#8892b0] hover:text-[#ff6b35] transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[#8892b0]">
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
                        className="flex items-start space-x-2 text-[#8892b0]"
                      >
                        <span className="text-[#ff6b35] mt-1.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#0a192f] border border-[#233554] text-[#ffffff] text-xs font-medium rounded-full hover:border-[#64ffda] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date for Mobile */}
              <div className="ml-12 mt-2 md:hidden">
                <div className="flex items-center space-x-1 text-sm text-[#ff6b35] font-semibold">
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
          <p className="text-lg text-[#8892b0] mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] text-[#0a192f] font-bold rounded-lg hover:shadow-2xl hover:shadow-[#ff6b35]/30 transform hover:-translate-y-1 transition-all duration-300"
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
