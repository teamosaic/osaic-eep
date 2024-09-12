import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

import type {
  Visual,
} from '~/types'


// SEO fields for pages
export interface Settings {
  instagram: string
  twitter: string
  linkedin: string
  footer: PortableTextBlock[]
  metaTitleSuffix: string
  metaDescription: string
  metaImage: Image
}


interface UriInterface {
  current: string
}

interface CategoryInterface {
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

export interface EnhancementCategoryInterface {
  category: CategoryInterface
}
