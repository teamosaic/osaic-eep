import type {
  Visual,
} from '~/types'

import { Block } from '../blockTypes'
import { PageColorTheme } from '../objectTypes'
import { PageDocument } from './pageTypes'

// Tower page type
export interface EnhancementCategory extends PageDocument {
  blocks: Block[]
  subheading: string
  description: string
  theme: PageColorTheme
  orderRank: string
}

