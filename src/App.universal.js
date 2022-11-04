import { animated, useSprings } from '@react-spring/web'
import { pseudoRandom, lerp } from '@kaliber/math'
import styles from './App.css'
import catA from '/images/pet-cards/cat-a.png'
import catB from '/images/pet-cards/cat-b.png'
import catC from '/images/pet-cards/cat-c.png'
import catD from '/images/pet-cards/cat-d.png'
import dogA from '/images/pet-cards/dog-a.png'
import dogB from '/images/pet-cards/dog-b.png'
import dogC from '/images/pet-cards/dog-c.png'
import dogD from '/images/pet-cards/dog-d.png'

const cards = [
  { image: catA, id: 'a' },
  { image: catB, id: 'b' },
  { image: catC, id: 'c' },
  { image: catD, id: 'd' },
  { image: dogA, id: 'e' },
  { image: dogB, id: 'f' },
  { image: dogC, id: 'g' },
  { image: dogD, id: 'h' }
]

export default function App({ seed }) {
  const [springs, api] = useSprings(cards.length, () => ({
    x: 0,
    y: 0,
  }))

  return (
    <div className={styles.component}>
      {cards.map((x, i) => (
        <animated.img key={x.id} className={styles.card} src={x.image} alt='' style={{
          x: springs[i].x,
          y: springs[i].y,
          rotate: getRotation({ seed, i })
        }} />
      ))}
    </div>
  )
}

function getRotation({ seed, i }) {
  return lerp({ start: -5, end: 5, input: pseudoRandom(seed + i) })
}
