import ProjectArt from './ProjectArt'
import { ScrollTilt } from './Interactive'
import { Logo } from './Navbar'
import { ArrowRight, ArrowUpRight, FileText, GitHub, LeetCode, LinkedIn, Mail, Phone } from './Icons'
import { experience, honours, links, projects } from './data'

export function Work() {
  return (
    <section id="work" className="section work">
      <div className="work-intro">
        <div className="sticky">
          <p className="eyebrow" data-reveal>Selected work</p>
          <h2 className="h2" data-reveal>Things I&rsquo;ve built that actually run</h2>
          <p className="lede" data-reveal>
            Three projects across computer vision, IoT and deep learning. Each one started as a
            real-world problem and ended with something you can open and check.
          </p>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-link" data-reveal>
            All repositories on GitHub <ArrowRight />
          </a>
        </div>
      </div>

      <div className="work-list">
        {projects.map((p) => (
          <a key={p.key} href={p.href} target="_blank" rel="noopener noreferrer" className="card" data-tilt>
            {p.sticker && <span className="sticker sticker-card">{p.sticker}</span>}
            <span className="card-frame">
              <ProjectArt k={p.key} />
              <span className="card-open">
                {p.cta} <ArrowUpRight />
              </span>
            </span>
            <span className="card-head">
              <span className="card-title">{p.title}</span>
              <span className="card-metric">{p.metric}</span>
            </span>
            <span className="card-cat">{p.category}</span>
            <span className="card-desc">{p.desc}</span>
            <span className="card-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>
          </a>
        ))}
      </div>
      <ScrollTilt />
    </section>
  )
}

const ticker = ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Sensor fusion', 'ESP32', 'Arduino', 'Next.js', 'React', 'Supabase', 'Gradio', 'Docker']

export function Ticker() {
  const row = ticker.map((t) => (
    <span key={t}>
      {t}
      <i aria-hidden="true">✺</i>
    </span>
  ))
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row}
        {row}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow" data-reveal>Experience</p>
      <h2 className="h2" data-reveal>Where I&rsquo;ve put it to work</h2>
      <ol className="rows">
        {experience.map((e, i) => (
          <li key={e.org} data-reveal>
            <a href={e.href} target="_blank" rel="noopener noreferrer" className="row">
              <span className="row-num">0{i + 1}</span>
              <span className="row-main">
                <span className="row-title">{e.org}</span>
                <span className="row-role">{e.role}</span>
              </span>
              <span className="row-desc">{e.desc}</span>
              <span className="row-cta">
                <span>Certificate</span>
                <ArrowUpRight size={20} />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Honours() {
  return (
    <section id="honours" className="section">
      <p className="eyebrow" data-reveal>Honours &amp; leadership</p>
      <h2 className="h2" data-reveal>Wins, a patent and the uniform</h2>
      <div className="honours">
        {honours.map((h, i) => {
          const inner = (
            <>
              <span className="honour-tag">{h.tag}</span>
              <span className="honour-title">{h.title}</span>
              <span className="honour-desc">{h.desc}</span>
              {h.href && (
                <span className="honour-cta">
                  {h.cta ?? 'View certificate'} <ArrowUpRight />
                </span>
              )}
            </>
          )
          const style = { '--i': i } as React.CSSProperties
          return h.href ? (
            <a key={h.title} href={h.href} target="_blank" rel="noopener noreferrer" className="honour" data-reveal style={style}>
              {inner}
            </a>
          ) : (
            <div key={h.title} className="honour honour-static" data-reveal style={style}>
              {inner}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function Cta() {
  return (
    <section id="contact" className="cta">
      <h2 className="cta-title" data-reveal>Got a problem worth solving?</h2>
      <div className="cta-btns" data-reveal>
        <a href={`mailto:${links.email}`} className="btn btn-ink">
          Get in touch <ArrowRight />
        </a>
        <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline-ink">
          Resume <ArrowUpRight />
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <Logo size={34} />
        <a href={links.resume} target="_blank" rel="noopener noreferrer" className="flink"><FileText size={16} /> Resume</a>
      </div>
      <div className="footer-col">
        <a href={`mailto:${links.email}`} className="flink"><Mail size={16} /> {links.email}</a>
        <a href={`tel:${links.phone.replace(/-/g, '')}`} className="flink"><Phone size={16} /> {links.phone}</a>
      </div>
      <div className="footer-col">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flink"><LinkedIn size={16} /> LinkedIn</a>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="flink"><GitHub size={16} /> GitHub</a>
        <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="flink"><LeetCode size={16} /> LeetCode</a>
      </div>
      <div className="footer-col footer-end">
        <p>© 2026 Parbinder Singh.</p>
        <p>Jammu, J&amp;K, India · <span className="accent">built from scratch</span>.</p>
      </div>
    </footer>
  )
}
