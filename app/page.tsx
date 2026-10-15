import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Honours from '@/components/Honours'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Projects />
        <Experience />
        <Honours />
        <Skills />
      </main>
      <Contact />
      <Reveal />
    </>
  )
}
