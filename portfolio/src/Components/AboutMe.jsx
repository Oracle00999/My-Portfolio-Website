import React from "react";
import Navbar from "./Navbar";
// import profileImage from "../assets/profile.jpg";
import profileImage from "../assets/tobeupdated.webp";
import { BiCertification } from "react-icons/bi";
import Footer from "./Footer";

function AboutMe() {
  return (
    <>
      <Navbar />

      {/* Main About Me Section */}
      <div className="w-full bg-slate-200 min-h-screen py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-full border-8 border-white shadow-xl object-cover animate-pulse"
          />
        </div>

        {/* About Content */}
        <div className="md:w-2/3 max-w-2xl text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text animate-bounce ">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Hi, I’m Chibuike, a passionate front-end developer with a background
            in computer science. I thrive on creating sleek, responsive, and
            user-friendly web applications that bring ideas to life. My journey
            has been shaped by hard work and resilience, especially during my
            time in the ALX Frontend Program, where I honed my skills in
            JavaScript, React, and modern web development practices. Completing
            the program was no walk in the park, but it taught me perseverance
            and the value of continuous learning.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            When I’m not immersed in coding, you’ll find me exploring my other
            passions: gaming, football, and indulging in delicious meals. These
            hobbies keep me balanced and energized, fueling my creativity for
            tackling complex coding challenges. I’m always eager to learn new
            technologies and push the boundaries of what’s possible in web
            development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <span className="px-4 py-2 bg-indigo-500 text-white rounded-full shadow-md">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md">
              React
            </span>
            <span className="px-4 py-2 bg-purple-500 text-white rounded-full shadow-md">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md">
              ALX FE Graduate
            </span>
            <span className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md">
              Gamer
            </span>
            <span className="px-4 py-2 bg-yellow-500 text-white rounded-full shadow-md">
              Football Enthusiast
            </span>
          </div>

          {/* Certification Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2 justify-center md:justify-start">
              <BiCertification className="text-2xl" />
              Certification
            </h3>
            <div>
              <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text mb-2">
                ALX Frontend Program
              </h4>
              <p className="text-gray-600 mb-4">Issued by ALX Africa</p>
              <a
                href="https://intranet.alxswe.com/certificates/fHXCP6z2BN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-indigo-500 text-white font-semibold rounded shadow hover:bg-indigo-600 transition-all duration-200"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
