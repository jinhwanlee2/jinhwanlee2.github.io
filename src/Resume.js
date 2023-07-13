import './App.css';
import pdf from './resume.pdf';
import { Document, Page,} from 'react-pdf';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="Resume-title">
            Resume
          </p>
          
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
  