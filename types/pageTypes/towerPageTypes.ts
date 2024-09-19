import type {
  Visual,
} from '~/types'

import { PageDocument } from './pageTypes'

// Tower page type
export interface Tower extends PageDocument {
  subheading: string
  description: string
  background: Visual
  enableOverlay: boolean
}

