import type { PortableTextBlock } from '@portabletext/types'

import type {
  BlockLayout,
} from '~/types'


interface Faq {
  question?: string
  answer?: PortableTextBlock[]
}

export interface FaqBlock extends BlockLayout {
  title: string
  faqs: Faq[]
}
