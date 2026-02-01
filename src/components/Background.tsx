import styles from './Background.module.css'

type SectionKey = 'hero' | 'about' | 'whyUs' | 'contact'

type BackgroundProps = {
  activeSection: SectionKey
}

const sections: SectionKey[] = ['hero', 'about', 'whyUs', 'contact']

const Background = ({ activeSection }: BackgroundProps) => {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {sections.map((section) => (
        <div
          key={section}
          className={`${styles.layer} ${styles[section]} ${activeSection === section ? styles.active : ''}`}
        />
      ))}
    </div>
  )
}

export default Background

