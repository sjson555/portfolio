import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-me-title">
        <h1 className="hedding">About Me</h1>
        <div className="about-me-photo">
          <img src="" alt="profile" />
        </div>
      </div>
      <div className="about-me-content">
        <p>
          안녕하세요. 풀스택 개발자를 꿈꾸는 손성준입니다.
          <br />
          저는 새로운 기술을 배우면서 무언가를 만드는 것을 좋아합니다.
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
