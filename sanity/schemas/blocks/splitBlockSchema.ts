import { TfiLayoutMediaCenterAlt } from 'react-icons/tfi'

import { createListOptionsFromEnum,imageWithAlt,makeBlockSchema } from '~/sanity/lib/schema'
import { SplitBlockOrientation } from '~/types'

export const splitBlockSchema = makeBlockSchema({
  name: 'splitBlock',
  icon: TfiLayoutMediaCenterAlt,
  contentFields: [

    {
      name: 'orientation',
      type: 'string',
      description: 'On desktop, the column within which the Body text should be rendered.',
      validation: Rule => Rule.required(),
      initialValue: SplitBlockOrientation.TextRight,
      options: {
        list: createListOptionsFromEnum(SplitBlockOrientation, {
          [SplitBlockOrientation.TextRight]: 'Text Right',
          [SplitBlockOrientation.TextLeft]: 'Text Left',
        }),
        layout: 'radio'
      }
    },

    {
      name: 'body',
      type: 'array',
      description: 'The copy text for the Block.',
      of: [
        { type: 'block' },
        { type: 'buttonList' },
      ],
    },

    imageWithAlt({
      name: 'image',
      description: 'Main image for the block.',
    }),
  ]
})
