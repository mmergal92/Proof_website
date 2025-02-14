// import logo from './logo.svg';
import './App.css';
import './App.css';
import './assets/VulfSansDemo-Regular.otf';
//IMPORT ROUTE and COMPONENTS
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Spanish from './pages/spanish';
import Loremipsum from './pages/loremipsum';
// import Nav from "./components/Nav"
// import {Redirect} from 'react-router';
import Footer from "./components/footer";

function App() {
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
