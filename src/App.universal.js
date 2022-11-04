import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import { lerp } from '@kaliber/math'
import bike from '/rive/bike.riv'
import styles from './App.css'

export default function App() {
  const { rive, RiveComponent } = useRive({
    src: bike,
    autoplay: true,
    stateMachines: 'State Machine 1'
  })

  const input = useStateMachineInput(rive, 'State Machine 1', 'numRotation', 0)

  return (
    <div className={styles.component}>
      <RiveComponent onClick={() => {
        input.value = lerp({ start: -100, end: 100, input: Math.random() })
      }} />
    </div>
  )
}
