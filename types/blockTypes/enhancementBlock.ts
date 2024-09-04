import type { PortableTextBlock } from '@portabletext/types'

import type {
  BlockBackground,
  BlockLayout,
  Visual
} from '~/types'

export interface EnhancementBlock extends BlockLayout, BlockBackground {
  enhancementTitle: string
  featured: boolean
  featuredImage: boolean
  type: EnhancementBlockType
  body: PortableTextBlock[]
  image: Visual
  ctaText: string
  ctaUrl: string
}

export enum EnhancementBlockType {
  Simple = 'simple',
  Rich = 'rich',
}

export enum EnhancementCardTheme {
  Default = 'default',
  Red = 'red',
  Green = 'green'
}
