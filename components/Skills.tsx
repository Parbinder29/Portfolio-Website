'use client'
import { useState } from 'react'
import { projects, skillGroups, type ProjectKey } from './data'

/* Pick a project and the skills it used light up; the rest fade back. */
export default function Skills() {
  const [focus, setFocus] = useState<ProjectKey | null>(null)

  return (
    <section id="skills" className="section">
      <p className="eyebrow" data-reveal>Skills</p>
      <h2 className="h2" data-reveal>The toolkit</h2>
      <p className="lede" data-reveal>Pick a project to light up what went into it.</p>

      <div className="filter" role="group" aria-label="Highlight skills by project" data-reveal>
        <button aria-pressed={focus === null} onClick={() => setFocus(null)}>All</button>
        {projects.map((p) => (
          <button key={p.key} aria-pressed={focus === p.key} onClick={() => setFocus(focus === p.key ? null : p.key)}>
            {p.title}
          </button>
        ))}
      </div>

      <div className={`skills${focus ? ' is-focused' : ''}`}>
        {skillGroups.map((g, i) => (
          <div key={g.name} className="skill-group" data-reveal style={{ '--i': i % 3 } as React.CSSProperties}>
            <h3>
              <span>0{i + 1}</span> {g.name}
            </h3>
            <ul>
              {g.skills.map((s) => (
                <li key={s.name} className={focus && s.used?.includes(focus) ? 'is-lit' : ''}>
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
