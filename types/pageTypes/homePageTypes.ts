import type {
  Visual,
} from '~/types'

import { PageColorTheme } from '../objectTypes'
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
  image: Visual
  featured: boolean
  featuredImage: boolean
}

// Home page type
export interface Home extends PageDocument {
  background: Visual
  enhancementsTitle: string
  enhancementsDescription: string
  theme: PageColorTheme

}


export interface EnhancementCategoryInterface {
  category: CategorInterface
}
