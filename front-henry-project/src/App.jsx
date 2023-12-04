import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'

import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'
import AboutUs from './views/About/About'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
      </Routes>

    
    
    
    </>
  )
}

export default App
