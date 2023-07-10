import beckman from './beckman.png'
import ucsc from './ucsc.png'
import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
            <p>
                Education
            </p>
            <div className = "Logo-container">
                <div className = "School">
                    <img src={beckman} className="Beckman-logo" alt="beckman" />
                    <p className="School-name">
                        Beckman High School
                    </p>
                    <p className="Degree">
                        High School Diploma
                    </p>
                    <p className="Years-attended">
                        Years Attended: 2016-2019
                    </p>
                </div>
                
                <div className = "School">
                    <img src={ucsc} className="UCSC-logo" alt="ucsc" />
                    <p className="School-name">
                        University of California Santa Cruz
                    </p>
                    <p className="Degree">
                        Bachelors of Science in Computer Science
                    </p>
                    <p className="Years-attended">
                        Years Attended: 2022-2023
                    </p>
                </div>
            </div>


   

        </header>
      </div>
    );
  }
  
  export default App;
  