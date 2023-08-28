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
          저는 프론트엔드와 백엔드를 학습하며 더욱 성장할 기회를 찾고있습니다.
        </p>
        <section className="about-me-section">
          <p>
            2023.01.09 ~ 2023.06.23
            <br />
            멀티캠퍼스 풀스택 개발자 교육과정
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
