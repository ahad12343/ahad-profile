import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faTwitter, faYoutube, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

function MediaLinks() {
  return (
 <>
        <div className="rounded-social-buttons">
          <a className="social-button tiktok" href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a className="social-button twitter" href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="social-button youtube" href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className="social-button facebook" href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="social-button instagram" href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
     
      </>
 
  );
}

export default MediaLinks;
