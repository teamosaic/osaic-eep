// Reset animations in target to start
export function resetAnimations(el: Element): void {
  getAnimations(el).forEach(animation => {
    animation.pause()
    animation.currentTime = 0
  })
}

// Play animations in target
export function playAnimations(el: Element): void {
  getAnimations(el).forEach(animation => {
    animation.playbackRate = 1
    animation.play()
  })
}

// Fetch the animations that we'll be controlling
function getAnimations(el: Element): Animation[] {
  return el.getAnimations()
}
