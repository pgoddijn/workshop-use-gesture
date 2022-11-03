import { useSpring, animated } from '@react-spring/web'
import { pseudoRandom } from '@kaliber/math'
import sticker from '/images/stickers/cactus.svg'
import styles from './App.css'

export default function App({ seed }) {
  const x = pseudoRandom(`${seed}x`)
  const y = pseudoRandom(`${seed}y`)

  const [spring, api] = useSpring({ x: 0, y: 0 })

  return (
    <div className={styles.app} style={{ '--x': x, '--y': y }}>
      <animated.img
        className={styles.sticker}
        src={sticker}
        alt=''
        style={spring}
      />
    </div>
  )
}
