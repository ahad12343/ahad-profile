// Skillcard.js
import React from 'react';

function Skillcard({ title, description, image }) {
  return (
    <div className="skill-card">
      <img src={image} alt={title} />
      <div className="card-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Skillcard;
