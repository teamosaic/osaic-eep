import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

import type {
  BlockLayout
} from '~/types'

export interface SplitBlock extends BlockLayout {
  body: PortableTextBlock[] // I couldn't figure out how to add Button here
  image: Image
  button: {
    text: string
    cta: string
    url: string
  }
}
