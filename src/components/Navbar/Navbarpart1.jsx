import React from 'react'

const NavPart1 = () => {
  const scrollToHome = () => {
    const element = document.getElementById('home')
    if (!element) return

    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={scrollToHome}
        className="group flex items-center gap-2.5 text-left focus:outline-none"
        aria-label="Aditya Sutar - Back to top"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-zinc-900/80 font-mono text-xs font-medium tracking-tight text-zinc-100 transition-colors duration-300 group-hover:border-white/25 group-hover:bg-zinc-800">
          AS
        </span>
        <span className="text-sm font-medium tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-white">
          Aditya Sutar
        </span>
      </button>

      <span className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-zinc-900/60 px-2.5 py-1 text-[11px] font-mono text-zinc-400">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
        Open to work
      </span>
    </div>
  )
}

export default NavPart1
