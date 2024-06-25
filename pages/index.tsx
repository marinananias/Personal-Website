import React, { useState, useEffect } from "react";
import AboutTransition from "../components/transitions/AboutTransition";
import CodingTransition from "../components/transitions/CodingTransition";
import MusicTransition from "../components/transitions/MusicTransition";
import ContactTransition from "../components/transitions/ContactTransition";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import About from "../components/About";
import Coding from "../components/Coding";
import Music from "../components/Music";
import Contact from "../components/Contact";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("landing");

  useEffect(() => {
    const handleScroll = () => {
      const landingSection = document.getElementById("landing");
      const aboutSection = document.getElementById("about");
      const codingSection = document.getElementById("coding");
      const musicSection = document.getElementById("music");
      const contactSection = document.getElementById("contact");

      const threshold = window.innerHeight / 2;

      if (
        landingSection &&
        landingSection.getBoundingClientRect().bottom >= threshold
      ) {
        setCurrentSection("landing");
      } else if (
        aboutSection &&
        aboutSection.getBoundingClientRect().top <= threshold
      ) {
        setCurrentSection("about");
      } else if (
        codingSection &&
        codingSection.getBoundingClientRect().top <= threshold
      ) {
        setCurrentSection("coding");
      } else if (
        musicSection &&
        musicSection.getBoundingClientRect().top <= threshold
      ) {
        setCurrentSection("music");
      } else if (
        contactSection &&
        contactSection.getBoundingClientRect().top <= threshold
      ) {
        setCurrentSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Landing id="landing" />
      {currentSection === "about" && <AboutTransition id={"about"} />}
      <About id="about" />
      {currentSection === "coding" && <CodingTransition id={"coding"} />}
      <Coding id="coding" />
      {currentSection === "music" && <MusicTransition id={"music"} />}
      <Music id="music" />
      {currentSection === "contact" && <ContactTransition id={"contact"} />}
      <Contact id="contact" />
    </Layout>
  );
}
