import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';  // Social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Restaurant Information */}
        <div className="footer-column">
          <h4>La Pizza Ristorante</h4>
          <p>123 Pizza Street, Lisbon, Portugal</p>
          <p>Email: contact@lapizzaristorante.com</p>
          <p>Phone: +351 123 456 789</p>
        </div>

        {/* Column 2: Opening Hours */}
        <div className="footer-column">
          <h4>Opening Hours</h4>
          <p>Monday - Friday: 11am - 10pm</p>
          <p>Saturday - Sunday: 12pm - 11pm</p>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/">Book a Table</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Signup */}
        <div className="footer-column">
          <h4>Subscribe to Our Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright & Reservation Button */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} La Pizza Ristorante Italiano. All rights reserved.</p>
          <Link to="/" className="footer-reservation-btn">Book a Table</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
