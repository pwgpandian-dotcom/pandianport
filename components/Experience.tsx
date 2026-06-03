'use client'
import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

const jobs = [
  {
    role: 'Software Engineer',
    company: 'Thots2IT Technologies',
    location: 'Remote / India',
    period: 'Feb 2023 – Jan 2025',
    duration: '2 Years',
    description: 'Built enterprise ERP and CRM applications, scalable REST APIs, and AI-integrated workflows for business clients.',
    points: [
      'Developed ERP and CRM applications for enterprise clients across multiple industries',
      'Built scalable REST APIs using Node.js and Express.js with JWT authentication',
      'Developed responsive UIs using React.js and Next.js with Tailwind CSS',
      'Designed and optimized MongoDB and PostgreSQL database schemas for performance',
      'Implemented role-based access control and secure authentication systems',
      'Built reporting and analytics modules with real-time data visualization',
      'Integrated Claude AI for intelligent automation and workflow optimization',
      'Collaborated using Agile methodology with cross-functional distributed teams',
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT', 'REST APIs', 'Claude AI', 'Agile'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#040916]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Work History</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Professional Experience</h2>
          <div className="mt-5 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Gradient timeline line (for future multiple entries) */}
              <div className="flex gap-6 sm:gap-8">
                {/* Icon column */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0 pt-2">
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-xl shadow-blue-500/25">
                    <Building2 size={20} className="text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-violet-400/20 blur-md -z-10" />
                  </div>
                </div>

                {/* Card */}
                <div className="card-glow flex-1 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 overflow-hidden">
                  {/* Card header */}
                  <div className="p-6 sm:p-8 pb-5 border-b border-white/[0.05]">
                    <div className="flex flex-wrap gap-4 justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <p
                          className="font-semibold mt-1"
                          style={{
                            background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {job.company}
                        </p>
                        <p className="text-slate-500 text-sm mt-1.5">{job.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                          {job.duration}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Calendar size={11} /> {job.period}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                          <MapPin size={11} /> {job.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="p-6 sm:p-8 pt-5">
                    <ul className="grid sm:grid-cols-2 gap-2.5 mb-6">
                      {job.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                          <CheckCircle2 size={14} className="text-blue-500/60 flex-shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.05]">
                      {job.tech.map((t, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 text-xs font-medium hover:text-slate-200 hover:border-white/15 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
