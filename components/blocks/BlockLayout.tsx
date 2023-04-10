import { BlockMarginTop, BlockPadding } from '~/types/dimensions'
import { BackgroundColor } from '~/types/colors'
import clsx from 'clsx'

// Apply common layout options to block
export default function BlockLayout({ block, children }):React.ReactElement {
  return (
    <div className={clsx([
      mapMarginTopToTailwindClass(block.marginTop),
      mapPaddingTopToTailwindClass(block.paddingTop),
      mapPaddingBottomToTailwindClass(block.paddingBottom),
    ])}>
      { children }
    </div>

  )
}

// Map dimension props to tailwind classes. This must return a full class name:
// https://tailwindcss.com/docs/customizing-spacing
// https://stackoverflow.com/a/74959709/59160

export function mapMarginTopToTailwindClass(value: BlockMarginTop):string {
  switch (value) {
    case BlockMarginTop.Small: return 'mt-2 first:mt-0'
    case BlockMarginTop.Medium: return 'mt-6 first:mt-0'
    case BlockMarginTop.Large: return 'mt-12 first:mt-0'
    default: return ''
  }
}

export function mapPaddingTopToTailwindClass(value: BlockPadding):string {
  switch (value) {
    case BlockPadding.Small: return 'pt-2'
    case BlockPadding.Medium: return 'pt-6'
    case BlockPadding.Large: return 'pt-12'
    default: return ''
  }
}

export function mapPaddingBottomToTailwindClass(value: BlockPadding):string {
  switch (value) {
    case BlockPadding.Small: return 'pb-2'
    case BlockPadding.Medium: return 'pb-6'
    case BlockPadding.Large: return 'pb-12'
    default: return ''
  }
}
