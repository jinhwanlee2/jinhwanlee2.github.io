
import github from './github.png'
import TypeWriterEffect from 'react-typewriter-effect';
import './App.css';

function App() {

    return (
      <div className="App">
        <header className="App-header">
          <p
            className="Name slideUptoBot animate--fast"
          >
            Hello There! I'm Jin Lee
          </p>
          <a
            className="About-me slideUptoBot animate"
          >
            I'm a passionate
          </a>
         
            <TypeWriterEffect
            textStyle={{
              color: 'rgb(131, 37, 150)',
              fontWeight: 1000,
              fontSize: '1.5em',
            }}
            startDelay={2000}
            cursorColor = "#3F3D56"
            multiText={[
              'Scholar',
              'Web Developer',
              'Food Fanatic',
              'Coder'
            ]}
            multiTextDelay={2000}
            typeSpeed={100}
            multiTextLoop
            />
         
          <p
            className="Background slideUptoBot animate--slow"
          >
            I am a recent graduate from UC Santa Cruz. I have experience in Full-Stack Web Development, and wish to further hone and develop my skills in this department. I am also open-minded and interested in other fields such as Data Science, 
            Machine Learning, and Software Development. 
            
          </p>
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
  