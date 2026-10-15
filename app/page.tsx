import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Reveal from '@/components/Reveal'
import { Work, Ticker, Experience, Honours, Cta, Footer } from '@/components/Sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="shell">
        <main>
          <Hero />
          <Ticker />
          <Work />
          <Experience />
          <Honours />
          <Skills />
          <Cta />
        </main>
        <Footer />
      </div>
      <Reveal />
    </>
  )
}
