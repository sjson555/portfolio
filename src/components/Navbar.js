import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
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

export default Navbar;
