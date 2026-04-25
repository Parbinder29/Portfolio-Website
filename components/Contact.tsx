export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 5rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Get In <span style={{ color: '#a855f7' }}>Touch</span>
      </h2>
      <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
        Open to internships, collaborations, and interesting projects. Let's connect!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="mailto:parbinders593@gmail.com" style={{
          backgroundColor: '#9333ea', color: 'white',
          padding: '0.75rem 2.5rem', borderRadius: '999px',
          textDecoration: 'none', fontWeight: 600
        }}>parbinders593@gmail.com</a>
        <a href="https://linkedin.com/in/parbinder-singh-323792357"
          target="_blank" rel="noopener noreferrer" style={{
          border: '1px solid #9333ea', color: '#a855f7',
          padding: '0.75rem 2rem', borderRadius: '999px',
          textDecoration: 'none'
        }}>LinkedIn ↗</a>
        <a href="tel:+918899626090" style={{
          border: '1px solid #374151', color: '#9ca3af',
          padding: '0.75rem 2rem', borderRadius: '999px',
          textDecoration: 'none'
        }}>+91-8899626090</a>
      </div>
      <p style={{ marginTop: '4rem', color: '#374151', fontSize: '0.85rem' }}>
        © 2026 Parbinder Singh · Jammu, J&K, India
      </p>
    </section>
  )
}
