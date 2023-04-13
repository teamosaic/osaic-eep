import { useInView, type IntersectionOptions } from 'react-intersection-observer'
import { useState } from 'react'

export default function InViewTrigger({
  animations,
  classes,
  once,
  onChange,
  children,
  className,
}: InViewTriggerProps): React.ReactElement {

  // Track whether we've done the initial reaction to being in-view
  const [ initialState, setInitialState ] = useState(true)

  // Track viewport presence
  const { ref, inView, entry } = useInView({
    triggerOnce: once,
    onChange,
  })

  // If no IntersectionObserver entry, treat this as the initial SSR render
  // const initialState = !entry

  // Control animations
  if (animations && entry?.target) {

    // On the initial response, stop any animations that play in elements
    // not in the initial viewport. If they were already in the viewport,
    // allow them to continue.
    if (initialState && !inView) resetAnimations(entry.target)

    // If not the initial state, play animations that enter the viewport.
    // We don't run this on the intiial state so we don't touch animations
    // that started out playing, pre-JS.
    else if (!initialState && inView) playAnimations(entry.target)

    // Play animations in reverse when no longer visible, like as an outro.
    // If the animations start delayed, reverse them.  Otherwise, we can
    // just hard reset when they aren't visible
    else if (!initialState && !inView) {
      // TODO: Finish
      // if (this.rootMarginBottom) this.reverseAnimations()
      // else this.resetAnimations()
      resetAnimations(entry.target)
    }
  }

  // We've now processed the initial state
  // TODO: Can this be implmented a different way to prevent re-render
  if (entry?.target && initialState) setInitialState(false)

  // Render wrapping component
  return (
    <div {...{ className, ref }}>
      { children }
    </div>
  )
}

function resetAnimations(el) {
  getAnimations(el).forEach(animation => {
    animation.pause()
    animation.currentTime = 0
  })
}

function playAnimations(el) {
  getAnimations(el).forEach(animation => {
    animation.playbackRate = 1
    animation.play()
  })
}

function getAnimations(el) {
  // TODO: Support target types
  return el.getAnimations({ subtree: true })
}

interface InViewTriggerProps
extends Pick< IntersectionOptions, 'onChange' > {
  animations?: boolean
  classes?: boolean
  once?: boolean
  children: React.ReactNode
  className?: string
}
