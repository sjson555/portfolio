import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProjectList from "./Project/ProjectList";
import Skills from "./Skills";

const Layout = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <ProjectList />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
