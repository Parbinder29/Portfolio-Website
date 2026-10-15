import SectionHead from './SectionHead'
import { projects } from './data'

/* Each project hangs like an ema, the wooden wish plaques at a shrine. The
   whole plaque is the link. */
export default function Projects() {
  return (
    <section id="works" className="section">
      <SectionHead
        num="一"
        jp="作品"
        romaji="sakuhin · works"
        title={<>Three things I&rsquo;ve <em>built</em></>}
        lede="Each plaque opens the real thing: the code on GitHub, or the project file."
      />
      <div className="ema-row">
        {projects.map((p, i) => (
          <a
            key={p.key}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ema"
            data-reveal
            style={{ '--i': i } as React.CSSProperties}
          >
            <span className="ema-cord" aria-hidden="true" />
            <span className="ema-board">
              <span className="ema-kanji" aria-hidden="true">{p.kanji}</span>
              <span className="ema-top">
                <span className="ema-no">0{i + 1}</span>
                <span className="ema-field">{p.field}</span>
              </span>
              <span className="ema-title">{p.title}</span>
              <span className="ema-full">{p.full}</span>
              <span className="ema-hook">{p.hook}</span>
              <span className="ema-stat">
                <strong>{p.stat.value}</strong>
                <span>{p.stat.label}</span>
              </span>
              <span className="ema-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
              <span className="ema-cta">
                {p.cta} <span aria-hidden="true">↗</span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
