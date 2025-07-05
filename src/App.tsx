import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./components/About/About";
import { Pre } from "./components/Pre";
import { ResumeNew } from "./components/Resume/ResumeNew";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./components/Home/Home";

const App: React.FC = () => {
  const [load, updateLoad] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
