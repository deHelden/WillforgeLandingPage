import { forwardRef } from 'react'
import copy from '../content'
import styles from './Contact.module.css'

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C12.4 21 3 11.6 3 1a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1l-2.2 2.2z"
      fill="currentColor"
    />
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      fill="currentColor"
    />
  </svg>
)

const Contact = forwardRef<HTMLElement>((_, ref) => {
  const { contact } = copy

  return (
    <section
      ref={ref}
      id="contact"
      data-section="contact"
      className={`${styles.contact} section`}
      aria-labelledby="contact-title"
    >
      <div className={styles.header}>
        <h2 id="contact-title" className={styles.title}>
          Let's talk
        </h2>
        <p className={styles.hint}>Direct line to the team</p>
      </div>

      <div className={styles.items}>
        <a className={styles.item} href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} aria-label={`Call us at ${contact.phone}`}>
          <span className={styles.icon} aria-hidden="true">
            <PhoneIcon />
          </span>
          <span className={styles.label}>Phone</span>
          <p className={styles.value}>{contact.phone}</p>
        </a>

        <a className={styles.item} href={`mailto:${contact.email}`} aria-label={`Email us at ${contact.email}`}>
          <span className={styles.icon} aria-hidden="true">
            <EmailIcon />
          </span>
          <span className={styles.label}>Email</span>
          <p className={styles.value}>{contact.email}</p>
        </a>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'

export default Contact

