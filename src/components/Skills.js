import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiMysql } from "react-icons/si";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1 className="heading">Skills</h1>
      </div>
      <div className="front">
        <FaHtml5 className="skills-icon" />
        <FaCss3Alt className="skills-icon" />
        <FaJs className="skills-icon" />
        <FaReact className="skills-icon" />
      </div>
      <div className="back">
        <FaJava className="skills-icon" />
        <SiSpring className="skills-icon" />
        <SiSpringboot className="skills-icon" />
        <SiMysql className="skills-icon" />
      </div>
    </div>
  );
};

export default Skills;
