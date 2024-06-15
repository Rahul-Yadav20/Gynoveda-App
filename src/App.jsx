import React from 'react'
import GeolocationPincode from './components/GeolocationPincode'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Carousel from './components/Carousel'


const App = () => {
  return (
    <div>
      <Router>

        <Navbar />
        
        <Routes>
          <Route path='/' element={<GeolocationPincode />} />
          <Route />
          <Route path='/about' element={<About />} />
          <Route />
          <Route path='/contact' element={<Contact />} />
          <Route />
        </Routes>
      </Router>
    </div>
  )
}

export default App
