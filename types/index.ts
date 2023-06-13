export * from './articlesBlockTypes'
export * from './componentTypes'
export * from './ctaBlockTypes'
export * from './fieldGroupTypes'
export * from './heroBlockTypes'
export * from './objectTypes'
export * from './pageTypes'
export * from './sanityTypes'

import * as ArticlesBlock from './articlesBlockTypes'
import * as CtaBlock from './ctaBlockTypes'
import * as HeroBlock from './heroBlockTypes'

export type Block = HeroBlock | CtaBlock | ArticlesBlock
