import './App.css';
import pdf from './resume.PNG';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="Resume-title slideUptoBot animate--fast">
            Resume
          </p>
          <a href="https://drive.google.com/uc?export=download&id=1dwG4uYWXbUqm6HsG4U8tXJGwJUIknrGv" download="resume.pdf" >
          <button className="download-button">
            DOWNLOAD
          </button>
          </a>
            <a className="pdf slideBottoUp animate">
                <img src={pdf}></img>
            </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React! 
          </a>
        </header>
      </div>
    );
  }
  
  export default App;
  