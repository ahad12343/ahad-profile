import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faMicrosoft, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com'; // Import EmailJS
import Footer from './Footer';
import MediaLinks from './MediaLinks';

function Clients() {
  const clients = [
    { name: 'Facebook', logo: faFacebook },
    { name: 'Microsoft', logo: faMicrosoft },
    { name: 'Fiverr', logo: faGithub },  
    { name: 'Watermark', logo: faGithub }, 
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    // Make sure to replace the following values with your actual values
    emailjs.send('service_bv61nzv', 'template_jvtsbre', formData, 'VH5TjTTHIl3QzeA-Y')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Oops, something went wrong. Please try again later.');
      });
  };

  return (
    <>
      <section className="clients-section">
        <h2>Our Clients</h2>
        <div className="container">
          {/* Client logos section */}
          <div className="clients-logos">
            {clients.map((client, index) => (
              <div className="client-card" key={index}>
                <FontAwesomeIcon icon={client.logo} size="4x" className="client-logo" />
                <p>{client.name}</p>
              </div>
            ))}
          </div>
          <h3>Contact Us</h3>
          <div className='form-details'>
            <div className='form-left'>
              <p>Fill out the form below to get in touch with us. We're happy to assist you!</p>
              <MediaLinks />
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Your message"
                  />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Clients;
