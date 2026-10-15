import type { ProjectKey } from './data'

/* Cover art for each project: small diagrams of what the thing actually does,
   drawn in ink and the accent colour on paper. Motion is CSS, paused for reduced motion. */

const INK = '#15140f'
const LIME = '#9ea35e' // overridden by the [data-ac] rule in globals.css
const GREY = '#8d897c'
const label = { fontFamily: 'var(--font-archivo), sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 1.2 }

function Atmsf() {
  const sensors = [
    { y: 34, name: 'RGB', c: 0.94 },
    { y: 120, name: 'THERMAL', c: 0.12, fault: true },
    { y: 206, name: 'LIDAR', c: 0.88 },
  ]
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: RGB, thermal and LiDAR streams scored for reliability and fused into one detection">
      <rect width="400" height="300" fill="#efece2" />
      {sensors.map((s) => (
        <g key={s.name}>
          <path className="flow" d={`M118 ${s.y + 30} C150 ${s.y + 30} 160 150 192 150`} stroke={s.fault ? GREY : INK} strokeWidth="2" fill="none" strokeDasharray="5 5" />
          <g className={s.fault ? 'flicker' : undefined}>
            <rect x="24" y={s.y} width="94" height="60" rx="4" fill={s.name === 'THERMAL' ? INK : '#dcd8ca'} />
            {s.name === 'RGB' && (
              <g>
                <path d={`M24 ${s.y + 40} H118`} stroke={GREY} />
                <circle cx="70" cy={s.y + 22} r="5" fill={INK} />
                <path d={`M70 ${s.y + 27} v14 M70 ${s.y + 41} l-5 10 M70 ${s.y + 41} l5 10 M63 ${s.y + 32} h14`} stroke={INK} strokeWidth="3" />
              </g>
            )}
            {s.name === 'THERMAL' && (
              <g>
                <ellipse cx="70" cy={s.y + 32} rx="12" ry="20" fill={LIME} data-ac="" opacity="0.35" />
                <path d={`M30 ${s.y + 10} l80 40 M30 ${s.y + 30} l60 28 M50 ${s.y + 4} l60 36`} stroke="#3a3830" strokeWidth="3" />
              </g>
            )}
            {s.name === 'LIDAR' &&
              Array.from({ length: 40 }, (_, i) => (
                <circle key={i} cx={32 + (i % 10) * 9 + ((i * 7) % 4)} cy={s.y + 12 + Math.floor(i / 10) * 12 + ((i * 3) % 5)} r="1.8" fill={INK} opacity={0.35 + ((i * 13) % 6) / 10} />
              ))}
          </g>
          <text x="24" y={s.y - 6} style={label} fill={INK}>{s.name}</text>
          <rect x="24" y={s.y + 64} width="94" height="5" fill="#d3cfc0" />
          <rect className="conf" x="24" y={s.y + 64} width={94 * s.c} height="5" fill={s.fault ? '#c2412d' : INK} />
          {s.fault && <text x="118" y={s.y - 6} textAnchor="end" style={{ ...label, fontSize: 9 }} fill="#c2412d">FAULT</text>}
        </g>
      ))}
      <rect x="192" y="118" width="74" height="64" rx="6" fill={INK} />
      <text x="229" y="148" textAnchor="middle" style={{ ...label, fontSize: 13 }} fill={LIME} data-ac="">ACAF</text>
      <text x="229" y="164" textAnchor="middle" style={{ ...label, fontSize: 8, letterSpacing: 0.6 }} fill="#bdb9aa">FUSION</text>
      <path className="flow" d="M266 150 H296" stroke={INK} strokeWidth="2" strokeDasharray="5 5" />
      <rect x="296" y="96" width="84" height="108" rx="4" fill="#dcd8ca" />
      <path d="M296 170 H380" stroke={GREY} />
      <circle cx="338" cy="128" r="6" fill={INK} />
      <path d="M338 134 v18 M338 152 l-6 13 M338 152 l6 13 M329 140 h18" stroke={INK} strokeWidth="3.5" />
      <rect className="bbox" x="320" y="114" width="36" height="58" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="320" y="104" width="44" height="11" fill={LIME} data-ac="" />
      <text x="323" y="112.5" style={{ ...label, fontSize: 7.5, letterSpacing: 0.3 }} fill={INK}>person .91</text>
      <text x="296" y="90" style={label} fill={INK}>OUTPUT</text>
    </svg>
  )
}

