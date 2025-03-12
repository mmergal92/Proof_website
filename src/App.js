// import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import './App.css';
import './assets/VulfSansDemo-Regular.otf';
//IMPORT ROUTE and COMPONENTS
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
import Spanish from './pages/spanish';
import Loremipsum from './pages/loremipsum';
// import Nav from "./components/Nav"
// import {Redirect} from 'react-router';
import Footer from "./components/footer";
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import usePageTracking from "./components/analytics"; 


const MEASUREMENT_ID = 'G-4ZV4YCN0DD';
ReactGA.initialize(MEASUREMENT_ID);


function App() {
  usePageTracking(); 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/spanish' element={<Spanish/>}/>
        <Route path='/islandipsum' element={<Loremipsum/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
