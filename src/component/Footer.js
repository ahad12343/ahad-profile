import React from 'react';
import MediaLinks from './MediaLinks';


function Footer() {
  return (
    <>
    <footer className='spectacledcoder-footer'>
    <div className="spectacledcoder-footer">
      <div className="spectacledcoder-footer-top"></div>
      <div className="spectacledcoder-footer-content">
        <div className="spectacledcoder-footer-section">
          <h1 className="spectacledcoder-footer-heading">FRONTENDDEVELOPER <span className='footer-span'>AHAD</span> </h1>
        </div>
        <div className="spectacledcoder-footer-section">
          <ul className="d-footer-ul">
            <li className="d-footer-li-h"><b>Links</b></li>
            <li className="d-footer-li">HOME</li>
            <li className="d-footer-li">ABOUT</li>
            <li className="d-footer-li">PORTOFOLIO</li>
            <li className="d-footer-li">ClENTS</li>
        
          </ul>
        </div>
        <div className="spectacledcoder-footer-section">
          <ul className="d-footer-ul">
            <li className="d-footer-li-h"><b>Blog</b></li>
            <li className="d-footer-li">UI / UX</li>
            <li className="d-footer-li">HTML/CSS</li>
            <li className="d-footer-li">BOOTSRAP</li>
          </ul>
        </div>
        <div className="spectacledcoder-footer-section">
         <MediaLinks />
       
        </div>
      </div>
      <div className="spectacledcoder-footer-bottom">
       
        <div className="spectacledcoder-footer-bottom-sec">
          <p>Designed & Created by AbdulAhad</p>
        </div>
        <div className="spectacledcoder-footer-bottom-sec">
          <p>&copy; 2025 AbdulAhad</p>
        </div>
      </div>
    </div>
    </footer>
    </>
  );
}

export default Footer;
