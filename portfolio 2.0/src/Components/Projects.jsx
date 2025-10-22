import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import movieDatabasePic from "../assets/moviedatabase.png";
import LandingPagePics from "../assets/landingpage.jpg";
// import portfolioImg from "../assets/portfolioImg.png";
import BlogAppPic from "../assets/nodejsblog.png";

const projects = [
  {
    id: 1,
    title: "Movie Database APP",
    description:
      "This app allows users to easily search for movies and get detailed information about them. Built with modern React patterns and responsive design for optimal user experience across all devices.",
    technologies: ["React", "Tailwind CSS", "API Integration"],
    demoLink: "https://movie-database-57i3.vercel.app/",
    githubLink: "https://github.com/Oracle00999/ALX_CAPSTONE_PROJECT.git",
    image: movieDatabasePic,
  },
  {
    id: 2,
    title: "Modern SaaS Landing Platform - GrowthEngine",
    description:
      "A sleek and responsive landing page designed to captivate users with modern UI/UX principles. Features smooth animations and optimized performance to enhance user experience.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
    ],
    demoLink: "https://landingpage-sigma-hazel.vercel.app/",
    githubLink: "https://github.com/Oracle00999/Projects.git",
    image: LandingPagePics,
  },
  {
    id: 3,
    title: "Dynamic Node.js Blog Application",
    description:
      "A full-featured blog platform built with Node.js, Express, MongoDB, and EJS. Supports creating, editing, and deleting posts with a secure admin dashboard. Includes session-based authentication, environment configuration, and deployment on Render.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Mongoose",
      "Render Deployment",
    ],
    demoLink: "https://nodejs-blog-app-23ky.onrender.com",
    githubLink: "https://github.com/Oracle00999/Nodejs-blog-app",
    image: BlogAppPic,
  },

  // {
  //   id: 4,
  //   title: "Portfolio Website",
  //   description:
  //     "Designed and developed a responsive single-page portfolio to showcase my projects and skills. Built with React, Tailwind CSS, featuring smooth scrolling navigation, animations with Framer Motion, and a modern UI/UX layout. Optimized for performance and mobile devices.",
  //   technologies: [
  //     "React.js",
  //     "Tailwind CSS",
  //     "Responsive Design",
  //     "Framer Motion",
  //   ],
  //   demoLink: "https://nwazota-anthony.vercel.app/",
  //   githubLink: "https://github.com/Oracle00999/My-Portfolio-Website.git",
  //   image: portfolioImg,
  // },
];

// ReadMore Component
const ReadMore = ({ text, maxChars = 180 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxChars) {
    return <p className="mt-2 text-[#8892b0] leading-relaxed">{text}</p>;
  }

  return (
    <p className="mt-2 text-[#8892b0] leading-relaxed">
      {isExpanded ? text : `${text.substring(0, maxChars)}... `}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#ff6b35] hover:text-[#ff8c61] font-medium transition duration-300 ml-1"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
};

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-16 bg-[#0a192f] relative overflow-hidden"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ff8c61] bg-clip-text text-transparent text-center mb-16"
        >
          My Projects
        </motion.h2>

        {/* Scroll Buttons */}
        <div className="hidden sm:block">
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#112240] text-[#ff6b35] p-3 rounded-full hover:bg-[#ff6b35] hover:text-[#0a192f] border-2 border-[#ff6b35] shadow-2xl z-10 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#112240] text-[#ff6b35] p-3 rounded-full hover:bg-[#ff6b35] hover:text-[#0a192f] border-2 border-[#ff6b35] shadow-2xl z-10 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="w-[320px] sm:w-[360px] md:w-[380px] lg:w-[420px] flex-shrink-0 bg-[#112240] rounded-2xl shadow-2xl overflow-hidden border border-[#233554] hover:border-[#ff6b35] transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#ccd6f6] group-hover:text-[#ff6b35] transition-colors duration-300">
                  {project.title}
                </h3>

                <ReadMore text={project.description} maxChars={100} />

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-3 py-1 bg-[#0a192f] text-[#ccd6f6] rounded-full text-xs sm:text-sm font-medium border border-[#233554] hover:border-[#ff6b35] transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:flex-1 px-4 py-2 bg-[#ff6b35] text-[#ccd6f6] font-semibold rounded-lg hover:bg-[#ff8c61] text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:flex-1 px-4 py-2 border-2 border-[#ff6b35] text-[#ccd6f6] font-semibold rounded-lg hover:bg-[#ff6b35] hover:text-[#0a192f] text-center transition-all duration-300"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-8">
          <span className="text-[#8892b0] text-sm">
            {projects.length} {projects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
{
  /* Custom Scrollbar Hide */
}
<style jsx>{`
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* ✅ Fix vertical scroll conflict */
  .scrollbar-hide {
    overscroll-behavior-x: contain;
    overscroll-behavior-y: none;
  }

  /* ✅ Smooth touchpad/mobile scrolling */
  .scrollbar-hide {
    touch-action: pan-y;
  }
`}</style>;
