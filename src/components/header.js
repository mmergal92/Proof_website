import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import menu from '../assets/menu.png';
import close from '../assets/close.png';

const Header = ({ language, toggleLanguage, t }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container fade-in fade-in-delay-1">
        <nav className="nav-left">
          <Link to={`/?lang=${language}`} className={pathname === '/' ? 'active' : ''}>{t.work}</Link>
          <Link to={`/about?lang=${language}`} className={pathname === '/about' ? 'active' : ''}>{t.about}</Link>
          <a href="mailto:hello@itsproof.co">{t.email}</a>
        </nav>

        <div className="logo"><Link to={`/?lang=${language}`}>PROOF</Link></div>

        <nav className="nav-right">
          <button onClick={toggleLanguage} className="lang">{t.lang}</button>
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
          <li><a href="mailto:hello@itsproof.co">{t.email}</a></li>
          <li className="social social-first"><a href="http://instagram.com/itsproof.co" target="_blank">Instagram</a></li>
          <li className="social"><button onClick={toggleLanguage} className="lang">{t.lang}</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;