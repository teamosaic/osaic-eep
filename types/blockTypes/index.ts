export * from './articlesBlockTypes'
export * from './ctaBlockTypes'
export * from './heroBlockTypes'

import { ArticlesBlock } from './articlesBlockTypes'
import { CtaBlock } from './ctaBlockTypes'
import { HeroBlock } from './heroBlockTypes'

export type Block = HeroBlock | CtaBlock | ArticlesBlock
