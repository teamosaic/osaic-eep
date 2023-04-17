import type {
  BackgroundColor,
  BlockSpacing,
  BlockPadding,
  HideWhen,
  SanityObject,
  TextAlignment,
} from '~/types'
import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export type Block = MarqueeBlock | CopyBlock

export interface MarqueeBlock extends BlockWithLayout {
  body: PortableTextBlock
  background?: Image & {
    title: string
  }
}

export interface CopyBlock extends BlockWithLayout, BlockWithBackground {
  body: PortableTextBlock
  textAlignment: TextAlignment
}

export interface BlockWithBackground extends SanityObject {
  backgroundColor: BackgroundColor
  paddingTop: BlockPadding
  paddingBottom: BlockPadding
}

export interface BlockWithLayout extends SanityObject {
  blockSpacing: BlockSpacing
  disabled: boolean
  hideWhen: HideWhen[]
}
