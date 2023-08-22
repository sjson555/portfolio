import React from "react";
import mysqlSVG from "../asset/mysql.svg";
import reactSVG from "../asset/react.svg";
import springbootSVG from "../asset/springboot.svg";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <img src={reactSVG} name="React" className="skills-icon" />
      <img src={springbootSVG} name="Spring Boot" className="skills-icon" />
      <img src={mysqlSVG} name="MySQL" className="skills-icon" />
    </div>
  );
};

export default Skills;
