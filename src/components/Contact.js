import React from "react";
import "../styles/Contact.css";
import Github from "../images/github-logo.svg";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <h1 className="contact-title">Contact</h1>
        <p className="email">sjson666@gmail.com</p>
        <a href="https://github.com/sjson555?tab=repositories">
          <img src={Github} alt="github" className="github"></img>
        </a>
      </div>
    </>
  );
};

export default Contact;
