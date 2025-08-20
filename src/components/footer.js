import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.png';

const Footer = ({ language, t }) => (
  <footer className="site-footer">
    <div className="footer-container">
      <nav className="footer-left footer-links">
        {/* <a href="mailto:hello@itsproof.co">{t.email}</a> */}
        <a href="http://instagram.com/itsproof.co" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="/islandipsum" target="_blank" rel="noopener noreferrer">{t.lorem}</a>
        <button onClick={toggleLanguage} className="lang">{t.lang}</button>
      </nav>
      {/* <div className="footer-logo"><Link to={`/?lang=${language}`}>PROOF</Link></div> */}
      <nav className="footer-right footer-rights">
        <p className="footer-right-nav">{t.rights}</p>
      </nav>
    </div>
  </footer>
);

export default Footer;