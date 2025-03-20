import React from "react";
import { motion } from "framer-motion";
import movieDatabasePic from "../assets/moviedatabase.png";

const projects = [
  {
    id: 1,
    title: "Movie Database APP",
    description:
      "This app allows users to easily search for movies and get detailed information about them",
    technologies: ["React", "Tailwind CSS"],
    demoLink: "https://movie-database-57i3.vercel.app/",
    githubLink: "https://github.com/Oracle00999/ALX_CAPSTONE_PROJECT.git",
    image: movieDatabasePic, // Replace with your project screenshot
  },
  // {
  //   id: 2,
  //   title: "Project 2",
  //   description:
  //     "A brief description of what the project does and its purpose.",
  //   technologies: ["JavaScript", "CSS", "API Integration"],
  //   demoLink: "https://example.com",
  //   githubLink: "https://github.com/yourusername/project2",
  //   image: "https://via.placeholder.com/400", // Replace with your project screenshot
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-26 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent text-center mb-12 animate-bounce"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
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
