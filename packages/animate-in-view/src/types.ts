import type { PlainChildrenProps } from 'react-intersection-observer'

type SharedIntersectionOptions = Pick< PlainChildrenProps,
  'onChange' | 'as' | 'rootMargin' | 'threshold' | 'skip' | 'initialInView'
>

export interface AnimateInViewProps extends SharedIntersectionOptions {
  target?: AnimationTarget
  when?: string | number,
  once?: boolean
  children: React.ReactNode
  className?: string
}

export type AnimationTarget = 'self' | 'children' | 'descendants'
