'use client'
import { useEffect, useState } from 'react'

const items = [
  { id: 'works', label: 'Works', jp: '作品' },
  { id: 'path', label: 'Experience', jp: '経験' },
  { id: 'honours', label: 'Honours', jp: '栄誉' },
  { id: 'craft', label: 'Skills', jp: '技' },
  { id: 'contact', label: 'Contact', jp: '縁' },
]

export function Seal({ size = 40 }: { size?: number }) {
  return (
    <svg className="seal" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="7" fill="var(--shu)" />
      <rect x="5.5" y="5.5" width="37" height="37" rx="4.5" fill="none" stroke="var(--washi)" strokeWidth="1.6" opacity="0.9" />
      <text x="24" y="31.5" textAnchor="middle" fontFamily="var(--font-display), serif" fontWeight="700" fontSize="19" fill="var(--washi)" letterSpacing="-0.5">PS</text>
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    items.forEach((i) => {
      const el = document.getElementById(i.id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`} aria-label="Main">
      <a href="#top" className="brand" aria-label="Parbinder Singh, back to top" onClick={() => setOpen(false)}>
        <Seal />
        <span className="brand-name">Parbinder Singh</span>
      </a>

      <ul className="nav-links">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className={active === i.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              <span className="jp" aria-hidden="true">{i.jp}</span>
              {i.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <i />
        <i />
      </button>
    </nav>
  )
}
