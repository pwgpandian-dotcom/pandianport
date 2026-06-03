'use client'
import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react'

type Project = {
  type: string
  typeColor: string
  title: string
  subtitle: string
  headerGrad: string
  accentColor: string
  checkColor: string
  tagColor: string
  desc: string
  features: string[]
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    type: 'SaaS Platform',
    typeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    title: 'Persuaxion',
    subtitle: 'CRO Intelligence Dashboard',
    headerGrad: 'from-blue-950 via-[#050e2a] to-violet-950',
    accentColor: 'text-blue-400',
    checkColor: 'text-blue-400',
    tagColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    desc: 'A modern CRO intelligence platform helping eCommerce brands understand customer hesitation, buying intent, conversion behavior, and revenue opportunities through real-time behavioral analytics.',
    features: ['Intent Detection', 'Behavioral Tracking', 'Revenue Analytics', 'Conversion Intelligence', 'SaaS Dashboard', 'Real-Time Insights'],
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    type: 'SaaS Application',
    typeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    title: 'Nexoria',
    subtitle: 'Consulting & Client Management',
    headerGrad: 'from-violet-950 via-[#100520] to-indigo-950',
    accentColor: 'text-violet-400',
    checkColor: 'text-violet-400',
    tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    desc: 'A premium consulting and booking platform for freelancers and agencies, featuring integrated Razorpay payments, GPay/UPI support, session booking, and client management tools.',
    features: ['Razorpay Integration', 'GPay & UPI Payments', 'Session Booking', 'Client Management', 'Reviews & Ratings', 'Admin Dashboard'],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay'],
    link: 'https://lnkd.in/gja_Z3aP',
  },
  {
    type: 'Finance Software',
    typeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'Samayapurathal Bankers',
    subtitle: 'Gold Loan & Finance Management',
    headerGrad: 'from-amber-950 via-[#1a1000] to-orange-950',
    accentColor: 'text-amber-400',
    checkColor: 'text-amber-400',
    tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    desc: 'A complete finance management solution for gold loan and pawn broker businesses with comprehensive reporting, customer tracking, and automated interest calculations.',
    features: ['Loan Registration', 'Customer Management', 'Interest Calculation', 'Financial Reports', 'Portfolio Analytics', 'Staff Management'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://lnkd.in/g23z2twb',
  },
  {
    type: 'Enterprise Software',
    typeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    title: 'ERP Management System',
    subtitle: 'Enterprise Resource Planning',
    headerGrad: 'from-emerald-950 via-[#001a0a] to-teal-950',
    accentColor: 'text-emerald-400',
    checkColor: 'text-emerald-400',
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    desc: 'Comprehensive ERP modules covering inventory, payroll, accounting, employee management, and business reporting for enterprise clients with role-based access control.',
    features: ['Inventory Management', 'Payroll Processing', 'Accounting Module', 'Employee Management', 'Business Reports', 'Role-Based Access'],
    tech: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    type: 'Business Automation',
    typeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'CRM Management Platform',
    subtitle: 'Customer Relationship Management',
    headerGrad: 'from-cyan-950 via-[#001620] to-sky-950',
    accentColor: 'text-cyan-400',
    checkColor: 'text-cyan-400',
    tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    desc: 'A full-featured CRM platform with lead tracking, customer pipeline management, reporting, and workflow automation designed for modern business teams.',
    features: ['Lead Tracking', 'Customer Pipeline', 'Workflow Automation', 'Analytics & Reports', 'Team Collaboration', 'Email Integration'],
    tech: ['React.js', 'Express.js', 'MongoDB'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">What I've built</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
          <div className="mt-5 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <p className="mt-5 text-slate-400 max-w-xl mx-auto">
            Enterprise-grade applications built with production-ready architecture and modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-glow group flex flex-col rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-400 overflow-hidden hover:-translate-y-1"
            >
              {/* Visual header */}
              <div className={`relative h-36 bg-gradient-to-br ${p.headerGrad} overflow-hidden flex-shrink-0`}>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-24 h-1.5 rounded-full bg-white/10" />
                <div className="absolute top-7 left-4 w-16 h-1 rounded-full bg-white/6" />
                <div className="absolute top-12 left-4 right-4 grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, j) => (
                    <div key={j} className="h-6 rounded-lg bg-white/[0.05] border border-white/[0.05]" />
                  ))}
                </div>
                {/* Glow in corner */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-40"
                  style={{ background: p.accentColor.replace('text-', '').replace('-400', '') === 'blue' ? 'rgba(59,130,246,0.4)' : 'rgba(139,92,246,0.4)' }}
                />
                {/* Type badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${p.typeColor}`}>
                    {p.type}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-bold text-white mb-0.5">{p.title}</h3>
                <p className={`text-sm font-medium mb-3 ${p.accentColor}`}>{p.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-1.5 mb-4">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-slate-500 text-[12px]">
                      <CheckCircle2 size={10} className={p.checkColor} />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Tech + CTA */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t, j) => (
                      <span key={j} className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${p.tagColor}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${p.accentColor} hover:opacity-80 transition-opacity group/link`}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                      <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
