// import logo from './logo.svg';
import './App.css';
import './App.css';
//IMPORT ROUTE and COMPONENTS
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Spanish from './pages/spanish';
import LoremIpsum from './pages/loremipsum';
// import Nav from "./components/Nav"
// import {Redirect} from 'react-router';
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/spanish' element={<Spanish/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
