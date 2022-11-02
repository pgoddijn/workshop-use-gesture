import { pseudoRandom } from '@kaliber/math'
import sticker from '/images/stickers/cactus.svg'
import styles from './App.css'

export default function App({ seed }) {
  const x = pseudoRandom(`${seed}x`)
  const y = pseudoRandom(`${seed}y`)

  return (
    <div className={styles.app}>
      <img className={styles.sticker} src={sticker} style={{ '--x': x, '--y': y }} alt='' />
    </div>
  )
}
