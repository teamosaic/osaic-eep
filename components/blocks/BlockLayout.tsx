import { BlockMarginTop, BlockPadding } from '~/types'
import { BackgroundColor } from '~/types'
import clsx from 'clsx'
import { useContext } from 'react'
import { BlockOrderContext } from '~/providers/blockOrder'
import type { Block } from '~/types'

// Apply common layout options to block
export default function BlockLayout({ block, children }):React.ReactElement {
  const blockOrder = useContext(BlockOrderContext)
  return (
    <div className={clsx([
      mapMarginTopToTailwindClass(block, blockOrder.previous),
      mapBackgroundColorToTailwindClass(block),
      mapPaddingTopToTailwindClass(block, blockOrder.previous),
      mapPaddingBottomToTailwindClass(block, blockOrder.next),
    ])}>
      { children }
    </div>
  )
}

// Map props to tailwind classes. This must return a full class name:
// https://tailwindcss.com/docs/customizing-spacing
// https://stackoverflow.com/a/74959709/59160

function mapMarginTopToTailwindClass(
  block: Block,
  previousBlock: Block,
):string {

  // Is the first block, so don't add margin
  if (!previousBlock) return ''

  // If the previous block has the same background, render using padding so
  // the background is un-interupted between the blocks
  switch (block.marginTop) {
    case BlockMarginTop.Small:
      return hasBackground(block) &&
        sameBackground(block, previousBlock) ? 'pt-sm' : 'mt-sm'
    case BlockMarginTop.Medium:
      return hasBackground(block) &&
        sameBackground(block, previousBlock) ? 'pt-md' : 'mt-md'
    case BlockMarginTop.Large:
      return hasBackground(block) &&
        sameBackground(block, previousBlock) ? 'pt-lg' : 'mt-lg'

    // No gap
    default: return ''
  }
}

function mapBackgroundColorToTailwindClass(block: Block): string {
  switch(block.backgroundColor) {
    case BackgroundColor.Dark: return 'bg-sky-800/10'
    default: return ''
  }
}

function mapPaddingTopToTailwindClass(
  block: Block,
  previousBlock: Block,
):string {
  switch (block.paddingTop) {

    // Explict sizes
    case BlockPadding.Small: return 'pt-sm'
    case BlockPadding.Medium: return 'pt-md'
    case BlockPadding.Large: return 'pt-lg'

    // Add padding top if  this block has a non-empty background and
    // has a different background than the previous block
    case BlockPadding.Matching:
      if (!hasBackground(block) ||
        sameBackground(block, previousBlock)) return ''
      switch (block.marginTop) {
        case BlockMarginTop.Small: return 'pt-sm'
        case BlockMarginTop.Medium: return 'pt-md'
        case BlockMarginTop.Large: return 'pt-lg'
        default: return ''
      }

    // No padding
    default: return ''
  }
}

function mapPaddingBottomToTailwindClass(
  block: Block,
  nextBlock: Block,
):string {
  switch (block.paddingBottom) {

    // Explict sizes
    case BlockPadding.Small: return 'pb-sm'
    case BlockPadding.Medium: return 'pb-md'
    case BlockPadding.Large: return 'pb-lg'

    // Add padding bottom if this block has a non-empty background and
    // has a different background than the next block
    case BlockPadding.Matching:
      if (!hasBackground(block) ||
        sameBackground(block, nextBlock)) return ''
      switch (block.marginTop) {
        case BlockMarginTop.Small: return 'pb-sm'
        case BlockMarginTop.Medium: return 'pb-md'
        case BlockMarginTop.Large: return 'pb-lg'
        default: return ''
      }

    // No padding
    default: return ''
  }
}

function hasBackground(block: Block): Boolean {
  return block?.backgroundColor &&
    block.backgroundColor != BackgroundColor.None
}

function sameBackground(block1: Block, block2: Block): Boolean {
  return (block1?.backgroundColor || BackgroundColor.None) ==
    (block2?.backgroundColor || BackgroundColor.None)
}
