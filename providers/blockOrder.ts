import type { Block } from '~/types'
import { createContext } from 'react'

export interface BlockOrder {
  previous?: Block
  next?: Block
  index: number
}

export const BlockOrderContext = createContext<BlockOrder | null>(null)
