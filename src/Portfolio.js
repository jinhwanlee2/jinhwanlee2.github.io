import YouTube from 'react-youtube';
import './App.css';

function App() {
    const videoId = '9Kp97Vv2hnc';
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Personal Portfolio
          </p>
          <p className="Project-title">
            Slug Planner
          </p>
          <YouTube videoId={videoId} />
          <a
            className="App-link"
            href="https://github.com/BetrosA/academic-planner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </header>
      </div>
    );
  }
  
  export default App;
  