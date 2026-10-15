export default function SectionHead({ num, jp, romaji, title, lede }: { num: string; jp: string; romaji: string; title: React.ReactNode; lede?: string }) {
  return (
    <div className="section-head" data-reveal>
      <div className="section-mark" aria-hidden="true">
        <span className="section-num">{num}</span>
        <span className="section-jp">{jp}</span>
      </div>
      <p className="section-romaji">{romaji}</p>
      <h2 className="section-title">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </div>
  )
}
