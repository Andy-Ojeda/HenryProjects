import { Routes, Route } from "react-router-dom";

import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'
import AboutUs from './views/About/About'
import OnGoing from './views/OnGoing/OnGoing'
import Done from "./views/Done/Done";
import Project from './views/Project/Project'


import './App.css'
import Admin from "./views/Admin/Admin";


function App() {
  return (

    <>  
      <div className='contAllAPP'>
        {/* <Nav /> */}
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ongoing" element={<OnGoing />} />
            <Route path="/done" element={<Done />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/project/:id" element={<Project/>}/>
        </Routes>
      </div>

    
  
    </>
  );
}

export default App;
