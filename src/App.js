// import logo from './logo.svg';
import './App.css';
import './App.css';
//IMPORT ROUTE and COMPONENTS
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
// import Nav from "./components/Nav"
// import {Redirect} from 'react-router';
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
