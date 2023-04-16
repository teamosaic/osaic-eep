import {
  BlockMarginTop,
  BlockPadding,
  BackgroundColor,
  HideWhen,
  Block
} from '~/types'
import clsx from 'clsx'
import { useContext } from 'react'
import { BlockOrderContext } from '~/providers/blockOrder'

// Apply common layout options to block
export default function BlockParent({ block, children }):React.ReactElement {

  // If the block is disabled, don't render anything
  if (block.disabled) return

  // Else render wrapper block with clases for common functionality
  const blockOrder = useContext(BlockOrderContext)
  return (
    <div className={clsx([
      mapHideWhenToTailwindClass(block),
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

// Adds classes that hide the block based on media query constaints
function mapHideWhenToTailwindClass(block: Block): string[] {
  return (block.hideWhen || []).map(hideWhen => {
    switch (hideWhen) {
      case HideWhen.Mobile: return 'when-mobile:hidden'
      case HideWhen.Tablet: return 'when-tablet:hidden'
      case HideWhen.Desktop: return 'when-desktop:hidden'
    }
  })
}

// Adds spacing between previous block
function mapMarginTopToTailwindClass(
  block: Block,
  previousBlock: Block,
):string {

  // Is the first block, so don't add margin
  if (!previousBlock) return

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
  }
}

// Adds a background color
function mapBackgroundColorToTailwindClass(block: Block): string {
  if (!('backgroundColor' in block)) return
  switch(block.backgroundColor) {
    case BackgroundColor.Dark: return 'bg-sky-800/10'
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

    // Add padding top if  this block has a non-empty background and
    // has a different background than the previous block
    case BlockPadding.Matching:
      if (!hasBackground(block) ||
        sameBackground(block, previousBlock)) return
      switch (block.marginTop) {
        case BlockMarginTop.Small: return 'pt-sm'
        case BlockMarginTop.Medium: return 'pt-md'
        case BlockMarginTop.Large: return 'pt-lg'
      }
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
      if (!hasBackground(block) ||
        sameBackground(block, nextBlock)) return
      switch (block.marginTop) {
        case BlockMarginTop.Small: return 'pb-sm'
        case BlockMarginTop.Medium: return 'pb-md'
        case BlockMarginTop.Large: return 'pb-lg'
      }
  }
}

// Helper to determine if a background was set on a block
function hasBackground(block: Block): Boolean {
  return 'backgroundColor' in block &&
    block.backgroundColor &&
    block.backgroundColor != BackgroundColor.None
}

// Compare to blocks to see if they have the same background settings
function sameBackground(block1: Block, block2: Block): Boolean {
  const color1 = ('backgroundColor' in block1 && block1.backgroundColor) ||
    BackgroundColor.None
  const color2 = ('backgroundColor' in block2 && block2.backgroundColor) ||
    BackgroundColor.None
  return color1 == color2
}
