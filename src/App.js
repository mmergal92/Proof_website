import './App.css';
import ReactGA from 'react-ga';
import './App.css';
//IMPORT ROUTE and COMPONENTS
import {Route, Routes, Navigate} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Loremipsum from './pages/loremipsum';
import About from './pages/about';
import Authors from './pages/authors';
import Newhome from './pages/newhome';
import PageNotFound from './pages/404page';



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
        <Route path='/' element={<Newhome/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/authors' element={<Authors/>}/>
        <Route path='/islandipsum' element={<Loremipsum/>}/>
        <Route path="/newhome" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </div>
  );
}

export default App;
