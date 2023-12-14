import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import AboutUs from "./views/About/About";


import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'
import AboutUs from './views/About/About'
import Nav from './Components/Nav/Nav'


import './App.css'


function App() {
  return (

    <>  
      <div className='contAllAPP'>
        <Nav />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </div>

    
  
    </>
  );
}

export default App;
