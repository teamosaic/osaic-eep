import { createContext } from 'react'

import type { Block } from '~/types'

export interface BlockOrder {
  previous?: Block
  next?: Block
  index: number
}

export const BlockOrderContext = createContext<BlockOrder | null>(null)
