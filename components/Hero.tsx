import NightScene from './NightScene'
import { links } from './data'

/* The night is drawn once, at build time, as SVG — only the petals, rain and
   pointer light (NightScene) run in the browser. */

function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

/* a ridge line: a few octaves of smoothed random walk, closed to the bottom */
function ridge(seed: number, base: number, amp: number, step = 25) {
  const r = rng(seed)
  const octaves = [0, 0, 0].map((_, i) => {
    const o = Array.from({ length: 12 }, () => (r() * 2 - 1) / (i + 1))
    o[11] = o[0] // the finer octaves wrap, so close the loop
    return o
  })
  let d = `M0 900 L0 ${base}`
  for (let x = 0; x <= 1600; x += step) {
    let y = 0
    octaves.forEach((o, i) => {
      const f = (x / 1600) * (o.length - 1) * (i + 1) % (o.length - 1)
      const k = Math.floor(f)
      const t = f - k
      const s = t * t * (3 - 2 * t)
      y += (o[k] * (1 - s) + o[k + 1] * s) * amp
    })
    d += ` L${x} ${(base + y).toFixed(1)}`
  }
  return d + ' L1600 900 Z'
}

/* a five-storey pagoda silhouette, tiers narrowing upward with upturned eaves */
function pagoda(cx: number, by: number, s: number) {
  let d = ''
  let y = by
  for (let i = 0; i < 5; i++) {
    const half = (30 - i * 4) * s
    const body = (14 - i) * s
    d += `M${cx - half * 0.55} ${y} h${half * 1.1} v${-body} h${-half * 1.1} Z `
    y -= body
    d += `M${cx - half - 6 * s} ${y + 2 * s} Q${cx - half * 0.4} ${y - 2 * s} ${cx} ${y - 7 * s} Q${cx + half * 0.4} ${y - 2 * s} ${cx + half + 6 * s} ${y + 2 * s} Z `
    y -= 5 * s
  }
  d += `M${cx - 1.2 * s} ${y} h${2.4 * s} v${-26 * s} h${-2.4 * s} Z`
  return d
}

const stars = (() => {
  const r = rng(7)
  return Array.from({ length: 70 }, () => ({ x: r() * 1600, y: r() * 420, r: r() * 1.3 + 0.3, o: r() * 0.6 + 0.2, d: r() * 6 }))
})()

/* blossom clusters along the bough in the top-left corner */
const blossoms = (() => {
  const r = rng(42)
  const pts: { x: number; y: number; r: number; c: number }[] = []
  const along = [
    [0, 40], [90, 70], [180, 92], [270, 104], [350, 130], [420, 150], [210, 40], [300, 20], [120, 140], [60, 190],
  ]
  for (const [bx, by] of along) {
    for (let i = 0; i < 14; i++) {
      pts.push({ x: bx + (r() - 0.5) * 90, y: by + (r() - 0.5) * 60, r: 5 + r() * 11, c: (r() * 3) | 0 })
    }
  }
  return pts
})()

