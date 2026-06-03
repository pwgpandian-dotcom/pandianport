'use client'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/d-pandian', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pandian-d', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pandya07844@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#020509]">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                D
              </div>
              <span className="font-bold text-white text-sm tracking-tight">
                Pandian{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  .D
                </span>
              </span>
            </button>
            <p className="text-slate-600 text-sm leading-relaxed max-w-[240px]">
              Full Stack Developer specializing in enterprise software, SaaS platforms, and AI-powered solutions. Based in Bengaluru, India.
            </p>
            {/* Socials */}
            <div className="flex gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-white hover:border-white/15 hover:bg-white/[0.08] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left text-slate-600 text-sm hover:text-slate-300 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-5">Status</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-emerald-400 font-medium">Available for work</span>
              </div>
              <p className="text-slate-600 text-sm">Open to full-time roles and freelance projects.</p>
              <a
                href="mailto:pandya07844@gmail.com"
                className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
              >
                pandya07844@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-sm">© 2026 Pandian .D · All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-slate-700 text-sm">Built with Next.js · Tailwind CSS · Framer Motion</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-600 hover:text-white hover:border-white/15 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
