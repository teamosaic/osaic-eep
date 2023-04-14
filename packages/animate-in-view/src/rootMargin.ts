import { useMemo } from 'react'
import type { AnimateInViewProps } from './types'

// Make root margin value from more convenient "when" prop
export function rootMarginFromWhen(
  when: AnimateInViewProps['when']
): string | void {
  return useMemo(() => {
    if (!when) return
    return `0% 0% ${rootMarginBottomFromWhen(when)} 0%`
  }, [ when ])
}

// Actually turn the "when" value into a useable value
function rootMarginBottomFromWhen(
  when: AnimateInViewProps['when']
): string {
  if (typeof when == 'string') return `-${when}`
  if (typeof when == 'number') {
    if (when >= 0 && when <= 1) return `-${when * 100}%`
    else return `-${when}px`
  }
}
