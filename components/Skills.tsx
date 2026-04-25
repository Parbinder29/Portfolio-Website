const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['C', 'Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'React.js', 'Node.js', 'Next.js'],
  },
  {
    category: 'IoT & Embedded',
    skills: ['Arduino', 'Raspberry Pi', 'ESP32', 'ESP8266', 'Sensor Integration'],
  },
  {
    category: 'AI / ML',
    skills: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Gradio'],
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Jupyter Notebook', 'PostgreSQL'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 5rem', backgroundColor: '#111' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
        My <span style={{ color: '#a855f7' }}>Skills</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {skillGroups.map(group => (
          <div key={group.category}>
            <p style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              {group.category}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {group.skills.map(skill => (
                <span key={skill} style={{
                  border: '1px solid #374151', padding: '0.4rem 1.2rem',
                  borderRadius: '999px', color: '#d1d5db', fontSize: '0.85rem'
                }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}