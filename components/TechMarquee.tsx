'use client'

const techs = [
  'React.js', 'Next.js 14', 'Node.js', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'Express.js', 'Tailwind CSS', 'Framer Motion', 'REST APIs',
  'JWT Auth', 'Docker', 'Vercel', 'ERP Systems', 'Claude AI',
  'OpenAI', 'Git', 'Shopify API', 'SaaS Architecture', 'Agile',
]

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.07] text-slate-400 text-sm font-medium flex-shrink-0 select-none">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 flex-shrink-0" />
      {label}
    </span>
  )
}

export default function TechMarquee() {
  const doubled = [...techs, ...techs]

  return (
    <div className="relative py-5 overflow-hidden border-y border-white/[0.04] bg-[#030712]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-3 animate-marquee w-max">
        {doubled.map((t, i) => (
          <Pill key={i} label={t} />
        ))}
      </div>
    </div>
  )
}
