import './App.css';
import pdf from './resume.png';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="Resume-title slideUptoBot animate--fast">
            Resume
          </p>
          <a href="https://drive.google.com/uc?export=download&id=1F538gVOb34Ld_way-QeBgkLWbucG9F4U" download="jin_lee_resume.pdf" >
          <button className="download-button">
            DOWNLOAD
          </button>
          </a>
            <a className="pdf slideBottoUp animate"> 
              <img src={pdf} alt="PDF" style={{ width: "50%", height: "50%" }} />
            </a>
        </header>
      </div>
    );
  }
  
  export default App;
  