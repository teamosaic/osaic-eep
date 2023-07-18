import { TfiLayoutMediaCenterAlt } from 'react-icons/tfi'

import { createListOptionsFromEnum,imageWithAlt,makeBlockSchema } from '~/sanity/lib/schema'
import { SplitBlockType } from '~/types'

export const splitBlockSchema = makeBlockSchema({
  name: 'splitBlock',
  icon: TfiLayoutMediaCenterAlt,
  contentFields: [
    {
      name: 'type',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: SplitBlockType.ImageLeft,
      options: {
        list: createListOptionsFromEnum(SplitBlockType, {
          [SplitBlockType.ImageLeft]: 'Image Left',
          [SplitBlockType.ImageRight]: 'Image Right',
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