const blossomFill = ['#f6c4d0', '#eda3b6', '#fde3ea']

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-sky" aria-hidden="true" />
      <svg className="hero-land" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <defs>
          <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b2f52" />
            <stop offset="1" stopColor="#1a1628" />
          </linearGradient>
          <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1d1828" />
            <stop offset="1" stopColor="#0e0c15" />
          </linearGradient>
          <radialGradient id="lamp">
            <stop offset="0" stopColor="#ffd9a0" />
            <stop offset="0.4" stopColor="#ff9a4a" stopOpacity="0.6" />
            <stop offset="1" stopColor="#ff6a3a" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="stars">
          {stars.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#f3e9ff" opacity={s.o} style={{ animationDelay: `${s.d}s` }} />
          ))}
        </g>

        <path d={ridge(3, 560, 70)} fill="url(#far)" opacity="0.75" />
        <path d={pagoda(1180, 548, 1.15)} fill="#211b30" />
        <circle cx="1180" cy="500" r="40" fill="url(#lamp)" opacity="0.35" />

        <g className="mist mist-a">
          <ellipse cx="500" cy="610" rx="700" ry="40" />
          <ellipse cx="1350" cy="590" rx="500" ry="34" />
        </g>

        <path d={ridge(11, 680, 55, 20)} fill="url(#mid)" />

        {/* the torii, standing on the near ridge */}
        <g className="torii" transform="translate(760 560)">
          <path d="M-4 0 h12 v138 h-12 Z M88 0 h12 v138 h-12 Z" fill="#b8321f" />
          <path d="M-22 18 h144 v9 h-144 Z" fill="#c63a24" />
          <path d="M-36 -2 Q48 6 132 -2 L136 -12 Q48 -4 -40 -12 Z" fill="#d6452b" />
          <path d="M-40 -12 Q48 -4 136 -12 L138 -16 Q48 -8 -42 -16 Z" fill="#2a1414" />
          <path d="M44 -2 h8 v20 h-8 Z" fill="#c63a24" />
          <circle cx="48" cy="70" r="70" fill="url(#lamp)" className="torii-glow" />
        </g>

        <g className="mist mist-b">
          <ellipse cx="300" cy="760" rx="600" ry="50" />
          <ellipse cx="1300" cy="740" rx="700" ry="46" />
        </g>

        <path d={ridge(29, 800, 30, 16)} fill="#09080e" />

        {/* sakura bough reaching in from the top-left */}
        <g transform="translate(0 78) scale(0.62)">
          <g className="bough">
            <path d="M-20 10 C80 40 160 70 260 100 S400 140 440 160" stroke="#120d14" strokeWidth="14" fill="none" strokeLinecap="round" />
            <path d="M150 70 C200 40 250 30 310 18" stroke="#120d14" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M100 60 C110 110 90 150 60 195" stroke="#120d14" strokeWidth="6" fill="none" strokeLinecap="round" />
            {blossoms.map((b, i) => (
              <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={blossomFill[b.c]} opacity="0.85" />
            ))}
          </g>
        </g>
      </svg>

      <NightScene />

      <div className="hero-inner">
        <p className="katakana" aria-hidden="true">パルビンダー・シン</p>

        <div className="hero-copy">
          <p className="eyebrow rise" style={{ '--d': '0.1s' } as React.CSSProperties}>
            <span className="dot" /> B.Tech CSE · Central University of Jammu
          </p>
          <h1 className="hero-name rise" style={{ '--d': '0.2s' } as React.CSSProperties}>
            Parbinder <em>Singh</em>
          </h1>
          <p className="hero-line rise" style={{ '--d': '0.35s' } as React.CSSProperties}>
            I build perception that keeps working when a sensor fails, models that sort what
            we throw away, and fields that water themselves.
          </p>
          <div className="hero-actions rise" style={{ '--d': '0.5s' } as React.CSSProperties}>
            <a href="#works" className="btn btn-shu">See the work</a>
            <a href="#contact" className="btn btn-ghost">Say hello</a>
            <div className="socials">
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
              </a>
              <a href={links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.48 0a1.37 1.37 0 0 0-.96.44L7.12 6.2l-2.86 3.06a5.27 5.27 0 0 0-1.24 2.17 5.5 5.5 0 0 0 .1 3.29 5.1 5.1 0 0 0 1.18 1.94l4.34 4.36a5.4 5.4 0 0 0 7.5.15l2.6-2.43a1.37 1.37 0 1 0-1.87-2l-2.61 2.43a2.65 2.65 0 0 1-3.68-.07l-4.33-4.36a2.4 2.4 0 0 1-.05-3.38l2.85-3.05 5.32-5.69A1.37 1.37 0 0 0 13.48 0Zm-2.87 13.9a1.37 1.37 0 1 0 0 2.74h9.98a1.37 1.37 0 1 0 0-2.74h-9.98Z" /></svg>
              </a>
            </div>
          </div>
          <p className="hint rise" style={{ '--d': '0.9s' } as React.CSSProperties}>
            <span className="hint-mouse">Move through the night · click to shake the branches</span>
            <span className="hint-touch">Tap the night to shake the branches</span>
          </p>
        </div>

        <figure className="portrait rise" style={{ '--d': '0.3s' } as React.CSSProperties}>
          <div className="moon" aria-hidden="true" />
          <div className="window">
            <img src="/portrait.webp" alt="Parbinder Singh" width={480} height={562} fetchPriority="high" decoding="async" />
          </div>
          <figcaption>
            <span>Jammu</span>
            <span className="sep" />
            <span>India</span>
          </figcaption>
        </figure>
      </div>

      <dl className="tally">
        <div><dt>Design patent</dt><dd>1</dd></div>
        <div><dt>Competition wins</dt><dd>2</dd></div>
        <div><dt>ATMSF mAP@0.5</dt><dd>89.1<small>%</small></dd></div>
        <div><dt>Cadets led</dt><dd>50<small>+</small></dd></div>
      </dl>
    </header>
  )
}
