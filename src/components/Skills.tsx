import React from "react";
import mysqlSVG from "../svg/mysql.svg";
import reactSVG from "../svg/react.svg";
import springbootSVG from "../svg/springboot.svg";
import { useMouseVariant } from "../modules/customMouse/hooks/useMouseVariant";
import "../styles/Skills.css";

const SkillIcon = ({
  svg,
  name,
}: {
  svg: string;
  name: string;
}) =>{
  const { setMouseVariant } = useMouseVariant();

  const handleMouseEnter = () => {
    console.log(`Mouse entered: ${name}`);
    setMouseVariant.technology(name);
  };

  const handleMouseLeave = () => {
    console.log(`Mouse left: ${name}`);
    setMouseVariant.default();
  };

  return (
      <img
        src={svg}
        alt={name}
        className="skills-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
  );
}

const Skills = () => {
  return (
    <div className="skills" >
      <SkillIcon svg={reactSVG} name="React" />
      <SkillIcon svg={springbootSVG} name="SpringBoot" />
      <SkillIcon svg={mysqlSVG} name="MySQL" />
    </div>
  );
};

export default Skills;
