import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone } from 'lucide-react';
import "./Footer.css";

function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">StayNest</h2>
            <p className="footer-tagline">Stay Where Dreams Meet Reality</p>
            <div className="footer-social">
              <Link to="https://facebook.com" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link to="https://instagram.com" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link
                to="https://wa.me/?text=Order%20delicious%20food%20from%20FoodExpress!"
                className="social-link"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </Link>
              <Link to="https://youtube.com" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Company</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-links-title">Services</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/menu-item">Menu</Link>
                </li>
                <li>
                  <Link to="/room-details">Rooms</Link>
                </li>
                
              </ul>
            </div>

          </div>

          <div className="footer-newsletter">
            <h3 className="footer-newsletter-title">Get exclusive offers</h3>
            <p className="footer-newsletter-text">
            Sign up and unlock special deals just for you.            </p>
            <form className="footer-newsletter-form">
              <input type="email" placeholder="Your email address" className="footer-newsletter-input" required />
              <button type="submit" className="footer-newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="footer-copyright">&copy; {currentYear} FoodExpress. All rights reserved.</p>
            <div className="footer-legal-links">
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
