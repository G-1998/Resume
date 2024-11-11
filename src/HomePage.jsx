import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Your Name</h1>
        <p>Web Developer | Software Engineer | Tech Enthusiast</p>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Hello! I'm a software developer with a passion for building functional
          and user-friendly applications. I have experience in various
          technologies, including React, Node.js, Python, and more.
        </p>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <ul>
          <li><strong>RoomRent:</strong> A platform to find room quarters by month/year term.</li>
          <li><strong>BookHub:</strong> A book exchange platform connecting students.</li>
          <li><strong>OnTimeRoutes:</strong> Service for checking bus timings.</li>
          <li><strong>InFindWay:</strong> Indoor navigation system for mobile devices.</li>
        </ul>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Flask</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>Email: yourname@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub</a></p>
      </section>
    </div>
  );
};

export default HomePage;
