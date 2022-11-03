import pit from '/images/avocados/pit.svg'
import styles from './App.css'

export default function App() {
  return (
    <div className={styles.component}>
      <div className={styles.avocado}>
        <img className={styles.pit} src={pit} alt='' />
      </div>
    </div>
  )
}
