import React from "react";
import Navbar from "./Navbar";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-200 text-gray-800 px-6 pt-5">
        {/* Header */}
        <h2 className="text-4xl font-bold  mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text animate-bounce ">
          Get In Touch
        </h2>
        <p className="text-center max-w-2xl mb-10 text-gray-600">
          I’m always excited to connect with like-minded individuals! Whether
          it’s about collaborating on projects, sharing ideas, or just chatting,
          feel free to reach out through the form below or connect with me on
          social media.
        </p>

        {/* Contact Form */}
        <form className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-12 flex space-x-6">
          <a
            href="mailto:nwazotachibuike@gmail.com"
            className="p-3 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 transition duration-200 hover:animate-pulse"
            aria-label="Send Email"
          >
            <FiMail size={28} />
          </a>
          <a
            href="https://github.com/Oracle00999"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-900 transition duration-200 hover:animate-pulse"
            aria-label="Visit GitHub Profile"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/nwazotaanthony/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 transition duration-200 hover:animate-pulse"
            aria-label="Visit LinkedIn Profile"
          >
            <FiLinkedin size={28} />
          </a>
          <a
            href="https://x.com/TekhTony"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-200 hover:animate-pulse"
            aria-label="Visit Twitter Profile"
          >
            <FiTwitter size={28} />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
