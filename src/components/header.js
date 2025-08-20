import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import menu from '../assets/menu.webp';
import close from '../assets/close.png';
import instagram from '../assets/instagram.png';

const Header = ({ language, toggleLanguage, t }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container fade-in fade-in-delay-1">
        <nav className="nav-left">
          <div><Link to={`/?lang=${language}`}>{t.proof}</Link></div>
        </nav>
        <nav className="nav-right">
          <Link to={`/?lang=${language}`} className={pathname === '/' ? 'active' : ''}>{t.work}</Link>
          <Link to={`/about?lang=${language}`} className={pathname === '/about' ? 'active' : ''}>{t.about}</Link>
          <button onClick={toggleLanguage} className="lang">{t.lang}</button>
          <a href="mailto:hello@itsproof.co" className="email-button">{t.email}</a>
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
          <li><Link to={`/?lang=${language}`} onClick={() => setShowMobileNav(false)}>{t.work}</Link></li>
          <li><Link to={`/about?lang=${language}`} onClick={() => setShowMobileNav(false)}>{t.about}</Link></li>
          <li><button onClick={toggleLanguage} className="lang">{t.lang}</button></li>    
        </ul>
            <a href="mailto:hello@itsproof.co" className="email-button">{t.email}</a>
          <div className = "mobile-nav-flex">
          <a href="/islandipsum" target="_blank" rel="noopener noreferrer">{t.lorem}</a>
          <a href="http://instagram.com/itsproof.co" target="_blank" rel="noopener noreferrer">
            Instagram</a>
            </div>
      </nav>
    </header>
  );
};

export default Header;