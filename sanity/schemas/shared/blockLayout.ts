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

export const blockLayoutFields = [
  {
    name: 'marginTop',
    type: 'string',
    group: 'layout',
    description: 'The space between this Block and the preceeding Block. This is forced to "None" if this is the first Block in a list.',
    initialValue: 'medium',
    options: {
      list: createOptionsFromEnum(BlockMarginTop),
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
      list: createOptionsFromEnum(BackgroundColor),
      layout: 'radio'
    },
  },
  {
    name: 'paddingTop',
    type: 'string',
    group: 'layout',
    description: 'This applies space within the Block at it\'s top. The "Default" option makes the padding equal to the value of the "Margin Top" when this "Background Color" is different than the previous Block.',
    initialValue: 'medium',
    hidden: ({ parent }) => !parent?.backgroundColor
      || parent.backgroundColor == BackgroundColor.None,
    options: {
      list: createOptionsFromEnum(BlockPadding),
      layout: 'radio'
    },
  },
  {
    name: 'paddingBottom',
    type: 'string',
    group: 'layout',
    description: 'This applies space within the Block at it\'s bottom. The "Default" option makes the padding equal to the value of the "Margin Top" when this "Background Color" is different than the following Block.',
    initialValue: 'medium',
    hidden: ({ parent }) => !parent?.backgroundColor
      || parent.backgroundColor == BackgroundColor.None,
    options: {
      list: createOptionsFromEnum(BlockPadding),
      layout: 'radio'
    },
  },
]
