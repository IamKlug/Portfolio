import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import "./App.css";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
      const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const mouseX = clientX - window.innerWidth / 2;
          const mouseY = clientY - window.innerHeight / 2;
          setMousePosition({ x: mouseX, y: mouseY });
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);

  const transform = {
      transform: `translate(${mousePosition.x * -0.025}px, ${mousePosition.y * -0.015}px)`
  };

  return (
    <>
      <div className="overlay">
        <div className="container">
          <div className="img-container">
            <img src="Image-Men-3.jpg" alt="logo" style={transform} />
          </div>
          <div className="text-container">
            <h1>John Doe</h1>
            <h2>Senior Software Engineer</h2>
            <p>
              I’m a software engineer specialised in frontend and backend
              development for complex scalable web apps. I write about software
              development on my blog. Want to know how I may help your project?
              Check out my project portfolio and online resume.
            </p>
            <div className="link-container">
              <Link className="link">View Portfolio</Link>
              <Link className="link">View Resume</Link>
             </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
