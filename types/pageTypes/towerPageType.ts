import { PageDocument } from './pageType'
import { Block } from '../blockTypes'

// Tower page type
export interface Tower extends PageDocument {
  blocks: Block[]
}



