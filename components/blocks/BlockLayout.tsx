import { BlockMarginTop, BlockPadding } from '~/types/dimensions'
import { BackgroundColor } from '~/types/colors'
import clsx from 'clsx'
import { useContext } from 'react'
import { BlockOrderContext } from '~/providers/blockOrder'
import type { Block } from '~/types/blocks'

// Apply common layout options to block
export default function BlockLayout({ block, children }):React.ReactElement {
  const blockOrder = useContext(BlockOrderContext)
  return (
    <div className={clsx([
      mapMarginTopToTailwindClass(block, blockOrder.index),
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
  blockIndex: number,
):string {
  if (blockIndex == 0) return ''
  switch (block.marginTop) {
    case BlockMarginTop.Small: return 'mt-2'
    case BlockMarginTop.Medium: return 'mt-6'
    case BlockMarginTop.Large: return 'mt-12'
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
    case BlockPadding.Small: return 'pt-2'
    case BlockPadding.Medium: return 'pt-6'
    case BlockPadding.Large: return 'pt-12'

    // Match margin-top if a different background color compare to previous
    case BlockPadding.Default:
      if (!block.backgroundColor ||
        block.backgroundColor == BackgroundColor.None ||
        block.backgroundColor == previousBlock?.backgroundColor
      ) return ''
      switch (block.marginTop) {
        case BlockMarginTop.Small: return 'pt-2'
        case BlockMarginTop.Medium: return 'pt-6'
        case BlockMarginTop.Large: return 'pt-12'
        default: return ''
      }

    default: return ''
  }
}

function mapPaddingBottomToTailwindClass(
  block: Block,
  nextBlock: Block,
):string {
  switch (block.paddingBottom) {

    // Explict sizes
    case BlockPadding.Small: return 'pb-2'
    case BlockPadding.Medium: return 'pb-6'
    case BlockPadding.Large: return 'pb-12'

    // Match margin-top if a different background color compare to previous
    case BlockPadding.Default:
      if (!block.backgroundColor ||
        block.backgroundColor == BackgroundColor.None ||
        block.backgroundColor == nextBlock?.backgroundColor
      ) return ''
      switch (block.marginTop) {
        case BlockMarginTop.Small: return 'pb-2'
        case BlockMarginTop.Medium: return 'pb-6'
        case BlockMarginTop.Large: return 'pb-12'
        default: return ''
      }

    default: return ''
  }
}
