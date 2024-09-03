import { Block } from '../blockTypes'
import { PageDocument } from './pageTypes'

import type {
  Visual,
} from '~/types'

interface ThemeColor {
  hex: string
}

// Tower page type
export interface Tower extends PageDocument {
  blocks: Block[]
  subheading: string
  description: string
  theme: ThemeColor
  garnish: Visual
}

