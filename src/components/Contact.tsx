import React from "react";
import "../styles/Contact.css";
import { FaGithub, FaArrowUp } from "react-icons/fa";

const Contact: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="contact" id="contact">
        <h1 className="contact-title">Contact</h1>
        <p className="email">sjson666@gmail.com</p>
        <a href="https://github.com/sjson555?tab=repositories">
          <FaGithub className="github" />
        </a>
      </div>
      <div className="scroll-to-top" onClick={handleScrollToTop}>
        <FaArrowUp className="arrow-up" />
      </div>
    </>
  );
};

export default Contact;
