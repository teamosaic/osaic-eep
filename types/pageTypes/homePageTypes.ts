import type {
  Visual,
} from '~/types'

import { PageDocument } from './pageTypes'

interface UriInterface {
  current: string
}

interface CategorInterface {
  title: string
  subheading: string
  description: string
  uri: UriInterface
  blocks: EnhancementCategoryBlocks[]
}

interface EnhancementCategoryBlocks {
  enhancementTitle: string
  cardTheme: string
}

// Home page type
export interface Home extends PageDocument {
  background: Visual
  enhancementsTitle: string
  enhancementsDescription: string
}


export interface EnhancementCategoryInterface {
  key: number
  category: CategorInterface
}
