import { Block, SanityObject, PageSeo, ArticleCard } from './index'
import { PortableTextBlock } from '@portabletext/types'

// The Sanity schema type names that generate pages
export enum PageType {
  Tower = 'tower',
  Article = 'article',
  ArticlesIndex = 'articlesIndex',
}

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

// Article detail page type
export interface Article extends PageDocument, PageSeo {
  date: string
  body: PortableTextBlock[]
}

// Article listing page type
export interface ArticlesIndex extends PageDocument, PageSeo {
  headerBlocks: Block[]
  initialArticles: ArticleCard[]
  totalArticles: number
  footerBlocks: Block[]
}
