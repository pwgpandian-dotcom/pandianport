'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Download } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const found = navLinks.find(({ href }) => {
        const el = document.getElementById(href)
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 120 && bottom >= 120
      })
      if (found) setActive(found.href)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030712]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              D
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
            </div>
            <span className="hidden sm:block font-bold text-white tracking-tight text-sm">
              Pandian{' '}
              <span className="gradient-text-blue">.D</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === href
                    ? 'text-white'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {active === href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/[0.08] rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Available
            </div>
            <a
              href="/resume/Pandian_D_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Pandian_D_Resume.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#030712] text-sm font-semibold hover:bg-white/90 transition-all shadow-lg shadow-white/10 group"
            >
              <Sparkles size={13} className="group-hover:hidden" />
              <Download size={13} className="hidden group-hover:block" />
              <span className="group-hover:hidden">Hire Me</span>
              <span className="hidden group-hover:block whitespace-nowrap">Download Resume</span>
            </a>
            <button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === href
                      ? 'text-white bg-white/[0.07]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href="/resume/Pandian_D_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Pandian_D_Resume.pdf"
                className="w-full mt-3 px-4 py-3 rounded-xl bg-white text-[#030712] text-sm font-bold flex items-center justify-center gap-2"
              >
                <Download size={14} />
                Hire Me / Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
