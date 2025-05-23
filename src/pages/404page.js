import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import previous from '../assets/previous.png';
import next from '../assets/next.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';

const t = {
  en: {
    work: "Work",
    about: "About",
    email: "Email us",
    heading: "Oops this page doesn’t exist!",
    text: "Return to projects",
    rights: "2025. All Rights Reserved.",
    lang: "En español",
    lorem:"Riddim Ipsum",
  },
  es: {
    work: "Trabajo",
    about: "Acerca de",
    email: "Contáctanos",
    heading: "¡Perdona! Esta página no existe.",
    text: "Volver a proyectos",
    rights: "2025. Todos los derechos reservados.",
    lang:"In english",
    lorem:"Ritmo Ipsum",
  }
}

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

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="newhome-page error-page">
       <header class="site-header ">
          <div className="nav-container fade-in fade-in-delay-1">
            <nav className="nav-left">
              <Link to={`/?lang=${language}`} className={pathname === '/' ? 'active' : ''}>{t[language].work}</Link>
              <Link to={`/about?lang=${language}`} className={pathname === '/about' ? 'active' : ''}>{t[language].about}</Link>
              <a href="mailto:hello@itsproof.co">{t[language].email}</a>
            </nav>

            <div className="logo"><Link to={`/?lang=${language}`}>PROOF</Link></div>

            <nav className="nav-right">
              <button onClick={toggleLanguage} className="lang">
                  {t[language].lang}
                </button>
            </nav>
            <button className="menu-toggle" onClick={() => setShowMobileNav(true)} aria-label="Open menu">
              <img src={menu} alt="Menu" />
            </button>
          </div>

          <nav className={`mobile-nav ${showMobileNav ? 'open' : ''}`} id="mobileNav">
            <button className="close-menu" onClick={() => setShowMobileNav(false)} aria-label="Close menu">
              <img src={close} alt="Close" />
            </button>
            <ul>
              <li><Link to={`/?lang=${language}`} onClick={() => setShowMobileNav(false)}>{t[language].work} </Link></li>
              <li><Link to={`/about?lang=${language}`} onClick={() => setShowMobileNav(false)}>{t[language].about}</Link></li>
              <li><a href="mailto:hello@itsproof.co">{t[language].email}</a></li>
              <li className="social social-first"><a href="http://instagram.com/itsproof.co" target="_blank">Instagram</a></li>
              <li className="social"> <button onClick={toggleLanguage} className="lang">
                {t[language].lang}</button></li>
            </ul>
          </nav>
        </header>

      <main className="home-content fade-in fade-in-delay-2 error-main">
        <h1 className="headline">
            {t[language].heading}
        </h1>

        <section className="error-button">
          <p className="error">
            <Link to={`/?lang=${language}`} className={pathname === '/' ? 'active' : ''}>{t[language].text}</Link>
            
          </p>
        </section>       

      
      </main>

      <footer class="site-footer">
          <div className="footer-container">
          <nav className="footer-left footer-links">
              <a href="mailto:hello@itsproof.co">{t[language].email}</a>
              <a href="http://instagram.com/itsproof.co" target="_blank">Instagram</a>
              <a href="/islandipsum" target="_blank">{t[language].lorem}</a>
            </nav>

            <div className="footer-logo"><Link to={`/?lang=${language}`}>PROOF</Link></div>

            <nav className="footer-right footer-rights">
              <p className="footer-right-nav">{t[language].rights}</p>
            </nav>
          </div>

      </footer>
    </div>
  );
}

export default PageNotFound;