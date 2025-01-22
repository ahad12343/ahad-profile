import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Banner() {
  const titles = ["SOFTWARE ENGINEER", "WEBSITE DEVELOPER", "FRONT-END DEVELOPER", "JUNIOR REACT DEVELOPER"];
  
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0); 
  const [typing, setTyping] = useState(true); 
  const [index, setIndex] = useState(0); 

  useEffect(() => {
    let interval;
    const current = titles[currentTitleIndex];

    if (typing) {
      interval = setInterval(() => {
        if (index < current.length) {
          setCurrentTitle((prev) => prev + current[index]);
          setIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
          setTyping(false);
        }
      }, 222);
    } else {
      interval = setInterval(() => {
        if (currentTitle.length > 0) {
          setCurrentTitle((prev) => prev.slice(0, prev.length - 1));
        } else {
          clearInterval(interval);
          setTyping(true);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setIndex(0);
        }
      }, 150);
    }

    return () => clearInterval(interval);
  }, [currentTitle, typing, currentTitleIndex, index]);

  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner-details">
          <div className="banner-left">
            <span className={`banner-span ${typing ? '' : 'stop-animation'}`}>Hello, Their </span>
            <h1>
              I'm <span className="heading-span">Ahad,</span> 
            </h1>
            <span className="typing-text">{currentTitle}</span>
            <p>
              I create beautiful, responsive websites that deliver great user experiences, 
              whether for small businesses or large enterprises.
            </p>
          
            <a href=" https://www.linkedin.com/in/abdul-ahad-40b93a340"  className="hire-btn"  ><FontAwesomeIcon className="hire-icon" icon={faBagShopping} /> Hire Me</a>
            
          </div>
          <div className="banner-right">
            <img src="./banner-thumbnail-1.png" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
