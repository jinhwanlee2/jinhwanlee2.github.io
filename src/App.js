import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from "./Home";
import Portfolio from './Portfolio';
import Education from "./Education";
import Resume from "./Resume";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="navigation-bar">
        <ul className="tab-bar">
          <li
            onClick={() => handleTabClick("home")}
            className={activeTab === "home" ? "active home" : "home"}
          >
            Home
          </li>
          <li
            onClick={() => handleTabClick("portfolio")}
            className={activeTab === "portfolio" ? "active portfolio" : "portfolio"}
          >
            Portfolio
          </li>
          <li
            onClick={() => handleTabClick("resume")}
            className={activeTab === "resume" ? "active resume" : "resume"}
          >
            Resume
          </li>
          <li
            onClick={() => handleTabClick("education")}
            className={activeTab === "education" ? "active education" : "education"}
          >
            Education
          </li>
        </ul>
        <div className= "tab-content">
          {activeTab === "home" && <Home />}
          {activeTab === "portfolio" && <Portfolio />}
          {activeTab === "resume" && <Resume />}
          {activeTab === "education" && <Education />}
        </div>
      </div>
    </div>
  );
}

export default App;
