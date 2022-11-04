import { useSpring, animated } from '@react-spring/web'
import { pseudoRandom } from '@kaliber/math'
import styles from './App.css'
import { useDrag } from '@use-gesture/react'

export default function App({ sticker, seed }) {
  const x = pseudoRandom(`${seed}x`)
  const y = pseudoRandom(`${seed}y`)
  const bind = useDrag(HandleDrag, { /* options */})

  const [spring, api] = useSpring(() => ({ x: 0, y: 0 }))

  return (
    <div className={styles.component} style={{ '--x': x, '--y': y }}>
      <animated.img
        className={styles.sticker}
        src={sticker}
        alt=''
        style={spring}
        draggable="false"
        // useDrag="false"
        {...bind()}
      />
    </div>
  )
  function HandleDrag(state) {
    const [ x,y ] = state.offset
    api.start ( { x,y } )
    console.log(state)
  }
}
