export function calculateOverlap(elementA, elementB) {
  const rectA = elementA.getBoundingClientRect()
  const rectB = elementB.getBoundingClientRect()

  const maxSurface = Math.min(rectA.width * rectA.height, rectB.width * rectB.height)

  const left = Math.max(rectA.left, rectB.left)
  const right = Math.min(rectA.right, rectB.right)
  const top = Math.max(rectA.top, rectB.top)
  const bottom = Math.min(rectA.bottom, rectB.bottom)

  const surface = (right - left) * (bottom - top)

  return surface / maxSurface
}
