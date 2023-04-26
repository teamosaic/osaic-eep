import type { Block } from '~/types'
import BlockParent from './BlockParent'
import { BlockOrderContext, type BlockOrder } from '~/providers/blockOrder'
import dynamic from 'next/dynamic'

// Import blocks on demand
const HeroBlock = dynamic(() => import('./HeroBlock'))
const CtaBlock = dynamic(() => import('./ctaBlocks/CtaBlock'))
const ArticlesBlock = dynamic(() => import('./ArticlesBlock'))

// Conditionally render blocks based on type, wrapped in BlockParent
export default function BlocksList({ blocks }: {
  blocks: Block[]
}): React.ReactElement {
  return <>{ (blocks || []).map(renderBlock)}</>
}

// Render a block with wrapping components/context
export function renderBlock(
  block: Block,
  index: number,
  blocks: Block[],
): React.ReactElement {

  // Make the actual block instance. It may not exist if content has been
  // created for a new schema whose related block component hasn't been
  // deployed yet.
  const blockInstance = makeBlockInstance(block)
  if (!blockInstance) return

  // Wrap the block in standard wrappers
  return (
    <BlockOrderContext.Provider
      key={ block._key}
      value={ makeBlockOrderValue(index, blocks) } >
      <BlockParent block={ block } >
        { blockInstance }
      </BlockParent>
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
	if (!ComponentFunction) return
	return <ComponentFunction {...block} />
}

// Return the component class based on the type
function getComponentFunction(type: string): Function {
  switch(type) {
    case 'heroBlock': return HeroBlock
    case 'ctaBlock': return CtaBlock
    case 'articlesBlock': return ArticlesBlock
  }
}
