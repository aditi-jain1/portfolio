import React, { useState } from 'react';
import MeshGradientBackground from './MeshGradientBackground';
import './App.css';

function App() {
  const [showAllExperience, setShowAllExperience] = useState(false);

  const toggleExperience = () => {
    setShowAllExperience(!showAllExperience);
  };

  return (
    <div className="app-container">
      <MeshGradientBackground />
      <div className="content-container">
        <header className="header">
          <div className="header-main">
            <div className="header-text">
              <div className="code-intro">
                <span className="code-keyword">const</span> <span className="code-variable">user</span> = <span className="code-string">"Hello, World! I'm"</span>;
              </div>
              <h1 className="name-title">Aditi Jain</h1>
              <p className="subtitle">// EECS @ University of California, Berkeley</p>
              <div className="emoji-line">
                <span>👩‍💻</span>
                <span>🤖</span>
                <span>🔬</span>
                <span>🎨</span>
                <span>🚀</span>
              </div>
              <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:aditijain@berkeley.edu">
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
            </div>
          </div>
          <div className="nav-buttons">
            <button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
              <span className="prompt">$</span> cd /experience
            </button>
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              <span className="prompt">$</span> cd /projects
            </button>
            <button onClick={() => document.getElementById('coursework').scrollIntoView({ behavior: 'smooth' })}>
              <span className="prompt">$</span> cd /coursework
            </button>
            <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
              <span className="prompt">$</span> cat skills.txt
            </button>
            <button onClick={() => document.getElementById('interests').scrollIntoView({ behavior: 'smooth' })}>
              <span className="prompt">$</span> cd /interests
            </button>
          </div>
        </header>

        <section id="experience" className="section">
          <h2>ls -la experience/</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>ML Researcher</h3>
                  <span className="timeline-date">April 2025 - Present</span>
                </div>
                <p className="company">Berkeley AI Research (BAIR)</p>
                <ul>
                  <li>Developing a Lagrangian-style, cutting-edge transformer model with Pytorch for hand action video captioning trained on 3D motion fingerprints with trajectory-aware temporal modeling</li>
                </ul>
                <div className="skill-flags">
                  <span className="skill-flag purple">PyTorch</span>
                  <span className="skill-flag rose">Transformer</span>
                  <span className="skill-flag amber">Deep Learning</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>ML Intern</h3>
                  <span className="timeline-date">Jan 2025 - May 2025</span>
                </div>
                <p className="company">Merck & Co.</p>
                <ul>
                  <li>Developed hybrid 2D/3D activity models using Directed Message-Passing Neural Networks (D-MPNNs) to predict IC50 potency scores for EGFR, a key cancer target</li>
                  <li>Integrated biophysical data as features, including 3D conformations and protein-ligand interactions, to enhance model performance and improve drug discovery approaches</li>
                </ul>
                <div className="skill-flags">
                  <span className="skill-flag indigo">D-MPNN</span>
                  <span className="skill-flag fuchsia">ML</span>
                  <span className="skill-flag purple">Drug Discovery</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineering Intern</h3>
                  <span className="timeline-date">Aug 2024 - Dec 2024</span>
                </div>
                <p className="company">Viola</p>
                <ul>
                  <li>Used open source datasets and python to identify crime hotspots and develop a algorithm that produces a safety score based upon crime, population density, lighting, and access to emergency facilities for any given coordinate</li>
                  <li>Designed and programmed a heuristic-based graph search algorithm to identify several "safe" routes between any given start and end coordinates</li>
                  <li>Used React and Flask to develop a mock frontend application with a smart maps feature, providing users with 30% safer routes compared to Google Maps</li>
                </ul>
                <div className="skill-flags">
                  <span className="skill-flag emerald">Python</span>
                  <span className="skill-flag amber">React</span>
                  <span className="skill-flag purple">Flask</span>
                  <span className="skill-flag rose">Algorithms</span>
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
                      <h3>ML/AI Intern</h3>
                      <span className="timeline-date">Jan 2024 - Jan 2025</span>
                    </div>
                    <p className="company">Space Sciences Laboratory, Berkeley</p>
                    <ul>
                      <li>Developed generative, deep learning neural networks to approximate imaging response of NASA's COSI telescope</li>
                      <li>Improved data analysis pipeline to reconstruct gamma ray pattern residues using Python and Tensorflow</li>
                      <li>Implemented Richardson Lucy algorithm to retrieve photon scatter point sources, resulting in 10% increase in source detection accuracy</li>
                    </ul>
                    <div className="skill-flags">
                      <span className="skill-flag indigo">Python</span>
                      <span className="skill-flag fuchsia">TensorFlow</span>
                      <span className="skill-flag purple">Deep Learning</span>
                      <span className="skill-flag rose">NASA</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>Engineer</h3>
                      <span className="timeline-date">Aug 2023 - Sep 2024</span>
                    </div>
                    <p className="company">Space Technologies at California</p>
                    <ul>
                      <li>Collaborated with Berkeley students to design, build, program, and test the Berkeley Engineered AI Rover (BEAR)</li>
                      <li>Programmed computer vision machine learning models for an autonomous rover to survey environment, identify destinations, and perform optimal obstacle-avoiding maneuvers</li>
                      <li>Developed a proportional-integral-derivative (PID) control system using C++, Python, Arduino, ROS, and Raspberry Pi platforms</li>
                    </ul>
                    <div className="skill-flags">
                      <span className="skill-flag emerald">C++</span>
                      <span className="skill-flag amber">Python</span>
                      <span className="skill-flag purple">ROS</span>
                      <span className="skill-flag rose">Computer Vision</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>Engineer</h3>
                      <span className="timeline-date">Aug 2021 - Aug 2022</span>
                    </div>
                    <p className="company">Irvine CubeSat Beckman Avionics</p>
                    <ul>
                      <li>Worked with students and industry mentors to program, test, & launch a satellite to study x-ray emissions from Crab Nebula Pulsar</li>
                      <li>Programmed CubeSat camera to perform image processing & star tracking to determine satellite orientation</li>
                      <li>Tested GPS/IMU circuitry, performed documentation, communicated with industry experts, and researched advances in satellite navigation</li>
                    </ul>
                    <div className="skill-flags">
                      <span className="skill-flag indigo">Embedded Systems</span>
                      <span className="skill-flag fuchsia">Image Processing</span>
                      <span className="skill-flag purple">Satellite</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>Research Intern</h3>
                      <span className="timeline-date">May 2022 - Aug 2022</span>
                    </div>
                    <p className="company">UCI Eddleman Quantum Institute</p>
                    <ul>
                      <li>Collaborated with Professor Wilson Ho to predict state switches in quantum particles using time series analysis</li>
                      <li>Developed software program to analyze gate and state decoherence of qubits (Rabi Oscillations) using a Long Short Term Memory (LSTM) neural network architecture that captured 92% of state variance</li>
                      <li>Co-authored research paper analyzing decoherence in two-level quantum systems and assessing potential for pyrrolidine molecules as qubit platforms</li>
                    </ul>
                    <div className="skill-flags">
                      <span className="skill-flag emerald">LSTM</span>
                      <span className="skill-flag amber">Quantum Computing</span>
                      <span className="skill-flag purple">Research</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>ls -la projects/</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-content">
                <h3>Encrypted File Storage and Sharing System</h3>
                <p className="date">Sep 2024 - Nov 2024</p>
                <p className="description">Designed and implemented a secure, distributed file storage and sharing system in Go, featuring user authentication, file encryption, secure sharing/revocation, and tamper detection on untrusted storage.</p>
                <p className="description">Utilized cryptographic techniques, stateless design principles, and remote databases to ensure confidentiality, integrity, and synchronization across devices in a hostile environment. Achieved 88% reduction in data vulnerability through robust cryptographic protections and integrity checks.</p>
                <div className="tech-stack">
                  <span className="skill-flag cyan">Go</span>
                  <span className="skill-flag rose">Cryptography</span>
                  <span className="skill-flag amber">Security</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Full-Stack Relational DBMS</h3>
                <p className="date">Jan 2025 - May 2025</p>
                <p className="description">Designed and implemented a relational database system from scratch in Java, supporting SQL parsing, B+ tree indexing, join algorithms, and cost-based query optimization, achieving up to 85% faster query execution.</p>
                <p className="description">Added multi-granularity locking, deadlock prevention, and serializable transaction support, validating correctness with over 100 automated tests and achieving 100% test pass rate.</p>
                <div className="tech-stack">
                  <span className="skill-flag emerald">Java</span>
                  <span className="skill-flag indigo">SQL</span>
                  <span className="skill-flag fuchsia">Database</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>CPU Architecture & Optimization</h3>
                <p className="date">Jan 2025 - May 2025</p>
                <p className="description">Programmed a feedforward neural network on AWS Trainium using Neuron SDK, optimizing for hardware-accelerated matrix units and vector lanes to achieve ~10× speedup over baseline CPU inference.</p>
                <p className="description">Optimized a RISC-style CPU pipeline by adding bypass paths and designing a two-level branch predictor, improving CPI by 106% and increasing branch accuracy by 20% on benchmark workloads.</p>
                <div className="tech-stack">
                  <span className="skill-flag purple">AWS</span>
                  <span className="skill-flag amber">Neural Networks</span>
                  <span className="skill-flag rose">Computer Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coursework" className="section">
          <h2>ls -la coursework/</h2>
          <div className="semester-container">
            <div className="semester-card">
              <h3>Fall 2023</h3>
              <ul className="course-list">
                <li>
                  <a href="https://www.eecs70.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">CS 70</span>
                    <span className="course-name">Discrete Mathematics and Probability Theory</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.eecs16a.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">EECS 16A</span>
                    <span className="course-name">Designing Information Devices and Systems I</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.eecs61c.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">CS 61C</span>
                    <span className="course-name">Great Ideas in Computer Architecture</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="semester-card">
              <h3>Spring 2024</h3>
              <ul className="course-list">
                <li>
                  <a href="https://www.eecs16b.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">EECS 16B</span>
                    <span className="course-name">Designing Information Devices and Systems II</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.eecs189.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">CS 189</span>
                    <span className="course-name">Introduction to Machine Learning</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.eecs126.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">EECS 126</span>
                    <span className="course-name">Probability and Random Processes</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="semester-card">
              <h3>Fall 2024</h3>
              <ul className="course-list">
                <li>
                  <a href="https://www.eecs127.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">EECS 127</span>
                    <span className="course-name">Optimization Models in Engineering</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.eecs149.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">EECS 149</span>
                    <span className="course-name">Introduction to Embedded Systems</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.eecs170.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">CS 170</span>
                    <span className="course-name">Efficient Algorithms and Intractable Problems</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="semester-card">
              <h3>Spring 2025</h3>
              <ul className="course-list">
                <li>
                  <a href="https://www.eecs189.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">CS 189</span>
                    <span className="course-name">Introduction to Machine Learning</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.eecs126.org/" target="_blank" rel="noopener noreferrer">
                    <span className="course-code">EECS 126</span>
                    <span className="course-name">Probability and Random Processes</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>cat skills.txt</h2>
          <div className="terminal-output">
            <div className="terminal-controls">
              <div className="terminal-control close"></div>
              <div className="terminal-control minimize"></div>
              <div className="terminal-control maximize"></div>
            </div>
            <div className="command-line">
              <span className="prompt">$</span> <span className="command">cat skills.txt</span>
            </div>
            <div className="terminal-content">
              <div className="skill-category">
                <span className="category-header">Languages:</span>
                <div className="skill-items">
                  <span className="skill-item">JavaScript</span>
                  <span className="skill-item">Python</span>
                  <span className="skill-item">Java</span>
                  <span className="skill-item">C++</span>
                  <span className="skill-item">HTML/CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <span className="category-header">Frameworks & Libraries:</span>
                <div className="skill-items">
                  <span className="skill-item">React</span>
                  <span className="skill-item">Node.js</span>
                  <span className="skill-item">Express</span>
                  <span className="skill-item">Django</span>
                  <span className="skill-item">TensorFlow</span>
                </div>
              </div>
              <div className="skill-category">
                <span className="category-header">Tools & Technologies:</span>
                <div className="skill-items">
                  <span className="skill-item">Git</span>
                  <span className="skill-item">Docker</span>
                  <span className="skill-item">AWS</span>
                  <span className="skill-item">MongoDB</span>
                  <span className="skill-item">PostgreSQL</span>
                </div>
              </div>
              <div className="skill-category">
                <span className="category-header">Development Tools:</span>
                <div className="skill-items">
                  <span className="skill-item">VS Code</span>
                  <span className="skill-item">IntelliJ</span>
                  <span className="skill-item">Jupyter</span>
                  <span className="skill-item">Postman</span>
                  <span className="skill-item">Figma</span>
                </div>
              </div>
            </div>
            <div className="command-line">
              <span className="prompt">$</span> <span className="command">_</span>
            </div>
          </div>
        </section>

        <section id="interests" className="section">
          <h2>ls -la interests/</h2>
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
