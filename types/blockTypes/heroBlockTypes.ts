import type { PortableTextBlock } from '@portabletext/types'

import type {
  BlockLayout,
  Visual,
} from '~/types'

export interface HeroBlock extends BlockLayout {
  body: PortableTextBlock[] // I couldn't figure out how to add Button here
  background: Visual
  announcementButton: {
    text: string
    cta: string
    url: string
  }
}
