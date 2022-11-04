import { animated, to } from '@react-spring/web'

// clip takes a values between 0 and 1
export function Clip({ clip, children }) {
  return (
    <animated.div style={{ clipPath: to([clip], x => `polygon(0 0, ${x * 100}% 0, ${x * 100}% 100%, 0% 100%)`) }}>
      {children}
    </animated.div>
  )
}
