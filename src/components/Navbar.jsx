import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import logoDark from "../assets/MUNCH_Dark.png"
import logoLight from "../assets/MUNCH_WHITE.png"
export default function Navbar({ openPopup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Top border */}
      <div className="h-[35px] bg-primary w-full flex justify-center">
       
       
         
            <span  className="inline-flex  items-center gap-3 mx-4">
             <span className="bg-primary py-2 text-neutral text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
  GET 15% OFF WITH COUPON CODE: 15 JULY 2025 - LIMITED TIME OFFER!
</span>

             
            </span>
         
      
      
      </div>

      <nav className="flex items-center justify-between p-4 px-6 md:px-10 bg-neutral text-black dark:text-white dark:bg-black transition-all duration-300 relative z-50">

        {/* Logo */}
        <div className="flex items-center h-10 select-none">
          {/* Show logoLight in dark mode, logoDark in light mode */}
          <img
            src={logoDark}
            alt="ClipMunch Logo"
            className="block dark:hidden h-30 w-auto object-contain"
            draggable="false"
          />
          <img
            src={logoLight}
            alt="ClipMunch Logo"
            className="hidden dark:block h-10 w-auto object-contain"
            draggable="false"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
          {['OUR SERVICE', 'PORTFOLIO', 'RESOURCES', 'PRICING', 'WHY US'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="hidden md:inline-block bg-primary hover:brightness-110 text-white font-semibold px-5 py-2 rounded-full transition-all"
            onClick={openPopup}
          >
            SCHEDULE A CALL
          </button>

          {/* Hamburger Button (md and below) */}
          <button
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white relative transition-all z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block absolute w-5 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'}`} />
            <span className={`block absolute w-5 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block absolute w-5 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div className={`fixed top-0 right-0 w-2/3 max-w-sm h-full bg-neutral dark:bg-black text-black dark:text-white z-50 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-6 p-6 text-lg font-semibold tracking-wide">
          {['OUR SERVICE', 'PORTFOLIO', 'RESOURCES', 'PRICING', 'WHY US'].map((item) => (
            <li key={item}>
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="p-6">
          <button
            onClick={() => {
              openPopup()
              setMobileMenuOpen(false)
            }}
            className="w-full mt-4 bg-primary text-white rounded-full py-3 text-center hover:brightness-110 transition-all"
          >
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </>
  )
}
