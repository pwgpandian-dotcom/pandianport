'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!el.current) return
      el.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={el}
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[0]"
      style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(99,102,241,0.03) 40%, transparent 70%)',
        transition: 'transform 0.12s ease-out',
        willChange: 'transform',
      }}
    />
  )
}
