import { BlockPadding, BackgroundColor } from '~/types'
import { createListOptionsFromEnum } from '~/sanity/lib/schema/fieldSchemaUtils'
import { setGroup } from '~/sanity/lib/schema/fieldGroupSchemaUtils'

export const blockBackgroundFields = setGroup('background', [
  {
    name: 'backgroundColor',
    type: 'string',
    description: 'The background color of the whole Block.',
    initialValue: BackgroundColor.None,
    options: {
      list: createListOptionsFromEnum(BackgroundColor),
      layout: 'radio'
    },
  },
  {
    name: 'paddingTop',
    type: 'string',
    description: 'This applies space within the Block at it\'s top. The "Matching" option makes the padding equal to the value of the "Margin Top" when this "Background Color" is different than the previous Block.',
    initialValue: BlockPadding.Matching,
    hidden: ({ parent }) => !parent?.backgroundColor
      || parent.backgroundColor == BackgroundColor.None,
    options: {
      list: createListOptionsFromEnum(BlockPadding),
      layout: 'dropdown' // Because it should typically be left as default
    },
  },
  {
    name: 'paddingBottom',
    type: 'string',
    description: 'This applies space within the Block at it\'s bottom. The "Matching" option makes the padding equal to the value of the "Margin Top" when this "Background Color" is different than the following Block.',
    initialValue: BlockPadding.Matching,
    hidden: ({ parent }) => !parent?.backgroundColor
      || parent.backgroundColor == BackgroundColor.None,
    options: {
      list: createListOptionsFromEnum(BlockPadding),
      layout: 'dropdown' // Because it should typically be left as default
    },
  },
])
