import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience-title">
        <h1 className="experience-hedding">Experience</h1>
      </div>
      <div className="experience-content">
        <p>
          2023.01 ~ 2023.06
          <br />
          <a
            href="https://learningssj.notion.site/1b6df1961dc446869a67c95d250f0df0?v=407a424f28e84ea9a4f5672344691fe8&pvs=4"
            target="_blank"
            rel="noreferrer"
          >
            멀티캠퍼스 풀스택 개발자 교육과정
          </a>
        </p>
        <p>
          2022.12~2023.01
          <br />
          서울42 LA PISCINE
        </p>
      </div>
    </div>
  );
};

export default Experience;
