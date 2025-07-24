import hero from '../assets/hero.jpg';
import investment from '../assets/investment.jpg';
import vector from '../assets/Vector.png'

const Authorinquiry = () =>{
  return ( 
    <div className="author-page">
      <section className="author-hero "> 
        <img loading="lazy" src={hero} alt="beach" className="hero-bg" />
          <div className="hero-content">
            <h5>Three authors. Three websites. One summer only.</h5>
            <h1>An obsession-worthy <br/>website in just 6-weeks</h1>
            <a href="#" className="author-hero-btn">Unlock your dream site</a>
        </div>
      </section>
      </div>
  );
};

export default Authorinquiry;