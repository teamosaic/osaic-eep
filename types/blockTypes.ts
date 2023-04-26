import type {
  BlockBackground,
  BlockLayout,
  Button,
  SanityObject,
} from '~/types'
import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export type Block = HeroBlock | CtaBlock | ArticlesBlock

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
  recentArticles: ArticleCard[]
}

export interface ArticleCard {
  _id: string
  title: string
  date: { date: Date }
  excerpt: string
  uri: string
}
