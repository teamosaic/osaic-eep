import { Block } from '../blockTypes'
import { PageDocument } from './pageTypes'

// Tower page type
export interface Tower extends PageDocument {
  blocks: Block[]
  subheading: string
  description: string
}


export interface Home extends PageDocument {
  blocks: Block[]
}



