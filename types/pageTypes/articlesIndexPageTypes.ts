import { ArticleCard, Block } from '../blockTypes'
import { PageDocument } from './pageTypes'

// Article listing page type
export interface ArticlesIndex extends PageDocument {
  headerBlocks: Block[]
  initialArticles: ArticleCard[]
  totalArticles: number
  footerBlocks: Block[]
}
