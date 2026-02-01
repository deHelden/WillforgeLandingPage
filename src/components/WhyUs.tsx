import { forwardRef } from 'react'
import copy from '../content'
import styles from './WhyUs.module.css'

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
      fill="currentColor"
    />
  </svg>
)

const WhyUs = forwardRef<HTMLElement>((_, ref) => {
  const { whyUs } = copy

  return (
    <section
      ref={ref}
      id="why-us"
      data-section="whyUs"
      className={`${styles.whyUs} section`}
      aria-labelledby="whyus-title"
    >
      <div className={styles.content}>
        <h2 id="whyus-title" className={styles.title}>
          {whyUs.title}
        </h2>
        <ul className={styles.list}>
          {whyUs.benefits.map((benefit, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.icon}>
                <CheckIcon />
              </span>
              <span className={styles.text}>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})

WhyUs.displayName = 'WhyUs'

export default WhyUs
