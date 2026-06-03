'use client'
import { motion } from 'framer-motion'
import { Monitor, Server, Database, Building2, Brain, Wrench } from 'lucide-react'

type Skill = { title: string; icon: React.ElementType; color: string; glow: string; border: string; skills: string[]; span?: string }

const categories: Skill[] = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'text-blue-400',
    glow: 'from-blue-600/12 to-blue-900/5',
    border: 'border-blue-500/15',
    skills: ['React.js', 'Next.js 14', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'Framer Motion'],
    span: 'lg:col-span-2',
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    color: 'text-violet-400',
    glow: 'from-violet-600/12 to-violet-900/5',
    border: 'border-violet-500/15',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'WebSockets', 'Middleware'],
  },
  {
    title: 'AI & LLM',
    icon: Brain,
    color: 'text-pink-400',
    glow: 'from-pink-600/12 to-pink-900/5',
    border: 'border-pink-500/15',
    skills: ['Claude AI', 'OpenAI', 'Prompt Engineering', 'AI Workflows', 'MCP', 'Hugging Face'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'text-emerald-400',
    glow: 'from-emerald-600/12 to-emerald-900/5',
    border: 'border-emerald-500/15',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Enterprise & ERP',
    icon: Building2,
    color: 'text-amber-400',
    glow: 'from-amber-600/12 to-amber-900/5',
    border: 'border-amber-500/15',
    skills: ['ERP Systems', 'CRM Platforms', 'School Management', 'Inventory', 'Payroll', 'Finance Software'],
    span: 'lg:col-span-2',
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'text-cyan-400',
    glow: 'from-cyan-600/12 to-cyan-900/5',
    border: 'border-cyan-500/15',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Railway', 'Postman', 'Netlify'],
  },
]

function SkillChip({ label, color }: { label: string; color: string }) {
  const chipColor = color
    .replace('text-', 'bg-')
    .replace('-400', '-500/10') + ' ' +
    color.replace('-400', '-300') + ' border-' +
    color.replace('text-', '').replace('-400', '-500/20')

  return (
    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${chipColor} whitespace-nowrap`}>
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Technical Skills</h2>
          <div className="mt-5 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`card-glow group relative p-6 rounded-2xl bg-gradient-to-br ${cat.glow} border ${cat.border} hover:border-opacity-40 hover:scale-[1.01] transition-all duration-300 ${cat.span || ''}`}
            >
              {/* Top row */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] ${cat.color}`}>
                  <cat.icon size={18} />
                </div>
                <h3 className={`font-semibold text-sm ${cat.color}`}>{cat.title}</h3>
                <span className="ml-auto text-slate-700 text-xs tabular-nums">{cat.skills.length}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <SkillChip key={j} label={skill} color={cat.color} />
                ))}
              </div>

              {/* Subtle hover shimmer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/[0.015] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
