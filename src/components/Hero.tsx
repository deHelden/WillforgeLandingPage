import copy from '../content'
import styles from './Hero.module.css'

const Hero = () => {
  const { hero } = copy

  return (
    <section className={`${styles.hero} section`} aria-labelledby="hero-title">
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
            const target = document.getElementById('contact')
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }}
        >
          {hero.cta}
        </a>
      </div>
    </section>
  )
}

export default Hero

