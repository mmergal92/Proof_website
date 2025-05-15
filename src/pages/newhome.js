import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

import annaliseImg from '../assets/annalisenew.png';
import ballyhacImg from '../assets/ballyhacbg.png';
import ballyhacTitle from '../assets/ballyhactitle.png';
import enclavesImg from '../assets/enclavesnew.png';
import riddimsImg from '../assets/loremnew.png';
import annaliseVideo from '../assets/annalise.mp4';
import enclavesVideo from '../assets/enclaves.mp4';
import riddimsVideo from '../assets/riddims.mp4';
import browserImg from '../assets/browser.png';

import previous from '../assets/previous.png';
import next from '../assets/next.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';


const t = {
  en: {
    work: "Work",
    about: "About",
    email: "Email us",
    headline: "Fresh and imaginative experiences for the internet and elsewhere.",
    testimonials: "Testimonials",
    rights: "2025. All Rights Reserved.",
    lang: "En español",
    lorem:"Riddim Ipsum",
  },
  es: {
    work: "Trabajo",
    about: "Acerca de",
    email: "Contáctanos",
    headline: "Experiencias frescas e imaginativas para el internet y más allá.",
    testimonials: "Testimonios",
    rights: "2025. Todos los derechos reservados.",
    lang:"In english",
    lorem:"Ritmo Ipsum",
  }
}
const projects = [
  {
    img: annaliseImg,
    video: annaliseVideo,
    overlayImg: browserImg,
  },
  {
    img: ballyhacImg,
    video: null,
    overlayImg: ballyhacTitle,
  },
  {
    img: riddimsImg,
    video: riddimsVideo,
    overlayImg: browserImg,
  },
  {
    img: enclavesImg,
    video: enclavesVideo,
    overlayImg: browserImg,
  },
];

const testimonials = {
  en: [
    {
      quote:
  "Proof stood out for their professionalism, responsiveness, unique understanding of and commitment to community-based organizations. Maria and Segacy were wonderful to work with.",
  author: "Maia Dillane",
  work: "Director of Research and Evaluation at AAFSC",
  },
  {
  quote:
  "After taking a look at their work and talking a bit, it was a no brainer. I'm so glad to have them on my team.",
  author: "Annalise Lockhart",
  work: "Film Director & Writer (repeat client)",
  },
  {
    quote:
  "It was such a pleasure working together to bring this project to life.", 
   author: "Sierra Van Ryck deGroot",
    work: "Deputy Director at Museum Hue",
    },
  ],
  es: [
    {
      quote: "Proof se destacó por su profesionalismo, capacidad de respuesta, y su comprensión y compromiso únicos con las organizaciones comunitarias. Fue un placer trabajar con Maria y Segacy.",
      author: "Maia Dillane",
      work: "Directora de Investigación y Evaluación en AAFSC",
    },
    {
      quote: "Después de ver su trabajo y conversar un poco, fue una decisión obvia. Me alegra muchísimo tenerlas en mi equipo.",    
      author: "Annalise Lockhart",
      work: "Directora y Guionista (cliente recurrente)",
      },
      {
        quote: "Fue un verdadero placer colaborar para dar vida a este proyecto.",
         author: "Sierra Van Ryck deGroot",
        work: "Subdirectora en Museum Hue",
        },
  ],
}
  
function WorkTile({ img, video, overlayImg}) {
  return (
    <div
      className="work-tile"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        aspectRatio: '16 / 9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
     <div style={{ textAlign: 'center' }}>
        {overlayImg && (
          <img
            src={overlayImg}
            alt=""
            style={{
              maxWidth: '65%',
              display: 'block',
              margin: 'auto',
              padding: 0,
            }}
          />
        )}
        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            style={{
              maxWidth: '65%',
              display: 'block',
              margin: 'auto',
            }}
          />
        )}
      </div>
    </div>
  );
}

const Newhome = () =>{

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const { quote, author, work } = testimonials[language][currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials[language].length - 1 : prevIndex - 1
  );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials[language].length - 1 ? 0 : prevIndex + 1
  );
  };


  return (
    <div className="newhome-page">
       <header class="site-header">
          <div className="nav-container">
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

      <main className="home-content">
        <h1 className="headline">
        {t[language].headline}
                </h1>

        <section className="work-grid-wrapper">
          <div className="work-grid">
            {projects.map((p, idx) => (
              <WorkTile key={idx} img={p.img} overlayImg={p.overlayImg} video={p.video} />
            ))}
          </div>
        </section>       

        <section className="testimonial">
          <p className="label">{t[language].testimonials}</p>
         

          <div className="testimonial-slider-container">
              <div
                className="testimonial-slider-inner"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials[language].map((t, idx) => (
                  <div className="testimonial-slide" key={idx}>

                    <div className="quote-row">
                      <button onClick={handlePrevious}>
                        <img src={previous} alt="Previous" />
                      </button>

                      <blockquote>
                        <p className="quote-text">{t.quote}</p>
                      </blockquote>

                      <button onClick={handleNext}>
                        <img src={next} alt="Next" />
                      </button>
                    </div>

                    <p className="quotation-attr">
                      {t.author}, {t.work}
                    </p>
                    
                  </div>
                ))}
              </div>
            </div>


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

export default Newhome;