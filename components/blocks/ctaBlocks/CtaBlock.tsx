import { CtaBlockType, CtaBlock as BlockType } from '~/types'
import SimpleCenteredCtaBlock from './SimpleCenteredCtaBlock'
import SimpleJustifiedCtaBlock from './SimpleJustifiedCtaBlock'

// Delegates the rendering of the block to a specific type of cta blokck
export default function CtaBlock(props: BlockType): React.ReactElement {
  switch(props.type) {
    case CtaBlockType.SimpleCentered:
      return <SimpleCenteredCtaBlock {...props} />
    case CtaBlockType.SimpleJustified:
      return <SimpleJustifiedCtaBlock {...props} />
  }
}
