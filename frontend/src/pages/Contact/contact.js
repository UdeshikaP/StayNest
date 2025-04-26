import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="intro">We'd love to hear from you! Reach out with any questions, feedback, or bookings.</p>

      <div className="contact-content">
        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your message here..."></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="map">
          <iframe
            title="hotel-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019610612538!2d-122.41941518468128!3d37.77492977975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c36cb5ab%3A0x7d8f3964c245f3a9!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1609998467120!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
