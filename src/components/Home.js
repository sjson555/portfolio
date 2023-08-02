import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const finalText = "안녕하세요 손성준입니다.";
  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < finalText.length) {
      const typing = setInterval(() => {
        setText((prevText) => prevText + finalText[i]);
        setI((prevI) => prevI + 1);
      }, 178);

      return () => clearInterval(typing);
    }
  }, [i]);

  return (
    <div className="typer" id="home">
      <h1 className="typer-text">{text}</h1>
    </div>
  );
};

export default Home;
