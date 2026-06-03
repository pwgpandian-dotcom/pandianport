import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pandian .D — Full Stack Developer',
  description:
    'Full Stack Developer building enterprise applications, ERP systems, SaaS products, and AI-powered solutions. Based in Bengaluru.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, ERP, SaaS, AI, Bengaluru, Software Engineer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030712] text-white antialiased">{children}</body>
    </html>
  )
}
