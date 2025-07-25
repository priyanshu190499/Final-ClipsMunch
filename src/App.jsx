import  { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopupForm from './components/PopupForm'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="bg-neutral max:w-[100vw] overflow-hidden text-black dark:bg-black dark:text-white min-h-screen transition-colors">
      


        <Navbar openPopup={() => setShowPopup(true)} />

        
        
        <Routes>
          <Route path="/" element={<Home openPopup={() => setShowPopup(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        {/* {showPopup && <PopupForm onClose={() => setShowPopup(false)} />} */}
      </div>
    </Router>
  )
}
