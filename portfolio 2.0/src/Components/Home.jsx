import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import SkillsMarqueeWithIcons from "./SkillsMarquee";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SkillsMarqueeWithIcons />
      <Footer />
    </>
  );
}

export default Home;
