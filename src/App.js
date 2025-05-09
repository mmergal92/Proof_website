// import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import './App.css';
import './assets/VulfSansDemo-Regular.otf';
//IMPORT ROUTE and COMPONENTS
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Spanish from './pages/spanish';
import Loremipsum from './pages/loremipsum';
import About from './pages/about';

// import Nav from "./components/Nav"
// import {Redirect} from 'react-router';
import Footer from "./components/footer";


const MEASUREMENT_ID = 'G-4ZV4YCN0DD';
ReactGA.initialize(MEASUREMENT_ID);

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // console.log("Tracking page view:", location.pathname); // Debug log

    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location.pathname]); // Only track when pathname changes
};


function App() {
  usePageTracking(); 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/spanish' element={<Spanish/>}/>
        <Route path='/islandipsum' element={<Loremipsum/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
