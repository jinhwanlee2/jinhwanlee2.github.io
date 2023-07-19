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
          <div className="project-video hidden">
            Slug Planner
            <YouTube videoId={videoId} />
          </div>
          <div className="project-link">
            <a
              className="App-link"
              href="https://github.com/BetrosA/academic-planner"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          </div>
        <section className="hidden">Personal Portfolio</section>
        <section className="hidden">Personal Portfolio</section>
        <section className="hidden">Personal Portfolio</section>
        <section className="hidden">Personal Portfolio</section>
        <section className="hidden">Personal Portfolio</section>
      </header>
    </div>
  );
}

export default App;
