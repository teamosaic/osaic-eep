import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

import type {
  BlockLayout
} from '~/types'

export interface HeroBlock extends BlockLayout {
  body: PortableTextBlock[] // I couldn't figure out how to add Button here
  background: Image
  announcementButton: {
    text: string
    cta: string
    url: string
  }
}
