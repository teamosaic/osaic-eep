import { EnhancementBlockType } from '~/types'

import RichBlock from './Rich'
import SimpleBlock from './Simple'

// Delegates the rendering of the block to a specific type of cta blokck
export default function EnhancementBlock(block: any): React.ReactElement {
  switch(block.type) {
    case EnhancementBlockType.Simple:
      return <SimpleBlock {...block} />
    case EnhancementBlockType.Rich:
      return <RichBlock {...block} />
  }
}
