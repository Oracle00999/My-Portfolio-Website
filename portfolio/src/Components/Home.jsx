import React from "react";
import Navbar from "./Navbar";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full bg-slate-200 min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
            {/* Text Content */}
            <div className="p-7 max-w-lg text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-6 ">
                Hi, I'm NWAZOTA CHIBUIKE
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6 ">
                A front-end developer passionate about crafting responsive,
                user-friendly web experiences. With a strong foundation in
                JavaScript, React, and CSS, I enjoy tackling intricate design
                challenges and delivering scalable, high-quality solutions. I’m
                currently expanding my expertise into mobile app development to
                create seamless cross-platform experiences.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* Social Media Icons */}
                <a
                  href="https://x.com/TekhTony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg text-white hover:shadow-xl transition duration-300 hover:animate-pulse"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://github.com/Oracle00999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full shadow-lg text-white hover:shadow-xl transition duration-300 hover:animate-pulse"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nwazotaanthony/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg text-white hover:shadow-xl transition duration-300 hover:animate-pulse"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center items-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl animate-pulse">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
