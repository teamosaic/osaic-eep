import { Block } from '../blockTypes'
import { PageDocument } from './pageTypes'
import { PageColorTheme } from '../objectTypes'

import type {
  Visual,
} from '~/types'

// Tower page type
export interface Tower extends PageDocument {
  blocks: Block[]
  subheading: string
  description: string
  theme: PageColorTheme
  garnish: Visual
}

