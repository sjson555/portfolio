import React from "react";
import Project from "./Project";
import "../../styles/Project.css";

const ProjectList = () => (
  <div className="project" id="projects">
    <div className="project-title">
      <h1 className="project-heading">Projects</h1>
    </div>
    <div className="project-container">
      <Project
        imgSrc="/images/portfolio.gif"
        title="react-portfolio"
        description="포트폴리오"
        github="https://github.com/sjson555/react-portfolio"
      />
      <Project
        imgSrc="/images/jellabo.png"
        title="Jellabo"
        description="협업 사이트(멀티캠퍼스 프로젝트)"
        github="https://github.com/Ma-Pol/5TeamProject-Backend"
        ppt="/pdf/jellabo.pdf"
        process=""
      />
      <Project
        imgSrc="/images/weddingyouLogo.png"
        title="WeddingYou"
        description="맞춤형 웨딩플래너 매칭 서비스(멀티캠퍼스 프로젝트)"
        github="https://github.com/weddingYou-Project"
        ppt="/pdf/weddingyou.pdf"
        process=""
      />
    </div>
  </div>
);

export default ProjectList;
