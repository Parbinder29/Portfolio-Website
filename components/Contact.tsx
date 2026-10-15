import { Seal } from './Navbar'
import { links } from './data'

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <span className="contact-kanji" aria-hidden="true">縁</span>
      <div className="contact-inner" data-reveal>
        <p className="section-romaji">五 · en · connection</p>
        <h2 className="contact-title">
          Let&rsquo;s make something <em>worth remembering</em>.
        </h2>
        <p className="section-lede">Open to internships, research collaborations and interesting problems.</p>
        <a className="contact-mail" href={`mailto:${links.email}`}>
          {links.email}
          <span aria-hidden="true">→</span>
        </a>
        <div className="contact-links">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={links.leetcode} target="_blank" rel="noopener noreferrer">LeetCode ↗</a>
          <a href={`tel:${links.phone.replace(/-/g, '')}`}>{links.phone}</a>
        </div>
      </div>
      <div className="foot">
        <Seal size={30} />
        <span>© 2026 Parbinder Singh · Jammu, J&amp;K, India</span>
      </div>
    </footer>
  )
}
