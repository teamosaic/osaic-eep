import dynamic from 'next/dynamic'
import type { ComponentType, ReactNode } from 'react'

import { type BlockOrder,BlockOrderContext } from '~/providers/blockOrder'
import type { Block } from '~/types'

import BlockParent from './BlockParent'

// Import blocks on demand
const ArticlesBlock = dynamic(() => import('./ArticlesBlock'))
const CtaBlock = dynamic(() => import('./ctaBlocks/CtaBlock'))
const FaqBlock = dynamic(() => import('./FaqBlock'))
const HeroBlock = dynamic(() => import('./HeroBlock'))
const SplitBlock = dynamic(() => import('./SplitBlock'))

// Render non-disabled blocks based on type, wrapped in BlockParent
export default function BlocksList({ blocks }: {
  blocks: Block[]
}) {
  return (<>{
    (blocks || [])
    .filter(block => !block?.disabled)
    .map(renderBlock)
  }</>)
}

// Render a block with wrapping components/context
export function renderBlock(
  block: Block,
  index: number,
  blocks: Block[],
): ReactNode {

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
function makeBlockInstance(block: any): ReactNode {
	const ComponentFunction = getComponentFunction(block._type)
	if (!ComponentFunction) return
	return <ComponentFunction {...block} />
}

// Return the component class based on the type
function getComponentFunction(type: string): ComponentType {
  switch(type) {
    case 'articlesBlock': return ArticlesBlock
    case 'ctaBlock': return CtaBlock
    case 'faqBlock': return FaqBlock
    case 'heroBlock': return HeroBlock
    case 'splitBlock': return SplitBlock
  }
}
