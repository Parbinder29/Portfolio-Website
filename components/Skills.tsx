'use client'
import { useState } from 'react'
import SectionHead from './SectionHead'
import { projects, skillGroups, type ProjectKey } from './data'

/* Pick a project and the skills it used light up; the rest fade back. */
export default function Skills() {
  const [focus, setFocus] = useState<ProjectKey | null>(null)

  return (
    <section id="craft" className="section section-alt">
      <SectionHead
        num="四"
        jp="技"
        romaji="waza · skills"
        title={<>The <em>toolkit</em></>}
        lede="Pick a project to see what went into it."
      />

      <div className="filter" role="group" aria-label="Highlight skills by project" data-reveal>
        <button aria-pressed={focus === null} onClick={() => setFocus(null)}>All</button>
        {projects.map((p) => (
          <button key={p.key} aria-pressed={focus === p.key} onClick={() => setFocus(focus === p.key ? null : p.key)}>
            {p.title}
          </button>
        ))}
      </div>

      <div className={`skills${focus ? ' is-focused' : ''}`}>
        {skillGroups.map((g) => (
          <div key={g.name} className="skill-group" data-reveal>
            <h3>{g.name}</h3>
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
