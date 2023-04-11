import type { SanityObject } from '~/types/sanityTypes'
import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'
import type { BlockMarginTop, BlockPadding } from './dimensions'
import type { BackgroundColor } from './colors'

export type Block = MarqueeBlock

export interface BlockWithLayout extends SanityObject {
  marginTop: BlockMarginTop,
  backgroundColor: BackgroundColor,
  paddingTop: BlockPadding,
  paddingBottom: BlockPadding,
}

export interface MarqueeBlock extends BlockWithLayout {
  body: PortableTextBlock
  background?: Image & {
    title: string
  }
}
