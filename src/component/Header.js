import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <div className='container'>
        <Link to="/" className='logo'>
          <img src="./Ahad-logo.png" alt="Logo" />
        </Link>
        <nav className='navbar'>
          <Link to="/" className='navlinks'>Home</Link>
          <Link to="/about" className='navlinks'>About</Link>
          <Link to="/portofolio" className='navlinks'>Portofolio</Link>
          <Link to="/clients" className='navlinks'>Clients</Link>
        </nav>
        <a href="https://wa.me/923355686335" className='contact-btn' target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faPhoneAlt} /> Contact me
</a>

     

    
      </div>
    </header>
  );
}

export default Header;
