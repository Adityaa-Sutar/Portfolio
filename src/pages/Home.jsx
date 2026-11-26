import React from 'react'
import { motion as Motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import profileImg from '../assets/img.jpg'

const EASE = [0.22, 1, 0.36, 1]

const Home = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -64, duration: 1.1 })
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-zinc-950 flex flex-col justify-between overflow-hidden">
      {/* Subtle architectural top spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.09),transparent_65%)]"
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 pt-28 pb-10 md:pt-36 md:pb-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 mb-7"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                Full Stack Engineer · Mumbai, India
              </span>
            </Motion.div>

            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.02] mb-5"
            >
              Aditya Sutar
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
              className="text-2xl sm:text-3xl md:text-[2.1rem] font-normal tracking-tight text-zinc-300 leading-[1.25] mb-6"
            >
              Building resilient web applications with{' '}
              <span className="font-serif italic text-white">
                precision &amp; quiet craft.
              </span>
            </Motion.p>

            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
              className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl mb-9"
            >
              Computer Science graduate &amp; AWS Cloud Practitioner specializing in React,
              Next.js, Node.js, and modern cloud workflows — turning complex ideas into fast,
              maintainable products.
            </Motion.p>

            {/* Primary Action Row */}
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <button
                type="button"
                onClick={() => scrollToSection('work')}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-zinc-200 cursor-pointer"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <a
                href="/resume.pdf"
                download="Aditya_Sutar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-100 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.07]"
              >
                <Download className="w-4 h-4 text-zinc-400" />
                Resume
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                Get in touch
              </button>
            </Motion.div>

            {/* Minimal Social Row */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              className="flex items-center gap-5 pt-6 border-t border-white/[0.07] max-w-md"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                Connect
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Editorhacker"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-xs font-mono"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-sutar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="mailto:adityasutar2807@gmail.com"
                  aria-label="Email"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-xs font-mono"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </Motion.div>
          </div>

          {/* Right Portrait Column */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.14, ease: EASE }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl group">
                <img
                  src={profileImg}
                  alt="Aditya Sutar"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent" />

                {/* Clean Integrated Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400 mb-0.5">
                      Focus
                    </p>
                    <p className="text-sm font-medium text-zinc-100">
                      MERN · Next.js · AWS
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400 mb-0.5">
                      Based in
                    </p>
                    <p className="text-sm font-medium text-zinc-100">
                      Mumbai, IN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>

      {/* Minimal Scroll Cue */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 pb-8 hidden sm:flex items-center justify-between text-zinc-500"
      >
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] hover:text-zinc-200 transition-colors cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
        <span className="font-mono text-[11px] tracking-wider text-zinc-600">
          00 / HERO
        </span>
      </Motion.div>
    </div>
  )
}

export default Home
