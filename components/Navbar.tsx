'use client'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'rgba(10,10,10,0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 100,
      borderBottom: '1px solid #222',
      boxSizing: 'border-box',
    }}>

      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#a855f7' }}>
        Parbinder Singh
      </span>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#projects" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Projects</a>
        <a href="#skills" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Skills</a>
        <a href="#achievements" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Achievements</a>
        <a href="#contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
      </div>

    </nav>
  )
}