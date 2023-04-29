import { useInView } from 'react-intersection-observer'
import { reset, play, reverse } from './animationControl'
import { usePrevious } from './utils'
import { AnimateInViewProps } from './types'
import { rootMarginFromWhen } from './rootMargin'
import { createElement } from 'react'

export default function AnimateInView({
  as = 'div',
  target = 'self',
  once, // I like this name more than `triggerOnce`
  when, // Sugar for the rootMargin bottom value
  rootMargin,
  threshold,
  skip,
  initialInView,
  onChange,
  children,
  style,
  className = '',
}: AnimateInViewProps): React.ReactElement {

  // If when is supplied, use it for the rootMargin
  rootMargin = rootMarginFromWhen(when) || rootMargin

  // Track viewport presence
  const { ref, inView, entry } = useInView({
    triggerOnce: once,
    rootMargin,
    threshold,
    skip,
    initialInView,
    onChange,
  })

  // This is the initial observation the previous render hadn't receieved an
  // IntersectionObserver entry yet. This approach is better than tracking this
  // with useState because that was causing a secondary render.
  const isInitialObservation = usePrevious(!entry)

  // Control animations
  const el = entry?.target // For legibility
  if (el) {

    // On the initial response, stop any animations that play in elements
    // not in the initial viewport. If they were already in the viewport,
    // allow them to continue.
    if (isInitialObservation && !inView) reset(el, target)

    // If not the initial state, play animations upon entering the viewport.
    // We don't run this on the intiial state so we don't touch animations
    // that started out playing, pre-JS.
    else if (!isInitialObservation && inView) play(el, target)

    // Play animations in reverse when no longer visible, like as an outro.
    // If the animations start delayed by when, reverse them.  Otherwise, we
    // can just hard reset when they aren't visible.
    else if (!isInitialObservation && !inView) {
      if (rootMargin) reverse(el, target)
      else reset(el, target)
    }
  }

  // Render wrapping component that defaults to a div and gets the ref that
  // the IntersectionObserver cares about.
  return createElement(as, { className, style, ref }, children)
}
