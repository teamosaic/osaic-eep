export * from './articlesBlockTypes'
export * from './ctaBlockTypes'
export * from './faqBlockTypes'
export * from './heroBlockTypes'

import { ArticlesBlock } from './articlesBlockTypes'
import { CtaBlock } from './ctaBlockTypes'
import { FaqBlock } from './faqBlockTypes'
import { HeroBlock } from './heroBlockTypes'

export type Block = HeroBlock | CtaBlock | ArticlesBlock | FaqBlock
