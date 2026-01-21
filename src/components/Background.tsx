import type { CSSProperties } from 'react'
import styles from './Background.module.css'

type BackgroundProps = {
  activeSection: 'hero' | 'contact'
}

type Palette = {
  '--c1': string
  '--c2': string
  '--c3': string
  '--c4': string
}

const palettes = {
  hero: {
    '--c1': 'rgba(124, 242, 212, 0.65)',
    '--c2': 'rgba(131, 95, 255, 0.6)',
    '--c3': 'rgba(124, 242, 212, 0.18)',
    '--c4': 'rgba(107, 188, 255, 0.18)',
  },
  contact: {
    '--c1': 'rgba(255, 184, 122, 0.6)',
    '--c2': 'rgba(107, 188, 255, 0.6)',
    '--c3': 'rgba(255, 184, 122, 0.18)',
    '--c4': 'rgba(131, 95, 255, 0.16)',
  },
} satisfies Record<BackgroundProps['activeSection'], Palette>

const Background = ({ activeSection }: BackgroundProps) => {
  const palette = palettes[activeSection] as CSSProperties

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.layer} style={palette} />
      <div className={`${styles.layer} ${styles.alt}`} style={palette} />
    </div>
  )
}

export default Background

