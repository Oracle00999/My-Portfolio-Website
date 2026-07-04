import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import SkillsMarqueeWithIcons from "./SkillsMarquee";
import Experience from "./Experience";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <SkillsMarqueeWithIcons />
      <Footer />
    </>
  );
}

export default Home;
