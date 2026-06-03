'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, Download } from 'lucide-react'

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Shipped' },
  { value: 5, suffix: '+', label: 'Enterprise Apps' },
]

const badges = [
  { label: 'React.js', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20', delay: 0 },
  { label: 'Next.js', color: 'text-white bg-white/5 border-white/15', delay: 0.5 },
  { label: 'Node.js', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', delay: 1 },
  { label: 'AI / LLM', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20', delay: 1.5 },
  { label: 'PostgreSQL', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20', delay: 2 },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const duration = 1600
    const timer = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * target))
      if (p >= 1) { setCount(target); clearInterval(timer) }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Spotlight radial at center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="space-y-7">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-400 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Hero heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1
                className="font-extrabold tracking-tight leading-[1.03]"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                <span className="text-white">Pandian</span>
                <span
                  className="inline-block ml-3"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 40%, #c084fc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  .D
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-violet-500" />
              <span className="text-slate-300 text-xl font-medium tracking-wide">Full Stack Developer</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed max-w-[480px]"
            >
              Building enterprise applications, ERP systems, CRM platforms, finance software,
              SaaS products, and AI-powered solutions with modern technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#030712] font-semibold text-sm hover:bg-white/90 transition-all shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.10] text-white font-semibold text-sm hover:bg-white/[0.10] hover:border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Me <Mail size={15} />
              </button>
              <a
                href="/resume/Pandian_D_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Pandian_D_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] text-slate-400 font-medium text-sm hover:text-white hover:border-white/15 transition-all group"
              >
                <span className="group-hover:hidden">Resume</span>
                <span className="hidden group-hover:block">Download CV</span>
                <Download size={15} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex gap-10 pt-2 border-t border-white/[0.05]"
            >
              {stats.map((s, i) => (
                <div key={i} className="pt-5">
                  <div
                    className="font-extrabold tabular-nums"
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                      background: 'linear-gradient(135deg, #93c5fd, #a5b4fc)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-slate-500 text-xs mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer ambient glow */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-blue-500/15 via-violet-500/15 to-blue-500/15 blur-3xl animate-glow-pulse pointer-events-none" />

              {/* Rotating border ring */}
              <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-blue-500/60 via-violet-500/40 to-blue-500/60 animate-spin-slow opacity-50 blur-[1px]" />

              {/* Photo frame */}
              <div className="relative w-[340px] h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                {/* Profile image — cropped to upper body */}
                <img
                  src="/dineshj.jpeg"
                  alt="Pandian .D"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom gradient overlay with name */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent pt-12 pb-5 px-5">
                  <p className="text-white font-bold text-base leading-tight">Pandian .D</p>
                  <p className="text-slate-400 text-sm mt-0.5">Full Stack Developer</p>
                </div>
              </div>

              {/* Floating badges */}
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' }}
                  className={`absolute px-3 py-1.5 rounded-full border text-xs font-semibold ${badge.color}`}
                  style={{
                    top: i === 0 ? '-18px' : i === 1 ? '12%' : i === 2 ? '82%' : i === 3 ? '-8px' : '70%',
                    left: i === 0 ? '22%' : i === 1 ? '-75px' : i === 2 ? '-65px' : i === 3 ? '72%' : '76%',
                    zIndex: 20,
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          onClick={() => scrollTo('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700 hover:text-slate-500 transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-slate-600" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
