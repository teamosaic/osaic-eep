import { BlockMarginTop } from '~/types'
import { createListOptionsFromEnum } from '~/sanity/lib/options'
import { HideWhen } from '~/types'

export const blockLayoutFields = [
  {
    name: 'marginTop',
    type: 'string',
    group: 'layout',
    description: 'The space between this Block and the preceeding Block. This is forced to "None" if this is the first Block in a list.',
    initialValue: BlockMarginTop.Medium,
    options: {
      list: createListOptionsFromEnum(BlockMarginTop),
      layout: 'radio'
    },
  },
  {
    name: 'disabled',
    type: 'boolean',
    group: 'layout',
    description: 'Disabing prevents this Block from rendering without your having to delete it.',
    initialValue: false,
  },
  {
    name: 'hideWhen',
    type: 'array',
    group: 'layout',
    description: 'Hide the Block when the device viewport is...',
    of: [{ type: 'string' }],
    options: {
      list: createListOptionsFromEnum(HideWhen, {
        mobile: 'Mobile ( <768px )',
        tablet: 'Tablet ( >=768px and <=1024px )',
        desktop: 'Desktop ( >1024px )',
      }),
    },
  },
]
