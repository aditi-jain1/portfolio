import React, { useState, useEffect } from 'react';
import MeshGradientBackground from './MeshGradientBackground';
import './App.css';

function App() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleExperience = () => {
    setShowAllExperience(!showAllExperience);
  };

  return (
    <div className="app-container">
      <MeshGradientBackground />
      <button className="theme-toggle" onClick={toggleTheme}>
        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>
      <div className="content-container">
        <header className="header">
          <div className="header-main">
            <div className="header-text">
              <div className="code-intro">
                <span className="code-string">Hello, World! I'm</span>
              </div>
              <h1 className="name-title">Aditi Jain</h1>
              <p className="subtitle">Computer Science @ University of Michigan</p>
              <div className="emoji-line">
                <span>👩‍💻</span>
                <span>🎨</span>
                <span>📚</span>
                <span>🎵</span>
                <span>✈️</span>
              </div>
              <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:your.email@example.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="header-image">
              <div className="image-placeholder">
                {/* Add your image here */}
                <div className="image-overlay">
                  <span>Your Photo</span>
                </div>
              </div>
              <div className="nav-buttons">
                <button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
                  💼 Experience
                </button>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                  💻 Projects
                </button>
                <button onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}>
                  🎓 Education
                </button>
                <button onClick={() => document.getElementById('interests').scrollIntoView({ behavior: 'smooth' })}>
                  ❤️ Interests
                </button>
              </div>
            </div>
          </div>
        </header>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="timeline-date">Jan 2023 - Present</span>
                </div>
                <p className="company">Tech Company A</p>
                <ul>
                  <li>Led development of a full-stack web application using React and Node.js</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                </ul>
                <div className="skill-flags">
                  <span className="skill-flag purple">React</span>
                  <span className="skill-flag rose">Node.js</span>
                  <span className="skill-flag amber">TypeScript</span>
                  <span className="skill-flag emerald">AWS</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Frontend Developer</h3>
                  <span className="timeline-date">Jun 2022 - Dec 2022</span>
                </div>
                <p className="company">Tech Company B</p>
                <ul>
                  <li>Developed responsive user interfaces using modern JavaScript frameworks</li>
                  <li>Optimized application performance resulting in 30% faster load times</li>
                </ul>
                <div className="skill-flags">
                  <span className="skill-flag indigo">JavaScript</span>
                  <span className="skill-flag fuchsia">Vue.js</span>
                  <span className="skill-flag purple">CSS3</span>
                  <span className="skill-flag rose">Webpack</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Backend Developer</h3>
                  <span className="timeline-date">Jan 2022 - May 2022</span>
                </div>
                <p className="company">Tech Company C</p>
                <ul>
                  <li>Designed and implemented RESTful APIs using Python and Django</li>
                  <li>Managed database optimization and scaling strategies</li>
                </ul>
                <div className="skill-flags">
                  <span className="skill-flag emerald">Python</span>
                  <span className="skill-flag amber">Django</span>
                  <span className="skill-flag purple">PostgreSQL</span>
                  <span className="skill-flag rose">Docker</span>
                </div>
              </div>
            </div>

            <div className="timeline-expand">
              <button 
                className="expand-button" 
                onClick={toggleExperience}
              >
                {showAllExperience ? 'Show Less' : 'View More Experience'}
                <span className="expand-icon">{showAllExperience ? '↑' : '↓'}</span>
              </button>
            </div>

            {showAllExperience && (
              <>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>Software Engineering Intern</h3>
                      <span className="timeline-date">Jun 2021 - Aug 2021</span>
                    </div>
                    <p className="company">Tech Company D</p>
                    <ul>
                      <li>Contributed to the development of a mobile application using React Native</li>
                      <li>Implemented automated testing reducing bug reports by 25%</li>
                    </ul>
                    <div className="skill-flags">
                      <span className="skill-flag indigo">React Native</span>
                      <span className="skill-flag fuchsia">Redux</span>
                      <span className="skill-flag purple">Jest</span>
                      <span className="skill-flag rose">Firebase</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>Research Assistant</h3>
                      <span className="timeline-date">Sep 2020 - May 2021</span>
                    </div>
                    <p className="company">University Research Lab</p>
                    <ul>
                      <li>Developed machine learning models for data analysis</li>
                      <li>Published research findings in academic journals</li>
                    </ul>
                    <div className="skill-flags">
                      <span className="skill-flag emerald">Python</span>
                      <span className="skill-flag amber">TensorFlow</span>
                      <span className="skill-flag purple">Data Analysis</span>
                      <span className="skill-flag rose">Research</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-content">
                <h3>Project Name</h3>
                <p className="description">Brief description of the project and its impact</p>
                <div className="tech-stack">
                  <span className="skill-flag cyan">React</span>
                  <span className="skill-flag rose">Node.js</span>
                  <span className="skill-flag amber">MongoDB</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Another Project</h3>
                <p className="description">Brief description of the project and its impact</p>
                <div className="tech-stack">
                  <span className="skill-flag emerald">Python</span>
                  <span className="skill-flag indigo">TensorFlow</span>
                  <span className="skill-flag fuchsia">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education & Classes</h2>
          <div className="semester-container">
            <div className="semester-card">
              <h3>Fall 2023</h3>
              <ul className="course-list">
                <a href="https://www.eecs.umich.edu/courses/eecs-280" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 280</span>
                  <span className="course-name">Programming and Intro Data Structures</span>
                </a>
                <a href="https://www.eecs.umich.edu/courses/eecs-203" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 203</span>
                  <span className="course-name">Discrete Mathematics</span>
                </a>
                <a href="https://www.eecs.umich.edu/courses/eecs-201" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 201</span>
                  <span className="course-name">Computer Science Pragmatics</span>
                </a>
              </ul>
            </div>

            <div className="semester-card">
              <h3>Spring 2023</h3>
              <ul className="course-list">
                <a href="https://www.eecs.umich.edu/courses/eecs-281" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 281</span>
                  <span className="course-name">Data Structures and Algorithms</span>
                </a>
                <a href="https://www.eecs.umich.edu/courses/eecs-370" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 370</span>
                  <span className="course-name">Introduction to Computer Organization</span>
                </a>
                <a href="https://www.eecs.umich.edu/courses/eecs-376" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 376</span>
                  <span className="course-name">Foundations of Computer Science</span>
                </a>
              </ul>
            </div>

            <div className="semester-card">
              <h3>Winter 2023</h3>
              <ul className="course-list">
                <a href="https://www.eecs.umich.edu/courses/eecs-183" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 183</span>
                  <span className="course-name">Elementary Programming Concepts</span>
                </a>
                <a href="https://www.eecs.umich.edu/courses/eecs-203" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 203</span>
                  <span className="course-name">Discrete Mathematics</span>
                </a>
                <a href="https://www.eecs.umich.edu/courses/eecs-201" target="_blank" rel="noopener noreferrer" className="course-item">
                  <span className="course-code">EECS 201</span>
                  <span className="course-name">Computer Science Pragmatics</span>
                </a>
              </ul>
            </div>
          </div>
        </section>

        <section id="interests" className="section">
          <h2>Interests</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-content">
                <h3>Interest 1</h3>
                <p>Description of interest and why it matters to you</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Interest 2</h3>
                <p>Description of interest and why it matters to you</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
