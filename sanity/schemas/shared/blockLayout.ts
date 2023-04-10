import { BlockMarginTop, BlockPadding } from '~/types/dimensions'

const BlockMarginTopOptions = Object.entries(BlockMarginTop)
  .map(([ title, value ]) => ({ title, value }))

const BlockPaddingTopOptions = Object.entries(BlockPadding)
  .map(([ title, value ]) => ({ title, value }))

const BlockPaddingBottomOptions = Object.entries(BlockPadding)
  .map(([ title, value ]) => ({ title, value }))

const Colors = [
  { title: 'Transparent', value: 'none' },
  { title: 'Dark', value: 'dark' },
]

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
    name: 'blockBackground',
    title: 'Background',
    description: 'Fields that work together to set a custom background for the Block.',
    type: 'object',
    group: 'layout',
    fields: [
      {
        name: 'color',
        type: 'string',
        description: 'The background color of the whole Block.',
        initialValue: 'none',
        options: {
          list: Colors,
          layout: 'radio'
        },
      },
      {
        name: 'paddingTop',
        type: 'string',
        description: 'This applies space within the Block at it\'s top.',
        initialValue: 'medium',
        options: {
          list: BlockPaddingTopOptions,
          layout: 'radio'
        },
      },
      {
        name: 'paddingBottom',
        type: 'string',
        description: 'This applies space within the Block at it\'s bottom.',
        initialValue: 'medium',
        options: {
          list: BlockPaddingBottomOptions,
          layout: 'radio'
        },
      },
    ]
  },
]
