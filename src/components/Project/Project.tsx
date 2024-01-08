import React from "react";
import { BsGithub, BsFiletypePpt } from "react-icons/bs";
import "../../styles/Project.css";

const Project = ({
  imgSrc,
  title,
  description,
  ppt,
  github,
}: {
  imgSrc: string;
  title: string;
  ppt?: string;
  description: string;
  github?: string;
  process?: string;
}) => {
  return (
    <div className="project-content">
      <img className="project-image" src={imgSrc} alt={title} />
      <div className="project-divider" />
      <p className="project-title">{title}</p>
      <div className="project-divider" />
      <p className="project-description">{description}</p>
      <div className="project-buttons">
        {github && (
          <a
            className="project-btn"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="project-icon" />
            GitHub
          </a>
        )}
        {ppt && (
          <a
            className="project-btn"
            href={ppt}
            target="_blank"
            rel="noreferrer"
          >
            <BsFiletypePpt className="project-icon" />
            PPT
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
