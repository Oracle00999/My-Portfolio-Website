import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white py-8">
      <div className="container max-w-screen-lg mx-auto px-6 text-center">
        {/* Branding */}
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400 hover:from-purple-400 hover:to-blue-300 transition-all duration-300 hover:animate-bounce">
          ANTHONY
        </h3>
        <p className="mb-4">
          Crafting responsive, user-friendly web experiences with passion and
          dedication.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/Oracle00999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nwazotaanthony/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/TekhTony"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Anthony. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
