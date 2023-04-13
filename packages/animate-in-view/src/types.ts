import type { IntersectionOptions } from 'react-intersection-observer'

export interface AnimateInViewProps
extends Pick< IntersectionOptions, 'onChange' > {
  once?: boolean
  children: React.ReactNode
  className?: string
}
