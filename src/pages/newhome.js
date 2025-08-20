import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { useRef, useEffect, useState } from 'react';


import Header from '../components/header.js';
import Footer from '../components/footer.js';
import tData from '../components/translations.js';

import annaliseImg from '../assets/annalisenew.webp';
import ballyhacImg from '../assets/ballyhacbg.webp';
import ballyhacTitle from '../assets/ballyhactitle.webp';
import enclavesImg from '../assets/enclavesnew.webp';
import riddimsImg from '../assets/loremnew.webp';
import annaliseVideo from '../assets/annalise.webm';
import enclavesVideo from '../assets/enclaves.webm';
import riddimsVideo from '../assets/riddims.webm';
import browserImg from '../assets/browser.webp';

import previous from '../assets/previous.png';
import next from '../assets/next.png';


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
            loading="lazy"
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

const extendedProjects = [
  ...projects,      // full set clone at start
  ...projects,      // real set
  ...projects       // full set clone at end
];


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

  const t = tData[language];

  const [currentIndex, setCurrentIndex] = useState(1); // start on real first slide
  const [enableTransition, setEnableTransition] = useState(true);
  
  const total = testimonials[language].length;

  const gridRef = useRef(null);
  const tileWidthRef = useRef(0);

 useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const firstTile = el.querySelector('.work-tile');
    tileWidthRef.current = firstTile.offsetWidth;

    // initially scroll to the REAL first slide (index 1)
    el.scrollLeft = tileWidthRef.current;
    
    const handleScroll = () => {
      const maxScroll =
        tileWidthRef.current * (extendedProjects.length - 2);

      if (el.scrollLeft <= 0) {
        // if we've reached the cloned-first at the beginning
        el.scrollLeft = maxScroll - tileWidthRef.current;
      } else if (el.scrollLeft >= maxScroll) {
        // if we've reached the cloned-last at the end
        el.scrollLeft = tileWidthRef.current;
      }
    }

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  // Clone first and last for seamless loop
  const extendedTestimonials = [
    testimonials[language][total - 1], // clone of last
    ...testimonials[language],
    testimonials[language][0],        // clone of first
  ];
  // const { quote, author, work } = testimonials[language][currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

    useEffect(() => {
      if (currentIndex === 0) {
        setTimeout(() => {
          // Wait one animation frame after transition ends before snapping
          requestAnimationFrame(() => {
            setEnableTransition(false);
            setCurrentIndex(total); // real last
          });
        }, 600); // matches CSS transition duration
      } else if (currentIndex === total + 1) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            setEnableTransition(false);
            setCurrentIndex(1); // real first
          });
        }, 600);
      } else {
        setEnableTransition(true);
      }
    }, [currentIndex, total]);

    // autoscroll //

        useEffect(() => {
          const el = gridRef.current;
          if (!el) return;

          // ensure we have a tile width
          if (!tileWidthRef.current) {
            const firstTile = el.querySelector('.work-tile');
            if (firstTile) tileWidthRef.current = firstTile.offsetWidth;
          }

          const stepPx = 0.8;   // pixels per tick (tweak: 0.3–2 for slower/faster)
          const stepMs = 16;    // ~60fps

         const timer = setInterval(() => {
          el.scrollLeft += stepPx; // continuous glide

          // keep the infinite loop seamless
          const maxScroll = tileWidthRef.current * (extendedProjects.length - 2);
          if (el.scrollLeft >= maxScroll) {
            el.scrollLeft = tileWidthRef.current; // jump back to real first (hidden by clones)
          }
        }, stepMs);

          return () => clearInterval(timer);
        }, [extendedProjects.length]);

  return (
    <div className="newhome-page ">
       
       <Header language={language} toggleLanguage={toggleLanguage} t={t} />

      <main className="home-content fade-in fade-in-delay-2">
        <h1 className="headline">
        {t.headline}
                </h1>

        <section className="work-grid-wrapper">
          <div className="work-grid"
               ref={gridRef}
          
    >
            {extendedProjects.map((p, idx) => (
              <WorkTile key={idx} img={p.img} overlayImg={p.overlayImg} video={p.video} />
            ))}
          </div>
        </section>       

        <section className="testimonial" id="testimonials">
          <p className="testimonial-label ">{t.testimonials}</p>
         

          <div className="testimonial-slider-container">
              <div
                className="testimonial-slider-inner"
                style={{ transform: `translateX(-${currentIndex * 100}%)`,    
                transition: enableTransition ? 'transform 0.6s ease-in-out' : 'none',
              }}
              >
                {extendedTestimonials.map((t, idx) => (
                    <div className="testimonial-slide" key={idx}>
                      <div className="quote-row">
                        <button onClick={handlePrevious}>
                          <img loading="lazy" src={previous} alt="Previous" />
                        </button>
                        <blockquote>
                          <p className="quote-text">{t.quote}</p>
                        </blockquote>
                        <button onClick={handleNext}>
                          <img loading="lazy" src={next} alt="Next" />
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

      <Footer language={language} t={t} />


    </div>
  );
}

export default Newhome;