import { Block, SanityObject, PageSeo } from './index'
import { PortableTextBlock } from '@portabletext/types'

// The Sanity schema type names that generate pages
export enum PageType {
  Tower = 'tower',
  Articles = 'articles',
  Article = 'article',
}

// Simplify getting an array of all page type values
export const pageTypeValues: string[] = Object.values(PageType)

// A helper type for a Santiy document whose type is one of the page types
export interface PageDocument extends SanityObject {
  _type: PageType
  title: string
  uri: { current: string }
}

// Tower page type
export interface Tower extends PageDocument, PageSeo {
  blocks: Block[]
}

// Article listing page type
export interface Articles extends PageDocument, PageSeo {
  headerBlocks: Block[]
  footerBlocks: Block[]
}

// Article detail page type
export interface Article extends PageDocument, PageSeo {
  date: string
  body: PortableTextBlock[]
}
