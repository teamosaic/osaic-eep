import type { PortableTextBlock } from '@portabletext/types'

import type { SanityObject } from '~/types'
import type {
  BlockLayout,
} from '~/types'



export interface FaqBlock extends BlockLayout {
  title: string
  faqs: Faq[]
}

export interface Faq extends SanityObject {
  question?: string
  answer?: PortableTextBlock[]
}
