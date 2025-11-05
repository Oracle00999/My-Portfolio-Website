import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import movieDatabasePic from "../assets/moviedatabase.png";
import LandingPagePics from "../assets/landingpage.jpg";
import BlogAppPic from "../assets/nodejsblog.png";
import figma from "../assets/figma.png";
import Aether from "../assets/aether.png";

// Project data
const projects = [
  {
    id: 2,
    title: "Aether — Minimalist Fashion Landing Page",
    description:
      "A modern, responsive landing page for a sustainable clothing brand, built with a focus on clean aesthetics and mobile-first design. Features curated product showcases, collection highlights, and an elegant newsletter section.",
    technologies: ["React.js", "Tailwind CSS"],
    demoLink: "https://aetherclothing.vercel.app/",
    githubLink: "https://github.com/Oracle00999/Aether.git",
    image: Aether,
  },
  {
    id: 4,
    title: "SDK Enterprise",
    description:
      "This is a modern, responsive landing page built with React and Tailwind CSS. The design was provided by a friend, and I handled the complete implementation — translating the static design into a fully functional, perfect web page.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
    ],
    demoLink: "https://figma-design-0.vercel.app/",
    githubLink: "https://github.com/Oracle00999/figma-design.git",
    image: figma,
  },
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
];

// ReadMore Component
const ReadMore = ({ text, maxChars = 180 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxChars) {
    return <p className="mt-2 text-[#A0A0A0] leading-relaxed">{text}</p>;
  }

  return (
    <p className="mt-2 text-[#A0A0A0] leading-relaxed">
      {isExpanded ? text : `${text.substring(0, maxChars)}... `}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#C5A15B] hover:text-[#D4AF37] font-medium transition duration-300 ml-1"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
};

// Projects Component
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
      className="py-20 bg-[#0E0E0E] relative overflow-hidden"
    >
      {/* Combined Grid and Circle Pattern Background */}
      <BackgroundPattern />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] text-center mb-16"
        >
          My Projects
        </motion.h2>

        {/* Scroll Buttons */}
        <ScrollButtons onScroll={scroll} />

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Counter */}
        <ProjectCounter count={projects.length} />
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

// Background Pattern Component
const BackgroundPattern = () => (
  <>
    <div
      className="absolute inset-0 opacity-24"
      style={{
        backgroundImage: `
                    linear-gradient(#1C1C1C 1px, transparent 1px),
                    linear-gradient(90deg, #1C1C1C 1px, transparent 1px)
                `,
        backgroundSize: "50px 50px",
        backgroundPosition: "center center",
      }}
    />
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
    <div className="absolute inset-0 bg-radial-gradient(at center, transparent 0%, #0E0E0E 70%)" />
  </>
);

// Scroll Buttons Component
const ScrollButtons = ({ onScroll }) => (
  <div className="hidden sm:block">
    <button
      onClick={() => onScroll("left")}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1C1C1C] text-[#C5A15B] p-3 rounded-full hover:bg-[#C5A15B] hover:text-[#0E0E0E] border-2 border-[#C5A15B] shadow-2xl z-10 transition-all duration-300 transform hover:scale-110"
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
      onClick={() => onScroll("right")}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1C1C1C] text-[#C5A15B] p-3 rounded-full hover:bg-[#C5A15B] hover:text-[#0E0E0E] border-2 border-[#C5A15B] shadow-2xl z-10 transition-all duration-300 transform hover:scale-110"
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
);

// Project Card Component
const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -5 }}
    className="w-[320px] sm:w-[360px] md:w-[380px] lg:w-[420px] flex-shrink-0 bg-[#1C1C1C] rounded-2xl shadow-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#C5A15B] transition-all duration-300 group"
  >
    {/* Project Image */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 sm:h-56 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Project Content */}
    <div className="p-6 flex flex-col h-full">
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#FFFFFF] group-hover:text-[#C5A15B] transition-colors duration-300">
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
            className="px-3 py-1 bg-[#0E0E0E] text-[#A0A0A0] rounded-full text-xs sm:text-sm font-medium border border-[#2A2A2A] hover:border-[#C5A15B] hover:text-[#C5A15B] transition-colors duration-300"
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
          className="w-full sm:flex-1 px-4 py-2 bg-[#C5A15B] text-[#0E0E0E] font-semibold rounded-lg hover:bg-[#D4AF37] text-center transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Live Demo
        </motion.a>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:flex-1 px-4 py-2 border-2 border-[#C5A15B] text-[#C5A15B] font-semibold rounded-lg hover:bg-[#C5A15B] hover:text-[#0E0E0E] text-center transition-all duration-300"
        >
          GitHub
        </motion.a>
      </div>
    </div>
  </motion.div>
);

// Project Counter Component
const ProjectCounter = ({ count }) => (
  <div className="text-center mt-8">
    <span className="text-[#A0A0A0] text-sm">
      {count} {count === 1 ? "Project" : "Projects"}
    </span>
  </div>
);

export default Projects;
