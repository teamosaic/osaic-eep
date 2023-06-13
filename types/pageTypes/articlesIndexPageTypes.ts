import { PageDocument } from './pageTypes'
import { ArticleCard, Block } from '../blockTypes'

// Article listing page type
export interface ArticlesIndex extends PageDocument {
  headerBlocks: Block[]
  initialArticles: ArticleCard[]
  totalArticles: number
  footerBlocks: Block[]
}
