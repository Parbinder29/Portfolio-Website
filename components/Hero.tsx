import { HelloWord, Polaroid, CountUp } from './Interactive'
import { ArrowRight, ArrowUpRight, GitHub, LinkedIn, LeetCode, Mail } from './Icons'
import { links } from './data'

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-panel">
        <HelloWord />
        <span className="sticker sticker-hero">Open to opportunities</span>

        <div className="hero-photo">
          <Polaroid>
            <img src="/portrait.webp" alt="Parbinder Singh" width={480} height={562} fetchPriority="high" decoding="async" />
          </Polaroid>
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
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-lime">
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
