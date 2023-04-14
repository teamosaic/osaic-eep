import type { PlainChildrenProps } from 'react-intersection-observer'

type SharedIntersectionOptions = Pick< PlainChildrenProps,
  'onChange' | 'as'
>

export interface AnimateInViewProps extends SharedIntersectionOptions {
  target?: AnimationTarget
  once?: boolean
  children: React.ReactNode
  className?: string
}

export type AnimationTarget = 'self' | 'children' | 'descendants'
