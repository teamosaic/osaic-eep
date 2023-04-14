import type { AnimationTarget } from './types'

// Reset animations in target to start
export function reset(el: Element, target: AnimationTarget): void {
  getAnimations(el, target).forEach(animation => {
    animation.pause()
    animation.currentTime = 0
  })
}

// Play animations in target
export function play(el: Element, target: AnimationTarget): void {
  getAnimations(el, target).forEach(animation => {
    animation.playbackRate = 1
    animation.play()
  })
}

// Play all css animation inside the container backwards
export function reverse(el: Element, target: AnimationTarget): void {
  getAnimations(el, target).forEach(animation => {
    animation.playbackRate = -1
    animation.play()
  })
}

// Fetch the animations that we'll be controlling
function getAnimations(el: Element, target: AnimationTarget): Animation[] {
  switch(target) {
    case 'self': return el.getAnimations()
    case 'children':
      return Array.from(el.children).reduce((animations, child) => {
        return animations.concat(child.getAnimations())
      }, [])
    case 'descendants': return el.getAnimations({ subtree: true })
  }
}
