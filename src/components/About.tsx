import { forwardRef } from 'react'
import copy from '../content'
import styles from './About.module.css'

const About = forwardRef<HTMLElement>((_, ref) => {
  const { about } = copy

  return (
    <section
      ref={ref}
      id="about"
      data-section="about"
      className={`${styles.about} section`}
      aria-labelledby="about-title"
    >
      <div className={styles.content}>
        <h2 id="about-title" className={styles.title}>
          {about.title}
        </h2>
        <p className={styles.text}>{about.content}</p>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About
