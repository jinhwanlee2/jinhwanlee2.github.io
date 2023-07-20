import YouTube from 'react-youtube';
import './App.css';
import { useEffect } from 'react'; 

function App() {
  const videoId = '9Kp97Vv2hnc';

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((e1) => observer.observe(e1));

    return () => {
      hiddenElements.forEach((e1) => observer.unobserve(e1));
    };
  }, []); 

  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
        <p className="portfolio-title">
          Personal Portfolio
        </p>
        <div className="project-details" style={{ marginBottom: '40vh' }}>
          <div className="project-demo hidden">
            Slug Planner
            <YouTube videoId={videoId} />
            <a
              className="App-link"
              href="https://github.com/BetrosA/academic-planner"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="project-link hidden">
            <p>The Slug Planner is a user-friendly web application designed to help students efficiently plan and organize their long-term academic goals. 
              By providing a streamlined interface and powerful search and filtering tools, the Academic Planner simplifies the process of selecting courses, 
              creating a balanced curriculum, and keeping track of academic progress for a 4 or 5-year academic plan. The data is being stored in the 
              Firebase from extensive web scraping from the actual UCSC course webpage. This data is then utilized in the front end to provide the user
              the information they may want in an organized fashion.</p>
          </div>
        </div>
        <section className="hidden">
          <div className="project-details">
            <div className="project-demo">
              Blackjack Versus
              <YouTube videoId={videoId} />
              <a
                className="App-link"
                href="https://github.com/jinhwanlee2/blackjack-versus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <div className="project-link">
              <p>Blackjack Versus is a fully functional Blackjack game with both single-player and multiplayer capabilities. The game utilizes client-server 
                communication to update and synchronize game states in real-time. The multiplayer mode follows a turn-based approach, where the server waits for 
                all client actions before proceeding to the next round. The project utilizes Express and WebSocket for the communication and management of real-time
                interactions between multiple clients.</p>
            </div>
          </div>
        </section>
        <section className="hidden">Personal Portfolio</section>
        <section className="hidden">Personal Portfolio</section>
        <section className="hidden">Personal Portfolio</section>
        <section className="hidden">Personal Portfolio</section>
      </header>
    </div>
  );
}

export default App;
