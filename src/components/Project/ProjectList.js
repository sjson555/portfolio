import React from "react";
import Project from "../Project/Project";
import "../../styles/Project.css";

const ProjectList = () => (
  <div className="project" id="projects">
    <div className="project-title">
      <h1 className="project-heading">Projects</h1>
    </div>
    <div className="project-container">
      <Project
        title="react-portfolio"
        projectimage="/images/portfolio.gif"
        description="포트폴리오"
        github="https://github.com/sjson555/react-portfolio"
        demo="https://github.com/sjson555/react-portfolio"
      />
      <Project
        title="WeddingYou"
        projectimage="/images/weddingyouLOGO.png"
        description="맞춤형 웨딩플래너 매칭 서비스"
        github="https://github.com/weddingYou-Project"
        demo="/pdf/weddingyou.pdf"
      />
    </div>
  </div>
);

export default ProjectList;
