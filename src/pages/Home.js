import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/About");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          navigate("/Project");
        }}
      >
        Project
      </button>
      <button
        onClick={() => {
          navigate("/Contact");
        }}
      >
        Contact
      </button>
    </>
  );
};

export default Home;
