import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import movieDatabasePic from "../assets/moviedatabase.png";
import LandingPagePics from "../assets/landingpage.jpg";

const projects = [
  {
    id: 1,
    title: "Movie Database APP",
    description:
      "This app allows users to easily search for movies and get detailed information about them",
    technologies: ["React", "Tailwind CSS"],
    demoLink: "https://movie-database-57i3.vercel.app/",
    githubLink: "https://github.com/Oracle00999/ALX_CAPSTONE_PROJECT.git",
    image: movieDatabasePic,
  },
  {
    id: 2,
    title: "Landing Page Website",
    description:
      "A sleek and responsive landing page designed to captivate users.",
    technologies: ["React", "Tailwind CSS"],
    demoLink: "https://landingpage-sigma-hazel.vercel.app/",
    githubLink: "https://github.com/Oracle00999/Projects.git",
    image: LandingPagePics,
  },
];

// ReadMore Component for description
const ReadMore = ({ text, maxChars = 80 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxChars) {
    return <p className="mt-2 text-gray-600">{text}</p>;
  }

  return (
    <p className="mt-2 text-gray-600">
      {isExpanded ? text : `${text.substring(0, maxChars)}... `}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-indigo-500 hover:underline"
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
    <section id="projects" className="py-20 bg-gray-950 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent text-center mb-12"
        >
          My Projects
        </motion.h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 shadow-lg z-10"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 shadow-lg z-10"
        >
          ▶
        </button>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide scroll-smooth pr-1"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[350px] h-[510px] flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[calc(100%-240px)]">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <ReadMore text={project.description} maxChars={80} />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-indigo-500 rounded-lg hover:text-indigo-700 transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-gray-500  hover:text-gray-700  transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
