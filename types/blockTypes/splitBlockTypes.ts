import type { PortableTextBlock } from '@portabletext/types'

import type { BlockLayout, Visual } from '~/types'

export interface SplitBlock extends BlockLayout {
  orientation: SplitBlockOrientation
  body: PortableTextBlock[] // I couldn't figure out how to add Button here
  media: Visual
  button: {
    text: string
    cta: string
    url: string
  }
}

export enum SplitBlockOrientation {
  TextRight = 'textRight',
  TextLeft = 'textLeft',
}
