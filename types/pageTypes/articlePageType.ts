import type { Image } from 'sanity'
import { PageDocument } from './pageType'
import { PortableTextBlock } from '@portabletext/types'

// Article detail page type
export interface Article extends PageDocument {
  date: string
  image: Image
  body: PortableTextBlock[]
}
