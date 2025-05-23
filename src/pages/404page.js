import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Header from '../components/header.js';
import Footer from '../components/footer.js';
import tData from '../components/translations.js';


import menu from '../assets/menu.png';
import close from '../assets/close.png';


const PageNotFound = () =>{

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const params = new URLSearchParams(location.search);
  const initialLang = params.get('lang') === 'es' ? 'es' : 'en';
  const [language, setLanguage] = useState(initialLang);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    navigate(`${location.pathname}?lang=${newLang}`);
  };

  const t = tData[language];

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="newhome-page error-page">
      
      <Header language={language} toggleLanguage={toggleLanguage} t={t} />


      <main className="home-content fade-in fade-in-delay-2 error-main">
        <h1 className="headline error-headline">
            {t.heading}
        </h1>

        <section className="error-button">
          <p className="error">
            <Link to={`/?lang=${language}`} className={pathname === '/' ? 'active' : ''}>{t.text}</Link>
            
          </p>
        </section>       

      
      </main>

      <Footer class="error-footer" language={language} t={t} />
      
    </div>
  );
}

export default PageNotFound;