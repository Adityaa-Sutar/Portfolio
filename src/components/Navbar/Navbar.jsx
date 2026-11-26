import React, { useState, useEffect } from 'react'
import NavPart1 from './Navbarpart1'
import Navbarpart2 from './Navbarpart2'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between"
      >
        <NavPart1 />
        <Navbarpart2 />
      </nav>
    </header>
  )
}

export default Navbar
