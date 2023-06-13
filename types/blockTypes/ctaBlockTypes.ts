import type { PortableTextBlock } from '@portabletext/types'

import type {
  BlockBackground,
  BlockLayout,
  Button,
} from '~/types'

export interface CtaBlock extends BlockLayout, BlockBackground {
  type: CtaBlockType
  body: PortableTextBlock[]
  buttons: Button[]
}

export enum CtaBlockType {
  SimpleCentered = 'simpleCentered',
  SimpleJustified = 'simpleJustified',
}
