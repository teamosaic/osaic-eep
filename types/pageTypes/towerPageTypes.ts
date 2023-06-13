import { PageDocument } from './pageTypes'
import { Block } from '../blockTypes'

// Tower page type
export interface Tower extends PageDocument {
  blocks: Block[]
}



