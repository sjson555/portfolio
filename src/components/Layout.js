import { Routes, Route } from "react-router-dom";
/* CSS */
/* Components */
/* Pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from "../pages/Project";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default Layout;
