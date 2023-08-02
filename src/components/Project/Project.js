import React from "react";
import PList from "../Project/PList/PList";
import "../../styles/Project.css";

const Project = () => (
  <div className="Project" id="project">
    <header className="Project_title">
      <h1 className="Project_hedding">Project</h1>
    </header>
    <div className="Container">
      <PList />
    </div>
  </div>
);

export default Project;
