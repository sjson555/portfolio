import React from "react";
import html5 from "../images/html5.svg";
import css3 from "../images/css3.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import java from "../images/java.svg";
import spring from "../images/spring.svg";
import springboot from "../images/springboot.svg";
import mysql from "../images/mysql.svg";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1 className="hedding">Skills</h1>
      </div>
      <div className="front">
        <img src={html5} alt="html5" className="skills-img"></img>
        <img src={css3} alt="css3" className="skills-img"></img>
        <img src={javascript} alt="javascript" className="skills-img"></img>
        <img src={react} alt="react" className="skills-img"></img>
      </div>
      <div className="back">
        <img src={java} alt="java" className="skills-img"></img>
        <img src={spring} alt="spring" className="skills-img"></img>
        <img src={springboot} alt="springboot" className="skills-img"></img>
        <img src={mysql} alt="mysql" className="skills-img"></img>
      </div>
    </div>
  );
};

export default Skills;
