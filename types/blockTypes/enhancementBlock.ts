import type { PortableTextBlock } from '@portabletext/types'

import type {
  BlockBackground,
  BlockLayout,
  Visual
} from '~/types'

export interface EnhancementBlock extends BlockLayout, BlockBackground {
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
