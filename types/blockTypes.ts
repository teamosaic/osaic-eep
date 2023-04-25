import type {
  BackgroundColor,
  BlockSpacing,
  BlockPadding,
  HideWhen,
  SanityObject,
  TextAlignment,
  TypographyThemes,
} from '~/types'
import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'
import { SanityImageSource} from '~/packages/sanity-image/lib/types'

export type Block = HeroBlock | MarqueeBlock | CopyBlock

export interface HeroBlock extends BlockWithLayout {
  body: PortableTextBlock[] // I couldn't figure out how to add Button here
  background?: SanityImageSource
  announcementButton?: {
    text?: string
    cta?: string
    url?: string
  }
}

export interface MarqueeBlock extends BlockWithLayout {
  body: PortableTextBlock[]
  background?: Image & {
    title: string
  }
}

export interface CopyBlock extends BlockWithLayout, BlockWithBackground {
  body: PortableTextBlock[]
  textAlignment: TextAlignment
  typographyTheme: TypographyThemes
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
