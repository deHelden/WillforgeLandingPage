import copy from '../content'
import styles from './Contact.module.css'

const Contact = () => {
  const { contact } = copy

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.header}>
        <h2 id="contact-title" className={styles.title}>
          Let's talk
        </h2>
        <p className={styles.hint}>Direct line to the team</p>
      </div>

      <div className={styles.items}>
        <a className={styles.item} href={`tel:${contact.phone.replace(/[^+\\d]/g, '')}`} aria-label={`Call us at ${contact.phone}`}>
          <span className={styles.icon}>P</span>
          <span className={styles.label}>Phone</span>
          <p className={styles.value}>{contact.phone}</p>
        </a>

        <a className={styles.item} href={`mailto:${contact.email}`} aria-label={`Email us at ${contact.email}`}>
          <span className={styles.icon}>E</span>
          <span className={styles.label}>Email</span>
          <p className={styles.value}>{contact.email}</p>
        </a>
      </div>
    </section>
  )
}

export default Contact

