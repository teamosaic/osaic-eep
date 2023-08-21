export * from './articlesBlockTypes'
export * from './ctaBlockTypes'
export * from './heroBlockTypes'
export * from './splitBlockTypes'

import { ArticlesBlock } from './articlesBlockTypes'
import { CtaBlock } from './ctaBlockTypes'
import { HeroBlock } from './heroBlockTypes'
import { SplitBlock } from './splitBlockTypes'

export type Block = HeroBlock | CtaBlock | ArticlesBlock | SplitBlock
