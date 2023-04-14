import { useInView } from 'react-intersection-observer'
import { resetAnimations, playAnimations } from './animation-control'
import { usePrevious } from './utils'
import { AnimateInViewProps } from './types'
import { createElement } from 'react'

export default function AnimateInView({
  as = 'div',
  once,
  onChange,
  children,
  className,
}: AnimateInViewProps): React.ReactElement {

  // Track viewport presence
  const { ref, inView, entry } = useInView({
    triggerOnce: once,
    onChange,
  })

  // This is the initial observation the previous render hadn't receieved an
  // IntersectionObserver entry yet. This approach is better than tracking this
  // with useState because that was causing a secondary render.
  const isInitialObservation = usePrevious(!entry)

  // Control animations
  if (entry?.target) {

    // On the initial response, stop any animations that play in elements
    // not in the initial viewport. If they were already in the viewport,
    // allow them to continue.
    if (isInitialObservation && !inView) resetAnimations(entry.target)

    // If not the initial state, play animations that enter the viewport.
    // We don't run this on the intiial state so we don't touch animations
    // that started out playing, pre-JS.
    else if (!isInitialObservation && inView) playAnimations(entry.target)

    // Play animations in reverse when no longer visible, like as an outro.
    // If the animations start delayed, reverse them.  Otherwise, we can
    // just hard reset when they aren't visible
    else if (!isInitialObservation && !inView) {
      // TODO: Finish
      // if (this.rootMarginBottom) this.reverseAnimations()
      // else this.resetAnimations()
      resetAnimations(entry.target)
    }
  }

  // Render wrapping component that defaults to a div
  return createElement(as, { className, ref }, children)
}
