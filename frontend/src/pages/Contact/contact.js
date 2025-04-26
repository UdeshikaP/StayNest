import { useState } from "react";
import React from 'react';
import './contact.css';
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    try {
      const res = await axios.post("http://localhost:5003/contact/", formData); // <-- Correct URL
      console.log(res.data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // clear form after sending
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to send message.");
    }
  };
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="intro">We'd love to hear from you! Reach out with any questions, feedback, or bookings.</p>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="name"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="map">
          <iframe
            title="hotel-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126605.78838105532!2d80.271827!3d7.486308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2a4ef4c640dbd%3A0xb6195edb5f2ffe15!2sKurunegala!5e0!3m2!1sen!2slk!4v1714143980181!5m2!1sen!2slk"
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
