import { forwardRef } from 'react'
import copy from '../content'
import styles from './Hero.module.css'

type HeroProps = {
  onCtaClick?: () => void
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ onCtaClick }, ref) => {
  const { hero } = copy

  return (
    <section ref={ref} data-section="hero" className={`${styles.hero} section`} aria-labelledby="hero-title">
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <span className={styles.pulse} aria-hidden="true" />
          Boutique creative studio
        </span>
        <h1 id="hero-title">{hero.title}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <a
          className={styles.cta}
          href="#contact"
          onClick={(event) => {
            event.preventDefault()
            onCtaClick?.()
          }}
        >
          {hero.cta}
        </a>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero

