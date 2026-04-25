'use client'

const projects = [
  {
    title: 'Smart Automated Irrigation System',
    desc: 'IoT-based system that monitors real-time soil moisture & weather to automate crop irrigation. Received a Design Patent (No. 450458-001).',
    tag: 'IoT',
    badge: 'Patented',
  },
  {
    title: 'UVIN GROUP – Web Developer Intern',
    desc: 'Contributed to frontend development for a startup project. Built pages and improved functionality & user experience.',
    tag: 'Web Dev',
    badge: 'Internship',
  },
  {
    title: 'Garbage Classification Model',
    desc: 'Automated garbage classification using EfficientNetV2-B2 CNN architecture for smart waste management.',
    tag: 'AI / ML',
    badge: 'Deep Learning',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 5rem' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
        My <span style={{ color: '#a855f7' }}>Projects</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p) => (
          <div key={p.title} style={{ border: '1px solid #1f2937', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#9333ea' }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = '#1f2937' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#a855f7', backgroundColor: '#1a0a2e', padding: '4px 12px', borderRadius: '999px' }}>{p.tag}</span>
              <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{p.badge}</span>
            </div>
            <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'white' }}>{p.title}</h3>
            <p style={{ color: '#6b7280', margin: 0, lineHeight: 1.7, fontSize: '0.9rem' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}