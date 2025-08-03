import  { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopupForm from './components/PopupForm'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Pricing from './pages/Pricing'
import WhyUs from './pages/WhyUs'

export default function App() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="bg-neutral max:w-[100vw]  text-black dark:bg-black dark:text-white min-h-screen transition-colors">
      


        <Navbar openPopup={() => setShowPopup(true)} />

        
        
        <Routes>
          <Route path="/" element={<Home openPopup={() => setShowPopup(true)} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/whyUs" element={<WhyUs />} />
        </Routes>
        <Footer />
        {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      </div>
    </Router>
  )
}
