import SectionHead from './SectionHead'
import { honours } from './data'

export default function Honours() {
  return (
    <section id="honours" className="section">
      <SectionHead
        num="三"
        jp="栄誉"
        romaji="eiyo · honours"
        title={<>Wins, a patent &amp; <em>the uniform</em></>}
        lede="The ones with certificates open when you click them."
      />
      <div className="honours">
        {honours.map((h, i) => {
          const body = (
            <>
              <span className="stamp" aria-hidden="true">{h.seal}</span>
              <span className="honour-year">{h.year}</span>
              <span className="honour-title">{h.title}</span>
              <span className="honour-desc">{h.desc}</span>
              {h.href && (
                <span className="honour-cta">
                  View certificate <span aria-hidden="true">↗</span>
                </span>
              )}
            </>
          )
          const style = { '--i': i } as React.CSSProperties
          return h.href ? (
            <a key={h.title} href={h.href} target="_blank" rel="noopener noreferrer" className="honour is-link" data-reveal style={style}>
              {body}
            </a>
          ) : (
            <div key={h.title} className="honour" data-reveal style={style}>
              {body}
            </div>
          )
        })}
      </div>
    </section>
  )
}
