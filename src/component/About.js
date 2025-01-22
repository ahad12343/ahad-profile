import React from 'react';
import { Bar } from 'react-chartjs-2';
import Footer from './Footer';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJs, faGitAlt } from '@fortawesome/free-brands-svg-icons'; // Import icons
import { faNodeJs, faGithub, faBootstrap, faWordpress } from '@fortawesome/free-brands-svg-icons';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function About() {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'I Code', 
        data: [4, 5, 6, 3, 7, 5], 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
        tension: 0.4, 
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Days I Code (Monthly)', // Title of the chart
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    animation: {
      duration: 2000, // Set duration for animation (in milliseconds)
      easing: 'easeInOutQuart', // Set animation easing (smooth animation)
    },
  };

  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Git", icon: faGitAlt },
  ];

  const tools = [
    { name: "Node.js", icon: faNodeJs },
    { name: "GitHub", icon: faGithub },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "WordPress", icon: faWordpress },
  ];

  return (
    <>
    <section className="skill-section">
      <div className="container">
        <div className="About-detail">
          <div className="about-left">
            <h2>Know Who I Am</h2>
            <p className="about-paragraph">
              Hello, I'm <span className="highlight">Ahad</span>, a passionate <span className="highlight">Frontend Developer</span> from <span className="highlight">Pakistan</span>.
            </p>
            <p className="about-paragraph">
              I hold a <span className="highlight">Bachelor's degree</span> in Computer Science from <span className="highlight">Iqra University</span>.
            </p>
            <p className="about-paragraph">
              I specialize in building <span className="highlight">responsive websites</span> using <span className="highlight">React</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">CSS</span>.
            </p>
            <p className="about-paragraph">
              My goal is to create <span className="highlight">beautiful</span> and <span className="highlight">user-friendly</span> web applications.
            </p>
            <p className="about-paragraph">
              I have experience turning design concepts into <span className="highlight">functional websites</span> with clean, maintainable code.
            </p>
            <p className="about-paragraph">
              Always eager to take on new challenges and collaborate to build innovative solutions.
            </p>
          </div>
          <div className="about-right">
            <img src="./about-thumbnail-0.png" alt="Profile" className="profile-image" />
          </div>
        </div>

        <div className="professional-skill">
          <h3>Professional Skillset</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">
                  <FontAwesomeIcon icon={skill.icon} size="2x" />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="tools">
          <h4>Tools I Use</h4>
          <div className="tools-container">
            {tools.map((tool, index) => (
              <div className="tool-card" key={index}>
                <div className="tool-icon">
                  <FontAwesomeIcon icon={tool.icon} size="2x" />
                </div>
                <div className="tool-name">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="dayscode">
          <h3>Days I Code </h3>
          <Bar data={data} options={options} />
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default About;
