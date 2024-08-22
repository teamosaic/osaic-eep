import type {
  Visual,
} from '~/types'

import { PageDocument } from './pageTypes'

// Home page type
export interface Home extends PageDocument {
  background: Visual
  enhancementsTitle: string
  enhancementsDescription: string
}
