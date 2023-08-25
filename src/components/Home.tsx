import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const finalText = "안녕하세요 손성준입니다.";
  const [text, setText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  const startTyping = () => {
    setI(0);
    setText("");
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (i < finalText.length) {
        setText((prevText) => prevText + finalText[i]);
        setI((prevI) => prevI + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(startTyping, 3500);
      }
    }, 178);

    return () => {
      clearInterval(typingInterval);
    };
  }, [i]);

  useEffect(() => {
    startTyping();
  }, []);

  return (
    <div className="typer" id="home">
      <h1 className="typer-text">{text}</h1>
    </div>
  );
};

export default Home;
