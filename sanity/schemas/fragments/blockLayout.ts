import { BlockMarginTop } from '~/types/dimensions'
import { createOptionsFromEnum } from '~/sanity/lib/options'

export const blockLayoutFields = [
  {
    name: 'marginTop',
    type: 'string',
    group: 'layout',
    description: 'The space between this Block and the preceeding Block. This is forced to "None" if this is the first Block in a list.',
    initialValue: BlockMarginTop.Medium,
    options: {
      list: createOptionsFromEnum(BlockMarginTop),
      layout: 'radio'
    },
  },
]
