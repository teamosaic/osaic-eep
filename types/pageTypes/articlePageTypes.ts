import { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

import { PageDocument } from './pageTypes'

// Article detail page type
export interface Article extends PageDocument {
  date: string
  image: Image
  body: PortableTextBlock[]
}
