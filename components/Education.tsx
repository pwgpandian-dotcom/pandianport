'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const certs = [
  { name: 'Cloud Computing Training Program', issuer: 'Spryntas Software Solutions', sub: 'SRM Axis Intellects', year: '2023' },
  { name: 'SRM Axis Intellects', issuer: 'SRM Institute of Science and Technology', sub: '', year: '2023' },
]

export default function Education() {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#040916]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Academic Background</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Education & Certifications</h2>
          <div className="mt-5 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-4">Education</p>
            <div className="card-glow h-full p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-violet-600/5 border border-blue-500/15 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/15 flex-shrink-0">
                  <GraduationCap size={22} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold leading-snug text-sm sm:text-base">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-blue-400 font-semibold text-sm mt-1.5">
                    SRM Institute of Science and Technology
                  </p>
                  <div className="flex items-center gap-1.5 mt-2.5 text-slate-500 text-sm">
                    <Calendar size={12} />
                    2020 – 2023
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <p className="text-slate-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-4">Certifications</p>
            <div className="space-y-3">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="card-glow flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-violet-600/8 to-indigo-600/5 border border-violet-500/15 hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-violet-500/15 flex-shrink-0">
                    <Award size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{cert.name}</h4>
                    <p className="text-violet-400 text-xs font-medium mt-0.5">{cert.issuer}</p>
                    {cert.sub && <p className="text-slate-600 text-xs mt-0.5">{cert.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
