import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';  // Social media icons
import { useTranslation } from 'react-i18next';  // Import the useTranslation hook

const Footer = () => {
  const { t } = useTranslation();  // Access the t function for translations

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Restaurant Information */}
        <div className="footer-column">
          <h4>{t('restaurant_name')}</h4>
          <p>{t('address')}</p>
          <p>{t('email_label')}: {t('email')}</p>
          <p>{t('phone_label')}: {t('phone')}</p>
        </div>

        {/* Column 2: Opening Hours */}
        <div className="footer-column">
          <h4>{t('opening_hours')}</h4>
          <p>{t('opening_hours_weekdays')}</p>
          <p>{t('opening_hours_weekends')}</p>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h4>{t('quick_links')}</h4>
          <ul>
            <li><Link to="/">{t('quick_links_menu')}</Link></li>
            <li><Link to="/">{t('quick_links_book_table')}</Link></li>
            <li><Link to="/">{t('quick_links_order_online')}</Link></li>
            <li><Link to="/">{t('about_us')}</Link></li>
            <li><Link to="/">{t('contact')}</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Signup */}
        <div className="footer-column">
          <h4>{t('subscribe_newsletter')}</h4>
          <form className="newsletter-form">
            <input type="email" placeholder={t('enter_email')} className="newsletter-input" />
            <button type="submit" className="newsletter-btn">{t('subscribe_button')}</button>
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
          <p>&copy; {new Date().getFullYear()} {t('restaurant_name')}. {t('copyright')}</p>
          <Link to="/" className="footer-reservation-btn">{t('book_table')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
