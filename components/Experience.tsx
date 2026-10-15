import SectionHead from './SectionHead'
import { experience } from './data'

export default function Experience() {
  return (
    <section id="path" className="section section-alt">
      <SectionHead num="二" jp="経験" romaji="keiken · experience" title={<>The path <em>so far</em></>} />
      <ol className="path">
        {experience.map((e) => (
          <li key={e.org} className="stop" data-reveal>
            <span className="stop-dot" aria-hidden="true" />
            <div className="stop-card">
              <p className="stop-kind">{e.kind}</p>
              <h3 className="stop-org">{e.org}</h3>
              <p className="stop-role">{e.role}</p>
              <p className="stop-desc">{e.desc}</p>
              <div className="stop-foot">
                <span className="chips">
                  {e.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
                <a href={e.href} target="_blank" rel="noopener noreferrer" className="link-cert">
                  View certificate <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
