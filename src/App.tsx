import { useEffect, useRef, useState } from 'react'
import Background from './components/Background'
import Contact from './components/Contact'
import Hero from './components/Hero'

type SectionKey = 'hero' | 'contact'

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('hero')
  const heroRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section')
            if (id === 'hero' || id === 'contact') {
              setActiveSection(id)
            }
          }
        })
      },
      { threshold: 0.55 },
    )

    const heroEl = heroRef.current
    const contactEl = contactRef.current
    if (heroEl) observer.observe(heroEl)
    if (contactEl) observer.observe(contactEl)

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
        <Contact ref={contactRef} />
      </main>
    </>
  )
}

export default App

