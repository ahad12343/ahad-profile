import React from 'react';

function Introduce() {
  return (
    <>
      <section className="intro-section">
        <div className="container">
          <h2>Let me <span className="intro-span">Introduce</span> myself</h2>

          <div className="intro-details">
            <div className="intro-right">
            <p>
    Hi, I'm <span className="highlight">Ahad</span>, a passionate <span className="highlight">Front-End Developer</span> with expertise in building <span className="highlight">responsive</span> and <span className="highlight">user-friendly</span> websites. 
    I specialize in modern web technologies like <span className="highlight">React.js</span>, <span className="highlight">JavaScript</span>, and CSS frameworks such as <span className="highlight">Bootstrap</span> and <span className="highlight">Tailwind CSS</span>. 
    With a keen eye for design, I create <span className="highlight">seamless user experiences</span> that help businesses thrive online. 
    Let's collaborate to bring your <span className="highlight">ideas to life</span>!
</p>

            </div>
            <div className="intro-left">
            <img src="./er-thumbn-1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduce;
