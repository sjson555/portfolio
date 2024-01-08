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
          신입 웹 개발자를 희망하는 손성준입니다.
          <br />
          다른 직종에서 일하며 개발자에 관심을 갖고 지켜보던 중 서울42라는
          기관에서 1달간 선발과정을 경험하게되었습니다.
          <br />
          이후 더욱 흥미를 느껴 멀티캠퍼스라는 교육기관에서 풀스택 개발자
          교육과정을 이수했습니다.
          <br />웹 개발자로서 끊임없이 성장하겠습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
