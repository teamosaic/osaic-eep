export * from './articlesBlockTypes'
export * from './ctaBlockTypes'
export * from './faqBlockTypes'
export * from './heroBlockTypes'
export * from './reusableSectionBlockTypes'
export * from './splitBlockTypes'

import { ArticlesBlock } from './articlesBlockTypes'
import { CtaBlock } from './ctaBlockTypes'
import { FaqBlock } from './faqBlockTypes'
import { HeroBlock } from './heroBlockTypes'
import { ReusableSectionsBlock } from './reusableSectionBlockTypes'
import { SplitBlock } from './splitBlockTypes'

export type Block = ArticlesBlock
  | CtaBlock
  | FaqBlock
  | HeroBlock
  | ReusableSectionsBlock
  | SplitBlock
