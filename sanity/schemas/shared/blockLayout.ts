import { BlockMarginTop, BlockPadding } from '~/types/dimensions'
import { BackgroundColor } from '~/types/colors'

// Create a Sanity options array from an enum type, supporting passing in
// custom title overrides
function createOptionsFromEnum(
  enumObj: object,
  customTitles: object = {}
):{ title: string, value: string }[] {
  return Object.entries(enumObj).map(([ title, value ]) => ({
    title: customTitles[value] || title,
    value
  }))
}

const BlockMarginTopOptions = createOptionsFromEnum(BlockMarginTop)

const BlockPaddingTopOptions = createOptionsFromEnum(BlockPadding, {
  [BlockPadding.Default]: 'Equal to Margin Top if this Background Color is different than the previous Block'
})

const BlockPaddingBottomOptions = createOptionsFromEnum(BlockPadding, {
  [BlockPadding.Default]: 'Equal to Margin Top if this Background Color is different than the next Block'
})

const BackgroundColorOptions = createOptionsFromEnum(BackgroundColor)


export const blockLayoutFields = [
  {
    name: 'marginTop',
    type: 'string',
    group: 'layout',
    description: 'The space between this Block and the preceeding Block. This is forced to "None" if this is the first Block in a list.',
    initialValue: 'medium',
    options: {
      list: BlockMarginTopOptions,
      layout: 'radio'
    },
  },
  {
    name: 'backgroundColor',
    type: 'string',
    group: 'layout',
    description: 'The background color of the whole Block.',
    initialValue: 'none',
    options: {
      list: BackgroundColorOptions,
      layout: 'radio'
    },
  },
  {
    name: 'paddingTop',
    type: 'string',
    group: 'layout',
    description: 'This applies space within the Block at it\'s top.',
    initialValue: 'medium',
    hidden: ({ parent }) => !parent?.backgroundColor
      || parent.backgroundColor == BackgroundColor.None,
    options: {
      list: BlockPaddingTopOptions,
      layout: 'radio'
    },
  },
  {
    name: 'paddingBottom',
    type: 'string',
    group: 'layout',
    description: 'This applies space within the Block at it\'s bottom.',
    initialValue: 'medium',
    hidden: ({ parent }) => !parent?.backgroundColor
      || parent.backgroundColor == BackgroundColor.None,
    options: {
      list: BlockPaddingBottomOptions,
      layout: 'radio'
    },
  },
]
