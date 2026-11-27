/**
 * Smoothly scrolls to a section ID or to the top of the page,
 * delegating to Lenis when active on desktop and native scroll otherwise.
 */
export function scrollToTarget(targetId, offset = -64) {
  if (!targetId || targetId === 'top') {
    if (window.__lenis) {
      window.__lenis.start()
      window.__lenis.scrollTo(0, { duration: 1.0 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  const element = document.getElementById(targetId)
  if (!element) return

  if (window.__lenis) {
    window.__lenis.start()
    window.__lenis.scrollTo(element, { offset, duration: 1.0 })
  } else {
    const top = element.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }
}

