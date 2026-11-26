import React, { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowUp, CheckCircle, XCircle, X, Copy, Check } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [notification, setNotification] = useState(null)
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      try {
        setLocalTime(
          new Date().toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
          })
        )
      } catch {
        setLocalTime(
          new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        )
      }
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const showNotification = (type, message) => {
    setNotification({ type, message })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('adityasutar2807@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API may fail in restricted contexts
    }
  }

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSending) return
    setIsSending(true)

    const ACCESS_KEY = '1ad1f3ac-6069-4ced-a190-38776d09c19b'

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', ACCESS_KEY)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('organization', formData.org)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('subject', `New Contact Form Message from ${formData.name}`)
      formDataToSend.append('from_name', 'Portfolio Contact Form')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        showNotification('success', "Message sent! I'll get back to you soon.")
        setFormData({ name: '', email: '', org: '', message: '' })
      } else {
        throw new Error(data.message || 'Failed to send email')
      }
    } catch {
      showNotification(
        'error',
        'Something went wrong. Please try again or email adityasutar2807@gmail.com directly.'
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <Motion.div
            initial={{ opacity: 0, y: -24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 right-4 sm:right-8 z-50 max-w-sm"
          >
            <div
              className={`rounded-2xl p-4 shadow-2xl backdrop-blur-xl border ${
                notification.type === 'success'
                  ? 'bg-zinc-900/95 border-emerald-500/30'
                  : 'bg-zinc-900/95 border-red-500/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  {notification.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">
                    {notification.type === 'success' ? 'Message sent' : 'Unable to send'}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {notification.message}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setNotification(null)}
                  aria-label="Dismiss notification"
                  className="text-zinc-500 hover:text-zinc-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Main Contact Container */}
      <div className="w-full bg-zinc-950 border-t border-white/[0.06] pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Section Header */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 md:mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
              04 / Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl leading-[1.15]">
              Let&apos;s build something{' '}
              <span className="font-serif italic font-normal text-zinc-300">
                meaningful together.
              </span>
            </h2>
          </Motion.div>

          {/* 2-Column Form & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 pb-20 md:pb-24">
            {/* Form */}
            <Motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2.5 group-focus-within:text-zinc-200 transition-colors"
                  >
                    01 · Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/12 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2.5 group-focus-within:text-zinc-200 transition-colors"
                  >
                    02 · Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/12 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="org"
                  className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2.5 group-focus-within:text-zinc-200 transition-colors"
                >
                  03 · Organization (Optional)
                </label>
                <input
                  type="text"
                  id="org"
                  name="org"
                  placeholder="Company or studio name"
                  value={formData.org}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/12 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2.5 group-focus-within:text-zinc-200 transition-colors"
                >
                  04 · Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, role, or timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/12 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </Motion.form>

            {/* Contact Details Card */}
            <Motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-zinc-900/35 p-6 sm:p-8 space-y-8"
            >
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  Direct Contact
                </h3>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <a
                    href="mailto:adityasutar2807@gmail.com"
                    className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors break-all"
                  >
                    adityasutar2807@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-950/70 px-2.5 py-1.5 font-mono text-[11px] text-zinc-300 hover:border-white/25 hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="tel:+919767126282"
                  className="inline-block mt-2.5 text-sm text-zinc-400 hover:text-white transition-colors font-mono"
                >
                  +91 9767126282
                </a>
              </div>

              <div className="pt-6 border-t border-white/[0.07]">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
                  Social Profiles
                </h3>
                <div className="flex flex-col gap-2.5">
                  {[
                    {
                      label: 'GitHub',
                      href: 'https://github.com/Adityaa-Sutar',
                      handle: '@Adityaa-Sutar',
                    },
                    {
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/aditya-sutar/',
                      handle: 'in/aditya-sutar',
                    },
                    {
                      label: 'Instagram',
                      href: 'https://www.instagram.com/__adi__creation/',
                      handle: '@__adi__creation',
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-1 text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      <span className="font-medium">{social.label}</span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 group-hover:text-zinc-300">
                        {social.handle}
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.07] flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-1">
                    Location
                  </h3>
                  <p className="text-sm font-medium text-zinc-200">Mumbai, India</p>
                </div>
                <div className="text-right">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-1">
                    Local Time
                  </h3>
                  <p className="font-mono text-sm text-zinc-300">
                    {localTime ? `${localTime} IST` : 'IST'}
                  </p>
                </div>
              </div>
            </Motion.aside>
          </div>
        </div>

        {/* Minimal Architectural Footer */}
        <footer className="border-t border-white/[0.06] py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <p>© {new Date().getFullYear()} Aditya Sutar. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Built with React &amp; Tailwind CSS</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Top
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Contact
