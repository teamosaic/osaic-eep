import { TfiLayoutMediaCenterAlt } from 'react-icons/tfi'

import { imageWithAlt,makeBlockSchema } from '~/sanity/lib/schema'

export const splitBlockSchema = makeBlockSchema({
  name: 'splitBlock',
  icon: TfiLayoutMediaCenterAlt,
  contentFields: [

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
