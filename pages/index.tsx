import React, { useState, useEffect } from "react";
import About from "../components/About";
import Coding from "../components/Coding";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Music from "../components/Music";
import CodingTransition from "../components/transitions/CodingTransition";
import ContactTransition from "../components/transitions/ContactTransition";
import LogoTransition from "../components/transitions/LogoTransition";
// import { animateScroll as scroll, scroller } from "react-scroll";

// const navigationItems = [
//   { label: "Home", to: "landing" },
//   { label: "About Me", to: "about" },
//   { label: "Coding", to: "coding" },
//   { label: "Making Music", to: "music" },
//   { label: "Contact Me", to: "contact" },
// ];

// const [value, setValue] = useState(0);

// const handleChange = (event, newValue) => {
//   setValue(newValue);

//   const item = navigationItems[newValue];

//   scroller.scrollTo(item.to, {
//     duration: 1000,
//     delay: 0,
//     smooth: "easeInOutQuart",
//   });
// };

export default function Home() {
  return (
    <Layout>
      <Landing id={"landing"} />
      <LogoTransition id={"aboutTransition"} />
      <About id={"about"} />
      <CodingTransition id={"codingTransition"} />
      <Coding id={"coding"} />
      <LogoTransition id={"musicTransition"} />
      <Music id={"music"} />
      <ContactTransition id={"contactTransition"} />
      <Contact id={"contact"} />
    </Layout>
  );
}
