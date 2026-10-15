import { HelloWord, Stamp, CountUp } from './Interactive'
import { ArrowRight, ArrowUpRight, GitHub, LinkedIn, LeetCode, Mail } from './Icons'
import { links } from './data'

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-panel">
        <HelloWord />
        <span className="sticker sticker-hero">Open to opportunities</span>

        <div className="hero-photo">
          <Stamp>
            <div className="stamp">
              <div className="stamp-inner">
                <img src="/portrait.webp" alt="Parbinder Singh" width={480} height={562} fetchPriority="high" decoding="async" />
                <div className="stamp-caption">
                  <span>India</span>
                  <span>AI · IoT · Web</span>
                </div>
              </div>
            </div>
            <svg className="postmark" viewBox="0 0 140 100" aria-hidden="true">
              <defs>
                <path id="pm-ring" d="M50 50 m-34 0 a34 34 0 1 1 68 0 a34 34 0 1 1 -68 0" />
              </defs>
              <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <text fontSize="9.5" fontWeight="700" letterSpacing="2.2" fill="currentColor">
                <textPath href="#pm-ring">JAMMU · J&amp;K · INDIA ·</textPath>
              </text>
              <text x="50" y="55" textAnchor="middle" fontSize="15" fontWeight="900" fill="currentColor">PS</text>
              <path d="M96 34 q8 -6 16 0 t16 0 t12 0 M96 50 q8 -6 16 0 t16 0 t12 0 M96 66 q8 -6 16 0 t16 0 t12 0" fill="none" stroke="currentColor" strokeWidth="2.2" />
            </svg>
          </Stamp>
          <div className="social-grid">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a>
            <a href={links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><LeetCode /></a>
            <a href={`mailto:${links.email}`} aria-label="Email"><Mail /></a>
          </div>
        </div>

        <div className="hero-name">
          <p className="hero-name-big">Parbinder<br />Singh</p>
          <p className="hero-name-role">B.Tech CSE · Central University of Jammu</p>
        </div>
      </div>

      <div className="hero-text">
        <p className="hero-lead" data-reveal>
          I build things that see, sense and sort: perception that keeps working when a sensor
          fails, fields that water themselves, and models that know their plastic from their paper.
        </p>
        <p className="hero-sub" data-reveal>
          AI/ML, IoT and full-stack developer. Patent holder, two-time competition winner and NCC
          Junior Under Officer. Based in Jammu, India.
        </p>
        <div className="hero-btns" data-reveal>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            Resume <ArrowRight />
          </a>
          <a href="#work" className="btn btn-cream">
            Projects <ArrowUpRight />
          </a>
        </div>
      </div>

      <dl className="stats">
        <div>
          <dd><CountUp to={1} /></dd>
          <dt>Design patent granted</dt>
        </div>
        <div>
          <dd><CountUp to={2} /></dd>
          <dt>Competition wins</dt>
        </div>
        <div>
          <dd><CountUp to={89.1} decimals={1} suffix="%" /></dd>
          <dt>ATMSF mAP@0.5</dt>
        </div>
        <div>
          <dd><CountUp to={50} suffix="+" /></dd>
          <dt>Cadets led in NCC</dt>
        </div>
      </dl>
    </section>
  )
}
