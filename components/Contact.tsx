'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Linkedin, Github, Send, CheckCircle2, ArrowRight } from 'lucide-react'

const contactItems = [
  { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka, India', href: null, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/15' },
  { icon: Mail, label: 'Email', value: 'pandya07844@gmail.com', href: 'mailto:pandya07844@gmail.com', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/15' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pandian-d', href: 'https://linkedin.com/in/pandian-d', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/15' },
  { icon: Github, label: 'GitHub', value: 'github.com/d-pandian', href: 'https://github.com/d-pandian', color: 'text-slate-300', bg: 'bg-white/5 border-white/10' },
]

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-700 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all duration-200 font-medium'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `From: ${form.name} (${form.email})\n\n${form.message}`
    window.open(`mailto:pandya07844@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Let's Connect</h2>
          <div className="mt-5 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <p className="mt-5 text-slate-400 max-w-md mx-auto">
            I'm open to new opportunities — reach out and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="mb-6">
              <h3 className="text-white font-semibold text-lg mb-2">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a project in mind, an opportunity, or just want to say hello — my inbox is always open.
              </p>
            </div>

            {contactItems.map((item, i) => {
              const inner = (
                <div className={`card-glow flex items-center gap-4 p-4 rounded-2xl border ${item.bg} hover:scale-[1.01] transition-all duration-300`}>
                  <div className={`p-2.5 rounded-xl ${item.bg} flex-shrink-0`}>
                    <item.icon size={16} className={item.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-slate-600 text-[11px] font-semibold uppercase tracking-wide">{item.label}</div>
                    <div className={`text-sm font-medium mt-0.5 truncate ${item.href ? item.color : 'text-white'}`}>
                      {item.value}
                    </div>
                  </div>
                  {item.href && <ArrowRight size={14} className={`${item.color} opacity-50 flex-shrink-0`} />}
                </div>
              )
              return item.href ? (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={i}>{inner}</div>
              )
            })}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.07]"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-slate-500 text-xs font-semibold mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.01] active:scale-[0.99]"
              >
                {sent ? (
                  <><CheckCircle2 size={16} /> Message Sent!</>
                ) : (
                  <><Send size={14} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
