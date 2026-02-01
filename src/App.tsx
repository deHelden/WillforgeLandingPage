import { useEffect, useRef, useState } from 'react'
import About from './components/About'
import Background from './components/Background'
import Contact from './components/Contact'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'

type SectionKey = 'hero' | 'about' | 'whyUs' | 'contact'

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('hero')
  const heroRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const whyUsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section') as SectionKey | null
            if (id) {
              setActiveSection(id)
            }
          }
        })
      },
      { threshold: 0.55 },
    )

    const sections = [heroRef, aboutRef, whyUsRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      <Background activeSection={activeSection} />
      <main className="page">
        <Hero ref={heroRef} onCtaClick={scrollToContact} />
        <About ref={aboutRef} />
        <WhyUs ref={whyUsRef} />
        <Contact ref={contactRef} />
      </main>
    </>
  )
}

export default App

