import React, { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Contact from './pages/Contact'
import './App.css'

const App = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    if (prefersReducedMotion || isCoarsePointer) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      autoResize: true,
    })

    window.__lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30">
        <Navbar />

        <main>
          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="work">
            <Project />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </MotionConfig>
  )
}

export default App
