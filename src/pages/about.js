import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const t = {
  en: {
    work: "Work",
    about: "About",
    email: "Email us",
    rights: "2025. All Rights Reserved.",
    lang: "En español",
    lorem:"Riddim Ipsum",
    aboutHeader: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;Proof is the design and technology practice of{" "}
        <a href="https://segacyroberts.com/" target="_blank" className="underline">Segacy</a> and{" "}
        <a href="https://mariamergal.dev/" target="_blank" className="underline">Maria</a>, two childhood friends from NYC.
      </>
    ),
    aboutText: (
      <>
        Thanks for stopping by! In our independent careers, we’ve had the pleasure of working for companies like{" "}
        <a href="http://www.spotify.com/" target="_blank">Spotify</a>,{" "}
        <a href="https://www.bookofthemonth.com/" target="_blank">Book of the Month</a>, and{" "}
        <a href="https://academiccme.com/" target="_blank">AcademicCME</a>. We love building things for thoughtful and imaginative people looking to make an impact.
        <br />&nbsp;
        <br />
        When we’re not at our desks, we love traveling, reading, and hanging out without purpose. We’d love to work together! Get in touch by emailing us at{" "}
        <a href="mailto:hello@itsproof.co">hello@itsproof.co</a>.
      </>
    ),
    servicesHeading: "Services",
    capabilitiesHeading: "Capabilities",
    services: ["Strategy", "Web Design & Development", "App Design & Development", "Branding", "Digital Design", "Copywriting & Editing"],
    capabilities: ["Informational websites", "Editorial platforms", "Portfolios & microsites", "Pitch & tone decks", "Online shops", "Third-party integrations"],
    sundayNote: (
      <em>
        As a part of the Proof family, we’ve created{" "}
        <a href="https://sundaylighthouse.itsproof.co/" target="_blank" className="underline">Sunday Lighthouse</a>, dedicated to projects in the wellness space.
      </em>
    )
  },
  es: {
    work: "Trabajo",
    about: "Acerca de",
    email: "Contáctanos",
    rights: "2025. Todos los derechos reservados.",
    lang:"In english",
    lorem:"Ritmo Ipsum",
    aboutHeader: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;Proof es la práctica de diseño y tecnología de{" "}
        <a href="https://segacyroberts.com/" target="_blank" className="underline">Segacy</a> y{" "}
        <a href="https://mariamergal.dev/" target="_blank" className="underline">Maria</a>, dos amigas de la infancia de Nueva York.
      </>
    ),
    aboutText: (
      <>
        ¡Gracias por visitarnos! En nuestras carreras independientes, hemos tenido el placer de trabajar para compañías como{" "}
        <a href="http://www.spotify.com/" target="_blank">Spotify</a>,{" "}
        <a href="https://www.bookofthemonth.com/" target="_blank">Book of the Month</a> y{" "}
        <a href="https://academiccme.com/" target="_blank">AcademicCME</a>. Nos encanta crear para personas reflexivas e imaginativas que buscan generar impacto.
        <br />&nbsp;
        <br />
        Cuando no estamos en nuestros escritorios, nos encanta viajar, leer y pasar el tiempo sin un propósito específico. ¡Nos encantaría trabajar contigo! Escríbenos a{" "}
        <a href="mailto:hello@itsproof.co">hello@itsproof.co</a>.
      </>
    ),
    servicesHeading: "Servicios",
    capabilitiesHeading: "Capacidades",
    services: ["Estrategia", "Diseño y desarrollo web", "Diseño y desarrollo de apps", "Branding", "Diseño digital", "Redacción y edición"],
    capabilities: ["Sitios web informativos", "Plataformas editoriales", "Portafolios y micrositios", "Presentaciones y tono", "Tiendas en línea", "Integraciones con terceros"],
    sundayNote: (
      <em>
        Como parte de la familia Proof, hemos creado{" "}
        <a href="https://sundaylighthouse.itsproof.co/" target="_blank" className="underline">Sunday Lighthouse</a>, dedicado a proyectos en el espacio de bienestar.
      </em>
    )
  }
} 

const About = () =>{
    const location = useLocation();
    const pathname = location.pathname;

    const params = new URLSearchParams(location.search);
    const initialLang = params.get('lang') === 'es' ? 'es' : 'en';
    const [language, setLanguage] = useState(initialLang);

    const navigate = useNavigate(); 

    const toggleLanguage = () => {
      const newLang = language === 'en' ? 'es' : 'en';
      setLanguage(newLang);
      navigate(`${location.pathname}?lang=${newLang}`);
    }; 

    const [showMobileNav, setShowMobileNav] = useState(false);


  return ( 
    <div className="about-page">
        <header class="site-header">
          <div className="nav-container">
            <nav className="nav-left">
              <Link to={`/?lang=${language}`} className={pathname === '/' ? 'active' : ''}>{t[language].work}</Link>
              <Link to={`/about?lang=${language}`} className={pathname === '/' ? 'active' : ''}>{t[language].about}</Link>
              <a href="mailto:hello@itsproof.co">{t[language].email}</a>
            </nav>

            <div className="logo"><Link to={`/?lang=${language}`}>PROOF</Link></div>

            <nav className="nav-right">
              <button onClick={toggleLanguage} className="lang" >
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


      <main className="about-content">
        <h4 className="about-header">
          {t[language].aboutHeader}
        </h4>
        <p className="about-text">
          {t[language].aboutText}
        </p>

        <div className="about-services">
          <div>
            <h4>{t[language].servicesHeading}</h4>
            <ul>
                {t[language].services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
            </ul>
          </div>
          <div>
            <h4>{t[language].capabilitiesHeading}</h4>
            <ul>
                {t[language].capabilities.map((cap, idx) => (
                  <li key={idx}>{cap}</li>
                ))}
            </ul>
          </div>
        </div>

        <p className="wellness-note">
          {t[language].sundayNote}        
        </p>
      </main>

      <footer class="site-footer">
          <div className="footer-container">
          <nav className="footer-left footer-links">
            <a href="mailto:hello@itsproof.co">{t[language].email}</a>
            <a href="http://instagram.com/itsproof.co" target="_blank">Instagram</a>
            <a href="/islandipsum" target="_blank">{t[language].lorem}</a>
          </nav>

            <div className="footer-logo"><Link to={`/?lang=${language}`}>PROOF</Link>
            </div>

            <nav className="footer-right footer-rights">
              <p className="footer-right-nav">{t[language].rights}</p>
            </nav>
          </div>

      </footer>
    </div>
  );
}

export default About;