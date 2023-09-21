export * from './articlesBlockTypes'
export * from './ctaBlockTypes'
export * from './faqBlockTypes'
export * from './heroBlockTypes'
export * from './splitBlockTypes'

import { ArticlesBlock } from './articlesBlockTypes'
import { CtaBlock } from './ctaBlockTypes'
import { FaqBlock } from './faqBlockTypes'
import { HeroBlock } from './heroBlockTypes'
import { SplitBlock } from './splitBlockTypes'

export type Block = ArticlesBlock
  | CtaBlock
  | FaqBlock
  | HeroBlock
  | SplitBlock
