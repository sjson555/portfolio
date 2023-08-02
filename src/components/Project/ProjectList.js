import React from "react";
import Project from "../Project/Project";
import "../../styles/Project.css";

const ProjectList = () => (
  <div className="project" id="project">
    <header className="project-title">
      <h1 className="project-hedding">Project</h1>
    </header>
    <div className="project-container">
      <Project />
    </div>
  </div>
);

export default ProjectList;
