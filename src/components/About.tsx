import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-me-title">
        <h1 className="hedding">About Me</h1>
      </div>
      <div className="about-me-content">
        <p>
          안녕하세요!
          <br />
          저는 백엔드를 학습하며 더욱 성장할 기회를 찾고있습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
