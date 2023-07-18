import { SplitBlock as BlockType,SplitBlockType } from '~/types'

import ImageLeftSplitBlock from './ImageLeftSplitBlock'
import ImageRightSplitBlock from './ImageRightSplitBlock'

// Delegates the rendering of the block to a specific type of cta blokck
export default function SplitBlock(props: BlockType): React.ReactElement {
  switch(props.type) {
    case SplitBlockType.ImageLeft:
      return <ImageLeftSplitBlock {...props} />
    case SplitBlockType.ImageRight:
      return <ImageRightSplitBlock {...props} />
  }
}

