import { EnhancementBlock as BlockType,EnhancementBlockType } from '~/types'

import RichBlock from './Rich'
import SimpleBlock from './Simple'

// Delegates the rendering of the block to a specific type of cta blokck
export default function EnhancementBlock(props: BlockType): React.ReactElement {
  switch(props.type) {
    case EnhancementBlockType.Simple:
      return <SimpleBlock {...props} />
    case EnhancementBlockType.Rich:
      return <RichBlock {...props} />
  }
}
