import React from 'react';
import Footer from './Footer';
function Portofolio() {
  const resumeURL = "/abdulahad-cv.pdf";
  return (
    <>
      <section className="portofolio-section">
        <div className="resume-container">
          <div className="pdf-viewer">
            <h3>View My Resume</h3>
            <iframe
              src={resumeURL}
              width="100%"
              height="600px"
              title="Resume"
              style={{ border: 'none' }}
            >
              Sorry, your browser does not support inline PDF viewing. You can
              <a href={resumeURL} target="_blank" rel="noopener noreferrer"> download the PDF</a>.
            </iframe>
          </div>
          <a href={resumeURL} download="My_Resume.pdf">
            <button className="download-btn">Download Resume</button>
          </a>
        </div>
      </section>
      <Footer />
    </>
  
  );
}

export default Portofolio;
