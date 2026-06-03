'use client'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, GraduationCap, Layers, Cpu, Globe, Code2, Zap } from 'lucide-react'

const info = [
  { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka', color: 'text-blue-400 bg-blue-500/10' },
  { icon: Briefcase, label: 'Experience', value: '2 Years', color: 'text-violet-400 bg-violet-500/10' },
  { icon: Briefcase, label: 'Projects', value: '10+ Delivered', color: 'text-emerald-400 bg-emerald-500/10' },
  { icon: GraduationCap, label: 'Education', value: 'B.Sc CS — SRM', color: 'text-amber-400 bg-amber-500/10' },
]

const focus = [
  { icon: Layers, label: 'Enterprise Software Development', color: 'text-blue-400', bg: 'bg-blue-500/8 border-blue-500/15' },
  { icon: Cpu, label: 'AI & LLM Integrations', color: 'text-violet-400', bg: 'bg-violet-500/8 border-violet-500/15' },
  { icon: Globe, label: 'SaaS Platform Architecture', color: 'text-emerald-400', bg: 'bg-emerald-500/8 border-emerald-500/15' },
  { icon: Code2, label: 'Cloud-Based Applications', color: 'text-cyan-400', bg: 'bg-cyan-500/8 border-cyan-500/15' },
  { icon: Zap, label: 'Business Automation Solutions', color: 'text-amber-400', bg: 'bg-amber-500/8 border-amber-500/15' },
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#040916]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">About Me</h2>
          <div className="mt-5 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-white text-lg leading-relaxed font-medium">
                I am a{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Full Stack Developer
                </span>{' '}
                with experience building enterprise software, ERP solutions, CRM platforms, finance management systems, SaaS products, and AI-powered applications.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My work focuses on creating scalable, secure, and business-oriented software using modern technologies and engineering best practices — from concept to production.
              </p>
            </div>

            {/* Info grid */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {info.map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="card-glow flex items-center gap-3 p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className={`p-2 rounded-xl ${card.color} flex-shrink-0`}>
                    <card.icon size={15} />
                  </div>
                  <div>
                    <div className="text-slate-600 text-[11px] font-medium uppercase tracking-wide">{card.label}</div>
                    <div className="text-white text-sm font-semibold mt-0.5">{card.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/20"
              >
                View Experience
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 text-sm font-medium hover:text-white hover:border-white/15 transition-all"
              >
                Let's Connect
              </button>
            </div>
          </motion.div>

          {/* Right: Current Focus */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Current Focus</p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2.5"
            >
              {focus.map((f, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className={`group flex items-center gap-4 px-5 py-4 rounded-2xl border ${f.bg} hover:scale-[1.01] transition-all duration-300 cursor-default`}
                >
                  <div className={`p-2 rounded-xl ${f.color} bg-current/10 flex-shrink-0`}>
                    <f.icon size={16} className={f.color} />
                  </div>
                  <span className={`font-medium text-sm ${f.color}`}>{f.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
