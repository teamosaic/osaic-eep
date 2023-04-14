import type { PlainChildrenProps } from 'react-intersection-observer'

type SharedIntersectionOptions = Pick< PlainChildrenProps,
  'onChange' | 'as'
>

export interface AnimateInViewProps extends SharedIntersectionOptions {
  once?: boolean
  children: React.ReactNode
  className?: string
}
