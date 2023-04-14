import { BlockPadding } from '~/types/dimensions'
import { BackgroundColor } from '~/types/colors'
import { createOptionsFromEnum } from '~/sanity/lib/options'

export const blockBackgroundFields = [
  {
    name: 'backgroundColor',
    type: 'string',
    group: 'background',
    description: 'The background color of the whole Block.',
    initialValue: BackgroundColor.None,
    options: {
      list: createOptionsFromEnum(BackgroundColor),
      layout: 'radio'
    },
  },
  {
    name: 'paddingTop',
    type: 'string',
    group: 'background',
    description: 'This applies space within the Block at it\'s top. The "Matching" option makes the padding equal to the value of the "Margin Top" when this "Background Color" is different than the previous Block.',
    initialValue: BlockPadding.Matching,
    hidden: ({ parent }) => !parent?.backgroundColor
      || parent.backgroundColor == BackgroundColor.None,
    options: {
      list: createOptionsFromEnum(BlockPadding),
      layout: 'dropdown' // Because it should typically be left as default
    },
  },
  {
    name: 'paddingBottom',
    type: 'string',
    group: 'background',
    description: 'This applies space within the Block at it\'s bottom. The "Matching" option makes the padding equal to the value of the "Margin Top" when this "Background Color" is different than the following Block.',
    initialValue: BlockPadding.Matching,
    hidden: ({ parent }) => !parent?.backgroundColor
      || parent.backgroundColor == BackgroundColor.None,
    options: {
      list: createOptionsFromEnum(BlockPadding),
      layout: 'dropdown' // Because it should typically be left as default
    },
  },
]
