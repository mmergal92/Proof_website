import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header.js';
import Footer from '../components/footer.js';
import tData from '../components/translations.js';

const Authors = () =>{
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

    const t = tData[language];


  return ( 
    <div className="about-page ">
        
      <Header language={language} toggleLanguage={toggleLanguage} t={t} />

      <main className="about-content fade-in fade-in-delay-2">
        <h4 className="about-header">
          {t.aboutHeader}
        </h4>
        <p className="about-text">
          {t.aboutText}
        </p>

        <p className="wellness-note">
          {t.sundayNote}        
        </p>
      </main>

      <Footer language={language} t={t} />

    </div>
  );
}

export default Authors;