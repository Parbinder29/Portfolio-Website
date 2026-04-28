'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section" style={{
      minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5rem', gap: '3rem', flexWrap: 'wrap',
    }}>
      {/* Left — text */}
      <div style={{ flex: 1, minWidth: '260px' }}>
        <p style={{ color: '#a855f7', fontFamily: 'monospace', marginBottom: '1rem' }}>Hi, I'm</p>
        <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 1rem', lineHeight: 1.1 }}>
          Parbinder Singh
        </h1>
        <h2 className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '1.5rem' }}>
          Full Stack Developer & IoT Engineer
        </h2>
        <p style={{ color: '#4b5563', maxWidth: '500px', lineHeight: 1.8, marginBottom: '2rem' }}>
          B.Tech CSE student at Central University of Jammu. Patent holder,
          hackathon winner, NCC Junior Under Officer, passionate about IoT, AI/ML
          and building real-world solutions.
        </p>
        <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{ backgroundColor: '#9333ea', color: 'white', padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 600 }}>View My Work</a>
          <a href="#contact" style={{ border: '1px solid #374151', color: 'white', padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none' }}>Contact Me</a>
          <a href="https://linkedin.com/in/parbinder-singh-323792357" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid #9333ea', color: '#a855f7', padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none' }}>LinkedIn ↗</a>
          <a href="https://github.com/Parbinder29" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid #374151', color: '#9ca3af', padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none' }}>GitHub ↗</a>
          <a href="https://leetcode.com/Parbinder2005" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid #f59e0b', color: '#f59e0b', padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none' }}>LeetCode ↗</a>
        </div>
      </div>

      {/* Right — photo */}
      <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
        <div className="hero-photo" style={{
          width: '280px', height: '280px', borderRadius: '50%',
          overflow: 'hidden', border: '4px solid #9333ea',
          boxShadow: '0 0 40px rgba(147,51,234,0.3)',
        }}>
          <Image
            src="/profile.jpeg"
            alt="Parbinder Singh"
            width={280} height={280}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            priority
          />
        </div>
      </div>
    </section>
  )
}