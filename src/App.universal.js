import pit from '/images/avocados/pit.svg'
import styles from './App.css'
import { useDrag } from '@use-gesture/react'
import { useSpring } from '@react-spring/web'

export default function App() {

  const [spring, api] = useSpring(() => ({ x: 0, y: 0 }))
  const bind = useDrag(HandleDrag, { /* options */})

  return (
    <div className={styles.component}>
      <div className={styles.avocado}>
        <img className={styles.pit}
          src={pit}
          alt=''
          style={spring}
          draggable="false"
          {...bind()}
        />
      </div>
    </div>
  )
  function HandleDrag(state) {
    const [ x,y ] = state.offset
    api.start ( { x,y } )
    console.log(state)
  }
}
