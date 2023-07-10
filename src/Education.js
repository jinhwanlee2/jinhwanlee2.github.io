import beckman from './beckman.png'
import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test  
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="Logo-container">
            <a>
            <img src={beckman} className="Beckman-logo" alt="beckman" />
            </a>
        </div>
      </div>
    );
  }
  
  export default App;
  