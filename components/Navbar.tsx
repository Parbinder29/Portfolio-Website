'use client'
import { useEffect, useState } from 'react'
import { links } from './data'

const items = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'honours', label: 'Honours' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="9" data-ac="" />
      <text x="20" y="26.5" textAnchor="middle" fontFamily="var(--font-archivo), sans-serif" fontWeight="900" fontSize="17" fill="var(--bg)" style={{ fontVariationSettings: '"wdth" 125' }}>
        PS
      </text>
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
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
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      io.disconnect()
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Main">
      <div className="nav-bar">
        <a href="#about" className="brand" onClick={() => setOpen(false)} aria-label="Parbinder Singh, back to top">
          <Logo />
          <span className="brand-name">Parbinder Singh</span>
          <span className="brand-tag">[ AI · IoT · Web ]</span>
        </a>
        <ul className="nav-links">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className={active === i.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
                {i.label}
              </a>
            </li>
          ))}
          <li className="nav-resume">
            <a href={links.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          </li>
        </ul>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <i />
          <i />
          <i />
        </button>
      </div>
    </nav>
  )
}
