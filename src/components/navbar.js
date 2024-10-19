import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpeg';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLang);
      };
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="La Pizza Ristorante" className="logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
      <li><Link to="/">{t('menu')}</Link></li>
        <li><Link to="/">{t('about')}</Link></li>
        <li><Link to="/">{t('reservation')}</Link></li>
        <li><Link to="/">{t('team')}</Link></li>
        <li><Link to="/">{t('cart')}</Link></li>
      </ul>

      {/* Call to Action Button */}
      <div className="nav-cta">
        <Link onClick={toggleLanguage} to="/" className="cta-btn"> {i18n.language === 'en' ? t('translateToPT') : t('translateToEN')}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
