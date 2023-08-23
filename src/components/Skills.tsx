import React from "react";
import { motion } from "framer-motion";
import mysqlSVG from "../svg/mysql.svg";
import reactSVG from "../svg/react.svg";
import springbootSVG from "../svg/springboot.svg";
import { useMouseVariant } from "../modules/customMouse/hooks/useMouseVariant";
import "../styles/Skills.css";
import CircleMouse from "../modules/customMouse";

const SkillIcon = ({
  svg,
  name,
}: {
  svg: string;
  name: string;
}) =>{
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
}

const Skills = () => {
  return (
    <div className="skills" >
      <SkillIcon svg={reactSVG} name="React" />
      <SkillIcon svg={springbootSVG} name="SpringBoot" />
      <SkillIcon svg={mysqlSVG} name="MySQL" />
      <CircleMouse/>
    </div>
  );
};

export default Skills;
