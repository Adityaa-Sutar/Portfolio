import React, { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { scrollToTarget } from '../../lib/scroll'

const MENU_ITEMS = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'experience', num: '02', label: 'Experience' },
  { id: 'work', num: '03', label: 'Work' },
  { id: 'contact', num: '04', label: 'Contact' },
]

const Navbarpart2 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', ...MENU_ITEMS.map((item) => item.id)]
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isOpen) {
      window.__lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      window.__lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      window.__lenis?.start()
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    setTimeout(() => {
      scrollToTarget(sectionId, -64)
    }, 60)
  }

  return (
    <div className="flex items-center">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-7">
        <ul className="flex items-center gap-6">
          {MENU_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <Motion.span
                      layoutId="nav-active-dot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-blue-500"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="h-4 w-px bg-white/10" aria-hidden="true" />

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
        >
          Resume
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-zinc-900/70 p-2 text-zinc-200 transition-colors hover:text-white"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Fullscreen Drawer */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-2xl flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="rounded-lg border border-white/10 bg-zinc-900/80 p-2 text-zinc-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col divide-y divide-white/[0.06]">
              {MENU_ITEMS.map((item, index) => (
                <Motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-baseline justify-between py-6 text-left"
                >
                  <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300">
                    {item.num}
                  </span>
                </Motion.button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950"
              >
                Download Resume
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:adityasutar2807@gmail.com"
                className="text-xs font-mono text-zinc-400 hover:text-white"
              >
                Email Me
              </a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbarpart2
