import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import MediaLinks from './MediaLinks';

function Location() {
  return (
    <>
      <section className='location-section'>
        <div className='container'>
          <h2>Find me on</h2>
          <span className='location-span'>Feel free to contact me</span>
        <MediaLinks />
      
        </div>
      </section>
    </>
  );
}

export default Location;
