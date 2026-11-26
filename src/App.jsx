import React, { useEffect, lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './App.css'

// Lazy-load below-the-fold sections for faster initial paint
const About = lazy(() => import('./pages/About'))
const Experience = lazy(() => import('./pages/Experience'))
const Project = lazy(() => import('./pages/Project'))
const Contact = lazy(() => import('./pages/Contact'))

const App = () => {
  useEffect(() => {
    // Skip Lenis on touch devices so native mobile scroll stays fluid
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches

    if (isTouchDevice) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
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

          <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
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
          </Suspense>
        </main>
      </div>
    </MotionConfig>
  )
}

export default App
