import beckman from './beckman.png'
import ucsc from './ucsc.png'
import github from './github.png';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
            <p className="slideUptoBot animate--fast">
                Education
            </p>
            <div className = "Logo-container">
                <div className = "School slideUptoBot animate">
                    <img src={beckman} className="Beckman-logo" alt="beckman" />
                    <p className="School-name slideUptoBot animate--slow">
                        Beckman High School
                    </p>
                    <p className="Degree slideUptoBot animate--slow1">
                        High School Diploma
                    </p>
                    <p className="Years-attended slideUptoBot animate--slow2">
                        Years Attended: 2016-2019
                    </p>
                </div>
                
                <div className = "School slideUptoBot animate">
                    <img src={ucsc} className="UCSC-logo" alt="ucsc" />
                    <p className="School-name slideUptoBot animate--slow">
                        University of California Santa Cruz
                    </p>
                    <p className="Degree slideUptoBot animate--slow1">
                        Bachelors of Science in Computer Science
                    </p>
                    <p className="Years-attended slideUptoBot animate--slow2">
                        Years Attended: 2022-2023
                    </p>
                </div>
            </div>

        </header>
        <div className="Logo-container">
            <a href="https://github.com/jinhwanlee2" target="_blank" rel="noopener noreferrer">
            <img src={github} className="Github-logo" alt="github" />
            </a>
        </div>
      </div>
    );
  }
  
  export default App;
  