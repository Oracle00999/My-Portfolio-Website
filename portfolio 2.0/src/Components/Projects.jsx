import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import movieDatabasePic from "../assets/moviedatabase.png";
import BlogAppPic from "../assets/nodejsblog.png";
import figma from "../assets/figma.png";
import Aether from "../assets/aether.png";
import AI from "../assets/ai.png";
import Pingbase from "../assets/pingbase.png";

// Project data
const projects = [
  {
    id: 6,
    title: "Pingbase",
    description:
      "A lightweight API monitoring platform for tracking uptime, latency, incidents, and webhook alerts. It supports workspaces, scheduled and manual checks, Google and GitHub authentication, and a clean dashboard for monitoring APIs and websites.",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Zod",
    ],
    demoLink: "https://pingbase-inky.vercel.app/",
    githubLink: "https://github.com/Oracle00999/API-Monitoring-Platform.git",
    image: Pingbase,
  },
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
    id: 5,
    title: "Briefly AI",
    description:
      "An AI-powered content summarization web application that leverages OpenAI's GPT-3.5-turbo model to generate concise summaries from user-provided text. it offers a seamless user experience for quick content digestion.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "openAI",
    ],
    demoLink: "https://content-summarizer-frontend.vercel.app/",
    githubLink:
      "https://github.com/Oracle00999/content-summarizer-frontend.git",
    image: AI,
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

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="bg-[#0E0E0E] py-20 sm:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A15B]">
            Selected work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects I&apos;ve built
          </h2>
          <p className="mt-5 text-base leading-7 text-[#A0A0A0] sm:text-lg">
            A collection of web experiences built with thoughtful interfaces,
            responsive layouts, and reliable modern tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variants={cardVariants}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, variants, shouldReduceMotion }) => {
  const tagContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.12,
        staggerChildren: shouldReduceMotion ? 0 : 0.055,
      },
    },
  };

  const tagVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 10,
      scale: shouldReduceMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.32,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.article
      variants={variants}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -8,
              boxShadow: "0 18px 45px rgba(197, 161, 91, 0.16)",
            }
      }
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition-colors duration-300 hover:border-[#C5A15B]/70"
    >
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group/image relative block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C5A15B]"
        aria-label={`View ${project.title} live`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.055] group-focus-visible/image:scale-[1.055]"
          loading="lazy"
        />
        <div className="absolute inset-0 grid place-items-center bg-[#0E0E0E]/65 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A15B]/70 bg-[#0E0E0E]/85 px-5 py-2.5 text-sm font-semibold text-[#C5A15B] shadow-[0_0_24px_rgba(197,161,91,0.22)]">
            View project
            <FiArrowUpRight size={17} />
          </span>
        </div>
      </a>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="mb-2 block text-xs font-medium tracking-[0.2em] text-[#C5A15B]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C5A15B] sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <div className="flex gap-2 shrink-0">
            <ProjectLink
              href={project.githubLink}
              label={`View ${project.title} source code`}
              shouldReduceMotion={shouldReduceMotion}
            >
              <FiGithub size={18} />
            </ProjectLink>
            <ProjectLink
              href={project.demoLink}
              label={`Open ${project.title} live site`}
              shouldReduceMotion={shouldReduceMotion}
            >
              <FiArrowUpRight size={19} />
            </ProjectLink>
          </div>
        </div>

        <p className="leading-7 text-[#A0A0A0]">{project.description}</p>

        <motion.div
          variants={tagContainerVariants}
          className="flex flex-wrap gap-2 mt-6"
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={`${project.id}-${tech}-${techIndex}`}
              variants={tagVariants}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-[#B8B8B8] transition-colors duration-300 group-hover:border-[#C5A15B]/25"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
};

const ProjectLink = ({ href, label, children, shouldReduceMotion }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
    whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#B8B8B8] transition-colors duration-300 hover:border-[#C5A15B] hover:bg-[#C5A15B] hover:text-[#0E0E0E]"
  >
    {children}
  </motion.a>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  variants: PropTypes.object.isRequired,
  shouldReduceMotion: PropTypes.bool.isRequired,
};

ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  shouldReduceMotion: PropTypes.bool.isRequired,
};

export default Projects;