function Irrigation() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: a soil-moisture probe reports to an ESP32 that switches the pump on">
      <rect width="400" height="300" fill="#efece2" />
      <rect y="196" width="400" height="104" fill="#2a2822" />
      {Array.from({ length: 60 }, (_, i) => (
        <circle key={i} cx={(i * 53) % 400} cy={206 + ((i * 37) % 90)} r={1 + (i % 3) * 0.6} fill="#4a473e" />
      ))}
      {[60, 130, 270, 340].map((x, i) => (
        <g key={x} className="sprout" style={{ animationDelay: `${i * 0.4}s` }}>
          <path d={`M${x} 196 v-26`} stroke="#6b8f1a" strokeWidth="3" />
          <path d={`M${x} 178 c-14 -2 -18 -12 -16 -18 c10 0 16 8 16 18 Z`} fill={LIME} data-ac="" stroke={INK} strokeWidth="1" />
          <path d={`M${x} 184 c14 -2 18 -12 16 -18 c-10 0 -16 8 -16 18 Z`} fill={LIME} data-ac="" stroke={INK} strokeWidth="1" />
        </g>
      ))}
      <path d="M0 70 H400" stroke={INK} strokeWidth="6" />
      {[60, 130, 270, 340].map((x) => (
        <g key={x}>
          <rect x={x - 5} y="66" width="10" height="12" fill={INK} />
          {[0, 1, 2].map((d) => (
            <path key={d} className="drop" d={`M${x} 88 q-4 7 0 10 q4 -3 0 -10 Z`} fill={INK} style={{ animationDelay: `${d * 0.45 + (x % 7) * 0.05}s` }} />
          ))}
        </g>
      ))}
      <rect x="196" y="160" width="10" height="70" fill={GREY} />
      <path d="M198 230 v24 M204 230 v24" stroke="#bdb9aa" strokeWidth="3" />
      <path d="M201 160 C201 130 170 140 170 112" stroke={INK} strokeWidth="2" fill="none" />
      <rect x="130" y="90" width="84" height="24" rx="3" fill={INK} />
      <text x="172" y="106" textAnchor="middle" style={{ ...label, fontSize: 10 }} fill={LIME} data-ac="">ESP32</text>
      <rect x="222" y="86" width="112" height="44" rx="4" fill={INK} />
      <rect x="228" y="92" width="100" height="32" rx="2" fill="#2a2a24" />
      <text x="234" y="105" style={{ ...label, fontSize: 9, letterSpacing: 0.8 }} fill={LIME} data-ac="">SOIL 34%</text>
      <text className="blink" x="234" y="118" style={{ ...label, fontSize: 9, letterSpacing: 0.8 }} fill={LIME} data-ac="">PUMP ON</text>
      <g transform="translate(340 30)">
        <path d="M-24 0 a24 24 0 0 1 48 0" fill="none" stroke="#d3cfc0" strokeWidth="7" />
        <path d="M-24 0 a24 24 0 0 1 10 -19.5" fill="none" stroke="#c2412d" strokeWidth="7" />
        <path className="needle" d="M0 0 L-14 -12" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <circle r="3" fill={INK} />
      </g>
      <text x="24" y="40" style={label} fill={INK}>MOISTURE-AWARE WATERING</text>
    </svg>
  )
}

const classes = ['CARDBOARD', 'GLASS', 'METAL', 'PAPER', 'PLASTIC', 'TRASH']

function ClassIcon({ i, x, y, hot }: { i: number; x: number; y: number; hot: boolean }) {
  const c = hot ? INK : INK
  const icons = [
    <path key="0" d={`M${x - 18} ${y - 6} l18 -9 l18 9 v20 l-18 9 l-18 -9 Z M${x - 18} ${y - 6} l18 9 l18 -9 M${x} ${y + 3} v20`} fill="none" stroke={c} strokeWidth="2" />,
    <path key="1" d={`M${x - 4} ${y - 20} h8 v8 c6 4 8 8 8 14 v18 h-24 v-18 c0 -6 2 -10 8 -14 Z`} fill="none" stroke={c} strokeWidth="2" />,
    <g key="2"><rect x={x - 12} y={y - 16} width="24" height="34" rx="3" fill="none" stroke={c} strokeWidth="2" /><path d={`M${x - 12} ${y - 8} h24 M${x - 12} ${y + 10} h24`} stroke={c} strokeWidth="2" /></g>,
    <path key="3" d={`M${x - 14} ${y - 18} h20 l8 8 v28 h-28 Z M${x - 8} ${y - 4} h16 M${x - 8} ${y + 3} h16 M${x - 8} ${y + 10} h10`} fill="none" stroke={c} strokeWidth="2" />,
    <path key="4" d={`M${x - 5} ${y - 22} h10 v6 l5 6 v28 c0 3 -2 4 -4 4 h-12 c-2 0 -4 -1 -4 -4 v-28 l5 -6 Z M${x - 9} ${y} h18`} fill="none" stroke={c} strokeWidth="2" />,
    <path key="5" d={`M${x - 16} ${y - 8} q16 -18 32 0 l-4 26 h-24 Z M${x - 4} ${y - 16} l4 -6 l4 6`} fill="none" stroke={c} strokeWidth="2" />,
  ]
  return icons[i]
}

function Garbage() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: six waste classes with the model picking plastic at 97 percent">
      <rect width="400" height="300" fill="#efece2" />
      {classes.map((name, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 24 + col * 122
        const y = 24 + row * 104
        const hot = name === 'PLASTIC'
        return (
          <g key={name}>
            <rect x={x} y={y} width="108" height="90" rx="6" fill={hot ? LIME : '#dcd8ca'} data-ac={hot ? '' : undefined} stroke={hot ? INK : 'none'} strokeWidth="2" />
            <ClassIcon i={i} x={x + 54} y={y + 38} hot={hot} />
            <text x={x + 54} y={y + 80} textAnchor="middle" style={{ ...label, fontSize: 9 }} fill={INK}>{name}</text>
          </g>
        )
      })}
      <rect className="scan" x="18" y="20" width="4" height="200" fill={INK} opacity="0.5" />
      <rect x="24" y="242" width="352" height="36" rx="6" fill={INK} />
      <text x="38" y="264" style={{ ...label, fontSize: 10 }} fill="#efece2">PREDICTION</text>
      <text x="128" y="264" style={{ ...label, fontSize: 10 }} fill={LIME} data-ac="">PLASTIC</text>
      <rect x="200" y="255" width="130" height="10" rx="2" fill="#3a3830" />
      <rect className="conf" x="200" y="255" width="126" height="10" rx="2" fill={LIME} data-ac="" />
      <text x="338" y="264" style={{ ...label, fontSize: 10 }} fill="#efece2">0.97</text>
    </svg>
  )
}

export default function ProjectArt({ k }: { k: ProjectKey }) {
  if (k === 'atmsf') return <Atmsf />
  if (k === 'irrigation') return <Irrigation />
  return <Garbage />
}
