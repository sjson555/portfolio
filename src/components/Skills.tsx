import React from "react";
import { motion } from "framer-motion";
import mysqlSVG from "../svg/mysql.svg";
import reactSVG from "../svg/react.svg";
import springbootSVG from "../svg/springboot.svg";
import htmlSVG from "../svg/html5.svg";
import cssSVG from "../svg/css3.svg";
import javascriptSVG from "../svg/javascript.svg";
import springSVG from "../svg/spring.svg";
import javaSVG from "../svg/java.svg";
import { useMouseVariant } from "../modules/customMouse/hooks/useMouseVariant";
import "../styles/Skills.css";

const SkillIcon = ({ svg, name }: { svg: string; name: string }) => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={svg}
        alt={name}
        className="skills-icon"
        onMouseEnter={() => setMouseVariant.technology(name)}
        onMouseLeave={setMouseVariant.default}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <div className="skills-hedding">Skill</div>
      </div>
      <div className="skills-section">
        <div className="skills-category">
          <div className="skills-hedding">Frontend</div>
          <div className="skills-icon-list">
            <SkillIcon svg={htmlSVG} name="HTML" />
            <SkillIcon svg={cssSVG} name="CSS" />
            <SkillIcon svg={javascriptSVG} name="JavaScript" />
            <SkillIcon svg={reactSVG} name="React" />
          </div>
        </div>
        <div className="skills-category">
          <div className="skills-hedding">Backend</div>
          <div className="skills-icon-list">
            <SkillIcon svg={javaSVG} name="JAVA" />
            <SkillIcon svg={springSVG} name="Spring" />
            <SkillIcon svg={springbootSVG} name="SpringBoot" />
            <SkillIcon svg={mysqlSVG} name="MySQL" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
