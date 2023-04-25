import type {
  BackgroundColor,
  BlockPadding,
  BlockSpacing,
  Button,
  HideWhen,
  SanityObject,
} from '~/types'
import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export type Block = HeroBlock | CtaBlock

export interface HeroBlock extends BlockWithLayout {
  body: PortableTextBlock[] // I couldn't figure out how to add Button here
  background: Image
  announcementButton: {
    text: string
    cta: string
    url: string
  }
}

export interface CtaBlock extends BlockWithLayout, BlockWithBackground {
  type: CtaBlockType
  body: PortableTextBlock[]
  buttons: Button[]
}

export enum CtaBlockType {
  SimpleCentered = 'simpleCentered',
  SimpleJustified = 'simpleJustified',
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
