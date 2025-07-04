import clsx from 'clsx'
import { useContext } from 'react'

import { mapOption, mapOptions } from '~/lib/helpers'
import { BlockOrderContext } from '~/providers/blockOrder'
import {
  BackgroundColor,
  Block,
  BlockBackground,
  BlockPadding,
  BlockSpacing,
  HideWhen,
} from '~/types'

// Apply common layout options to block
export default function BlockParent({ block, children }: {
  block: Block
  children: React.ReactNode
}):React.ReactElement {
  const blockOrder = useContext(BlockOrderContext)

  // Else render wrapper block with clases for common functionality
  return (
    <div className={clsx([

      // Hide at different viewports
      mapOptions(block.hideWhen, {
        [HideWhen.Mobile]: 'when-mobile:hidden',
        [HideWhen.Tablet]: 'when-tablet:hidden',
        [HideWhen.Desktop]: 'when-desktop:hidden',
      }),

      // Apply margin top between blocks
      mapBlockSpacingToTailwindClass(block, blockOrder.previous),

      // Set a background color
      'backgroundColor' in block && mapOption(block.backgroundColor, {
        [BackgroundColor.Faint]: 'bg-indigo-200',
        [BackgroundColor.Vibrant]: 'bg-indigo-700 text-white',
        [BackgroundColor.Dark]: 'bg-gray-900 text-white',
      }),

      // Set padding within block, like if there is a background
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

// Adds spacing between previous block
export function mapBlockSpacingToTailwindClass(
  block: Block,
  previousBlock: Block,
):string {

  // Is the first block, so don't add margin
  if (!previousBlock) return

  // If the previous block has the same background, render using padding so
  // the background is un-interupted between the blocks
  if (hasBackground(block) && sameBackground(block, previousBlock)) {
    return spacingToPaddingTop(block.blockSpacing)
  } else {
    return spacingToMarginTop(block.blockSpacing)
  }
}

// Convert spacing to padding top classes
export function spacingToPaddingTop(blockSpacing: BlockSpacing):string {
  switch (blockSpacing) {
    case BlockSpacing.Small: return 'pt-sm'
    case BlockSpacing.Medium:
    case undefined: return 'pt-md'
    case BlockSpacing.Large: return 'pt-lg'
  }
}

// Convert spacing to padding bottom classes
function spacingToPaddingBottom(blockSpacing: BlockSpacing):string {
  switch (blockSpacing) {
    case BlockSpacing.Small: return 'pb-sm'
    case BlockSpacing.Medium:
    case undefined: return 'pb-md'
    case BlockSpacing.Large: return 'pb-lg'
  }
}

// Convert spacing to margin top classes
function spacingToMarginTop(blockSpacing: BlockSpacing):string {
  switch (blockSpacing) {
    case BlockSpacing.Small: return 'mt-sm'
    case BlockSpacing.Medium:
    case undefined: return 'mt-md'
    case BlockSpacing.Large: return 'mt-lg'
  }
}

// Adds padding above a block, like when there is a background color
function mapPaddingTopToTailwindClass(
  block: Block,
  previousBlock: Block,
):string {
  if (!('paddingTop' in block)) return
  switch (block.paddingTop) {

    // Explict sizes
    case BlockPadding.Small: return 'pt-sm'
    case BlockPadding.Medium: return 'pt-md'
    case BlockPadding.Large: return 'pt-lg'

    // Add padding top if this block has a non-empty background and
    // has a different background than the previous block
    case BlockPadding.Matching:
      return hasBackground(block) && !sameBackground(block, previousBlock) ?
        spacingToPaddingTop(block.blockSpacing) : null
  }
}

// Adds padding below a block, like when there is a background color
function mapPaddingBottomToTailwindClass(
  block: Block,
  nextBlock: Block,
):string {
  if (!('paddingBottom' in block)) return
  switch (block.paddingBottom) {

    // Explict sizes
    case BlockPadding.Small: return 'pb-sm'
    case BlockPadding.Medium: return 'pb-md'
    case BlockPadding.Large: return 'pb-lg'

    // Add padding bottom if this block has a non-empty background and
    // has a different background than the next block
    case BlockPadding.Matching:
      return hasBackground(block) && !sameBackground(block, nextBlock) ?
        spacingToPaddingBottom(block.blockSpacing) : null
  }
}

// Helper to determine if a background was set on a block
export function hasBackground(block: Block): Boolean {
  return block && 'backgroundColor' in block && !!block.backgroundColor
}

// Get the background of a block in Typescript friendly way
function getBackground(block: Block): BackgroundColor {
  return hasBackground(block) ?
    (block as BlockBackground).backgroundColor :
    BackgroundColor.None
}

// Compare to blocks to see if they have the same background settings
function sameBackground(block1: Block, block2: Block): Boolean {
  return getBackground(block1) == getBackground(block2)
}
