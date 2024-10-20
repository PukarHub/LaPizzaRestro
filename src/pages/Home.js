import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 


const Home = () => {
    const { t } = useTranslation(); 

  return (
    <div className="home">
      <header className="hero">
      <h1>{t('welcome_message')}</h1>  
        <p>{t('experience_message')}</p>
        <div className="cta-buttons">
          <Link to="/" className="btn">{t('view_menu')}</Link>
          <Link to="/" className="btn">{t('reserve_table')}</Link>
          <Link to="/" className="btn">{t('order_online')}</Link>
          </div>
      </header>
    </div>
  );
};

export default Home;
