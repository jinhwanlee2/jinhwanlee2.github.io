import React, { useState, useEffect } from 'react';
import github from './github.png'
import './App.css';

function App() {

    const [text, setText] = useState("Learner");

    useEffect(() => {
        const texts = ["Learner", "Scholar", "Software Engineer"];
        let currentIndex = 0;

        const intervalId = setInterval(() => {
        setText(texts[currentIndex]);
        currentIndex = (currentIndex + 1) % texts.length;
        }, 1200);

        return () => clearInterval(intervalId);
    }, []);

    return (
      <div className="App">
        <header className="App-header">
          <p
            className="Name"
          >
            Hello There! I'm Jin Lee
          </p>
          <a
            className="About-me"
          >
            I'm a passionate
          </a>
          <p>{text}</p>
          <p
            className="Background"
          >
            I am a recent graduate from UC Santa Cruz. I have moderate experience in Full-Stack Web Development, and wish to further hone and develop my skills in this department. 
            
          </p>
        </header>
        <div className="Logo-container">
            <a href="https://github.com/jinhwanlee2" target="_blank" rel="noopener noreferrer">
            <img src={github} className="App-logo" alt="github" />
            </a>
        </div>
       </div>
    );
  }
  
  export default App;
  