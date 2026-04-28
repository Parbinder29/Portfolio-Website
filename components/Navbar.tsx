'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%',
      backgroundColor: 'rgba(10,10,10,0.9)',
      backdropFilter: 'blur(10px)', zIndex: 100,
      borderBottom: '1px solid #222', boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '1rem 2rem',
      }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#a855f7' }}>
          Parbinder Singh
        </span>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}
          id="desktop-nav">
          <a href="#projects" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Projects</a>
          <a href="#skills" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Skills</a>
          <a href="#stats" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Stats</a>
          <a href="#achievements" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Achievements</a>
          <a href="#contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            color: 'white', fontSize: '1.5rem', cursor: 'pointer',
          }}
          id="hamburger"
          aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0',
          backgroundColor: '#111', borderTop: '1px solid #222',
        }}>
          {['projects', 'skills', 'stats', 'achievements', 'contact'].map((item) => (
            <a key={item} href={'#' + item}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#9ca3af', textDecoration: 'none',
                padding: '1rem 2rem', borderBottom: '1px solid #1f2937',
                fontSize: '0.95rem', textTransform: 'capitalize',
              }}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}

      {/* CSS to show hamburger on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #desktop-nav { display: none !important; }
          #hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}