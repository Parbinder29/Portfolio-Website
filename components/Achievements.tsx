'use client'

const achievements = [
  { icon: '🏅', title: 'Design Patent (2025)', desc: 'Granted patent No. 450458-001 for the sensor-based Smart Irrigation Device with team ShivShakti.' },
  { icon: '🏆', title: 'Hacktack25 Winner (2025)', desc: 'Secured 1st place among 50+ teams by building an innovative technical solution.' },
  { icon: '💡', title: 'Innovate25 Winner (2025)', desc: 'Won an innovation challenge with a technology-driven solution.' },
  { icon: '⭐', title: 'NCC Junior Under Officer', desc: 'Led a team of 50+ cadets at Central University of Jammu (Aug 2023 – Feb 2026).' },
  { icon: '🎖️', title: 'All India Thal Sainik Camp 2025', desc: 'Completed one of the most prestigious NCC camps at DG NCC, Delhi.' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" style={{ padding: '6rem 5rem' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
        Achievements & <span style={{ color: '#a855f7' }}>Leadership</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', maxWidth: '900px', margin: '0 auto' }}>
        {achievements.map((a) => (
          <div key={a.title}
            style={{ border: '1px solid #1f2937', borderRadius: '1rem', padding: '1.5rem' }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#9333ea' }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = '#1f2937' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{a.icon}</div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem', color: 'white' }}>{a.title}</h3>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}