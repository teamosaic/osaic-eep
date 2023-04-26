import type {
  BlockBackground,
  BlockLayout,
  Button,
} from '~/types'
import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export type Block = HeroBlock | CtaBlock

export interface HeroBlock extends BlockLayout {
  body: PortableTextBlock[] // I couldn't figure out how to add Button here
  background: Image
  announcementButton: {
    text: string
    cta: string
    url: string
  }
}

export interface CtaBlock extends BlockLayout, BlockBackground {
  type: CtaBlockType
  body: PortableTextBlock[]
  buttons: Button[]
}

export enum CtaBlockType {
  SimpleCentered = 'simpleCentered',
  SimpleJustified = 'simpleJustified',
}

export interface ArticlesBlock extends BlockLayout {
  headline: PortableTextBlock[]
}
