import type { Block } from '~/types/blocks'
import BlockLayout from './BlockLayout'
import { BlockOrderContext, type BlockOrder } from '~/providers/blockOrder'
import dynamic from 'next/dynamic'

// Import blocks on demand
const MarqueeBlock = dynamic(() => import('./MarqueeBlock'))
const CopyBlock = dynamic(() => import('./CopyBlock'))

// Conditionally render blocks based on type, wrapped in BlockLayout
export default function BlocksList({ blocks = [] }: {
  blocks: Block[]
}): React.ReactElement {
  return <>{ blocks.map(renderBlock)}</>
}

// Render a block with wrapping components/context
export function renderBlock(
  block: Block,
  index: number,
  blocks: Block[],
): React.ReactElement {
  return (
    <BlockOrderContext.Provider
      key={ block._key}
      value={ makeBlockOrderValue(index, blocks) }
    >
      <BlockLayout block={ block } >
        { makeBlockInstance(block) }
      </BlockLayout>
    </BlockOrderContext.Provider>
  )
}

// Make the block order value
function makeBlockOrderValue(index: number, blocks:Block[]): BlockOrder {
  const previous = index == 0 ? null : blocks[index - 1],
    next = index == blocks.length - 1 ? null : blocks[index + 1]
  return { previous, next, index }
}

// Return a block depending on the _type
function makeBlockInstance(block: any): React.ReactElement {
  const ComponentFunction = getComponentFunction(block._type)
  if (!ComponentFunction) return <div>Unknown block { block._type }</div>
  return <ComponentFunction block={ block } />
}

// Return the component class based on the type
function getComponentFunction(type: string): Function {
  switch(type) {
    case 'marqueeBlock': return MarqueeBlock
    case 'copyBlock': return CopyBlock
  }
}
